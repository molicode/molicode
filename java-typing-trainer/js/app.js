/* =====================================================================
 * JavaTyper — Motor de la aplicación
 * - Renderiza el plan de estudios y las lecciones
 * - Motor de tipeo: avance carácter a carácter, errores, PPM, precisión
 * - La sangría inicial de cada línea se salta automáticamente
 * - Progreso persistido en localStorage
 * ===================================================================== */

const STORAGE_KEY = "javatyper-progress-v1";

const App = {
  progress: {},          // { lessonId: { completed, bestWpm, bestAcc } }
  currentModule: null,
  currentLesson: null,

  // Estado de la sesión de tipeo
  chars: [],             // spans renderizados
  code: "",
  pos: 0,                // índice del carácter actual
  errors: 0,
  typedCount: 0,
  startTime: null,
  finished: false,
  statTimer: null,

  /* ================= Inicialización ================= */

  init() {
    this.progress = this.loadProgress();
    this.renderCurriculum();
    this.updateGlobalProgress();
    Keyboard.render();
    this.bindEvents();
  },

  loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  },

  saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.progress));
  },

  bindEvents() {
    document.getElementById("start-btn").addEventListener("click", () => {
      this.openLesson(CURRICULUM[0], CURRICULUM[0].lessons[0]);
    });

    document.getElementById("reset-progress").addEventListener("click", () => {
      if (confirm("¿Seguro que quieres borrar todo tu progreso?")) {
        this.progress = {};
        this.saveProgress();
        this.renderCurriculum();
        this.updateGlobalProgress();
      }
    });

    document.getElementById("retry-btn").addEventListener("click", () => {
      this.hideModal();
      this.startTyping();
    });

    document.getElementById("next-btn").addEventListener("click", () => {
      this.hideModal();
      this.goToNextLesson();
    });

    const codeArea = document.getElementById("code-area");
    codeArea.addEventListener("focus", () => {
      document.getElementById("focus-hint").classList.add("hidden");
    });
    codeArea.addEventListener("blur", () => {
      if (!this.finished && this.currentLesson) {
        document.getElementById("focus-hint").classList.remove("hidden");
      }
    });
    codeArea.addEventListener("keydown", e => this.handleKey(e));
  },

  /* ================= Sidebar / curriculum ================= */

  renderCurriculum() {
    const nav = document.getElementById("curriculum");
    nav.innerHTML = "";

    CURRICULUM.forEach((module, mi) => {
      const moduleEl = document.createElement("div");
      moduleEl.className = "module" + (mi === 0 ? " open" : "");

      const completedCount = module.lessons
        .filter(l => this.progress[l.id]?.completed).length;

      const titleEl = document.createElement("div");
      titleEl.className = "module-title";
      titleEl.innerHTML =
        `<span>${module.title}</span>` +
        `<span class="module-count">${completedCount}/${module.lessons.length}</span>`;
      titleEl.addEventListener("click", () => moduleEl.classList.toggle("open"));
      moduleEl.appendChild(titleEl);

      const lessonsEl = document.createElement("div");
      lessonsEl.className = "module-lessons";

      module.lessons.forEach(lesson => {
        const done = this.progress[lesson.id]?.completed;
        const item = document.createElement("div");
        item.className = "lesson-item" + (done ? " done" : "");
        item.dataset.lessonId = lesson.id;
        item.innerHTML =
          `<span class="check">${done ? "✓" : "○"}</span><span>${lesson.title}</span>`;
        item.addEventListener("click", () => this.openLesson(module, lesson));
        lessonsEl.appendChild(item);
      });

      moduleEl.appendChild(lessonsEl);
      nav.appendChild(moduleEl);
    });
  },

  updateGlobalProgress() {
    const all = CURRICULUM.flatMap(m => m.lessons);
    const done = all.filter(l => this.progress[l.id]?.completed).length;
    const pct = Math.round((done / all.length) * 100);
    document.getElementById("global-progress-fill").style.width = pct + "%";
    document.getElementById("global-progress-text").textContent = pct + "%";
  },

  /* ================= Lección ================= */

  openLesson(module, lesson) {
    this.currentModule = module;
    this.currentLesson = lesson;

    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("lesson").classList.remove("hidden");

    document.getElementById("lesson-module").textContent = module.title;
    document.getElementById("lesson-title").textContent = lesson.title;
    document.getElementById("theory-content").innerHTML = lesson.theory;

    document.querySelectorAll(".lesson-item").forEach(el => {
      el.classList.toggle("active", el.dataset.lessonId === lesson.id);
    });

    // Abrir el módulo de la lección activa en el sidebar
    document.querySelectorAll(".module").forEach((el, i) => {
      if (CURRICULUM[i] === module) el.classList.add("open");
    });

    this.startTyping();
    document.getElementById("code-area").focus();
  },

  goToNextLesson() {
    const flat = [];
    CURRICULUM.forEach(m => m.lessons.forEach(l => flat.push({ m, l })));
    const idx = flat.findIndex(x => x.l === this.currentLesson);
    if (idx >= 0 && idx < flat.length - 1) {
      const next = flat[idx + 1];
      this.openLesson(next.m, next.l);
    } else {
      alert("🏆 ¡Has completado todas las lecciones del curso!");
    }
  },

  /* ================= Motor de tipeo ================= */

  startTyping() {
    this.code = this.currentLesson.code;
    this.pos = 0;
    this.errors = 0;
    this.typedCount = 0;
    this.startTime = null;
    this.finished = false;
    clearInterval(this.statTimer);

    const display = document.getElementById("code-display");
    display.innerHTML = "";
    this.chars = [];

    for (const ch of this.code) {
      const span = document.createElement("span");
      span.textContent = ch;
      span.className = "pending";
      display.appendChild(span);
      this.chars.push(span);
    }

    this.skipAutoChars();
    this.setCurrent();
    this.updateStats();
    document.getElementById("code-area").scrollTop = 0;
  },

  /** Marca el carácter actual y actualiza el teclado virtual */
  setCurrent() {
    if (this.pos < this.chars.length) {
      this.chars[this.pos].classList.add("current");
      this.chars[this.pos].classList.remove("pending");
      Keyboard.highlight(this.code[this.pos]);
      this.chars[this.pos].scrollIntoView({ block: "nearest" });
    } else {
      Keyboard.highlight(null);
    }
  },

  clearCurrent() {
    if (this.pos < this.chars.length) {
      this.chars[this.pos].classList.remove("current");
      if (!this.chars[this.pos].classList.contains("correct") &&
          !this.chars[this.pos].classList.contains("skipped")) {
        this.chars[this.pos].classList.add("pending");
      }
    }
  },

  /** Salta automáticamente la sangría al inicio de línea */
  skipAutoChars() {
    const atLineStart = this.pos === 0 || this.code[this.pos - 1] === "\n";
    if (!atLineStart) return;
    while (this.pos < this.code.length &&
           (this.code[this.pos] === " " || this.code[this.pos] === "\t")) {
      this.chars[this.pos].className = "skipped";
      this.pos++;
    }
  },

  handleKey(e) {
    if (this.finished || !this.currentLesson) return;

    // Ignorar teclas modificadoras y de función
    if (e.key === "Shift" || e.key === "Control" || e.key === "Alt" ||
        e.key === "Meta" || e.key === "CapsLock" || e.key.startsWith("F") &&
        e.key.length > 1 && !isNaN(e.key.slice(1))) {
      return;
    }
    if (e.ctrlKey || e.altKey || e.metaKey) return;

    // Backspace: retroceder y limpiar
    if (e.key === "Backspace") {
      e.preventDefault();
      this.handleBackspace();
      return;
    }

    let typed = null;
    if (e.key === "Enter") typed = "\n";
    else if (e.key === "Tab") { e.preventDefault(); return; }
    else if (e.key.length === 1) typed = e.key;
    else return;

    e.preventDefault();

    if (this.startTime === null) {
      this.startTime = Date.now();
      this.statTimer = setInterval(() => this.updateStats(), 1000);
    }

    const expected = this.code[this.pos];
    const span = this.chars[this.pos];
    this.typedCount++;

    this.clearCurrent();

    if (typed === expected) {
      span.classList.remove("wrong", "pending");
      span.classList.add("correct");
      this.pos++;
      this.skipAutoChars();
    } else {
      span.classList.remove("pending");
      span.classList.add("wrong");
      this.errors++;
      // El usuario debe corregir con Backspace antes de seguir... o
      // reintentar la misma posición: nos quedamos en el mismo índice.
    }

    this.updateStats();

    if (this.pos >= this.code.length) {
      this.finish();
    } else {
      this.setCurrent();
    }
  },

  handleBackspace() {
    // Si el carácter actual está marcado como error, lo limpiamos
    const span = this.chars[this.pos];
    if (span && span.classList.contains("wrong")) {
      span.classList.remove("wrong");
      span.classList.add("pending");
      this.setCurrent();
      return;
    }

    // Retroceder (saltando sangría auto-completada)
    this.clearCurrent();
    while (this.pos > 0) {
      this.pos--;
      const prev = this.chars[this.pos];
      if (prev.classList.contains("skipped")) continue;
      prev.classList.remove("correct", "wrong");
      prev.classList.add("pending");
      break;
    }
    this.setCurrent();
  },

  /* ================= Estadísticas ================= */

  currentWpm() {
    if (!this.startTime) return 0;
    const minutes = (Date.now() - this.startTime) / 60000;
    if (minutes <= 0) return 0;
    const correctChars = this.chars.filter(c =>
      c.classList.contains("correct")).length;
    return Math.round((correctChars / 5) / minutes);
  },

  currentAccuracy() {
    if (this.typedCount === 0) return 100;
    return Math.max(0, Math.round(
      ((this.typedCount - this.errors) / this.typedCount) * 100));
  },

  updateStats() {
    document.getElementById("stat-wpm").textContent = this.currentWpm();
    document.getElementById("stat-acc").textContent = this.currentAccuracy() + "%";
    document.getElementById("stat-err").textContent = this.errors;
    const pct = Math.round((this.pos / this.code.length) * 100);
    document.getElementById("stat-prog").textContent = Math.min(100, pct) + "%";
  },

  /* ================= Finalización ================= */

  finish() {
    this.finished = true;
    clearInterval(this.statTimer);
    Keyboard.highlight(null);

    const wpm = this.currentWpm();
    const acc = this.currentAccuracy();
    const seconds = Math.round((Date.now() - this.startTime) / 1000);

    const prev = this.progress[this.currentLesson.id] || {};
    this.progress[this.currentLesson.id] = {
      completed: true,
      bestWpm: Math.max(prev.bestWpm || 0, wpm),
      bestAcc: Math.max(prev.bestAcc || 0, acc)
    };
    this.saveProgress();
    this.renderCurriculum();
    // Mantener resaltada la lección activa tras re-render
    document.querySelectorAll(".lesson-item").forEach(el => {
      el.classList.toggle("active", el.dataset.lessonId === this.currentLesson.id);
    });
    this.updateGlobalProgress();

    document.getElementById("result-wpm").textContent = wpm;
    document.getElementById("result-acc").textContent = acc + "%";
    document.getElementById("result-time").textContent = seconds + "s";

    let msg;
    if (acc >= 97 && wpm >= 40) {
      msg = "🔥 Impresionante: rápido y casi perfecto. ¡A por la siguiente!";
    } else if (acc >= 90) {
      msg = "💪 Muy bien. La precisión primero, la velocidad llega sola.";
    } else {
      msg = "📈 Buen intento. Repite la lección apuntando a más del 90% de precisión.";
    }
    document.getElementById("result-message").textContent = msg;

    document.getElementById("modal-overlay").classList.remove("hidden");
  },

  hideModal() {
    document.getElementById("modal-overlay").classList.add("hidden");
    document.getElementById("code-area").focus();
  }
};

document.addEventListener("DOMContentLoaded", () => App.init());

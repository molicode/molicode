/* =====================================================================
 * Teclado virtual (distribución US/ANSI) con guía de dedos.
 * Resalta la siguiente tecla a presionar y, si aplica, la tecla Shift.
 * ===================================================================== */

const KEYBOARD_ROWS = [
  [
    { base: "`", shift: "~", label: "`" },
    { base: "1", shift: "!", label: "1" },
    { base: "2", shift: "@", label: "2" },
    { base: "3", shift: "#", label: "3" },
    { base: "4", shift: "$", label: "4" },
    { base: "5", shift: "%", label: "5" },
    { base: "6", shift: "^", label: "6" },
    { base: "7", shift: "&", label: "7" },
    { base: "8", shift: "*", label: "8" },
    { base: "9", shift: "(", label: "9" },
    { base: "0", shift: ")", label: "0" },
    { base: "-", shift: "_", label: "-" },
    { base: "=", shift: "+", label: "=" },
    { base: "Backspace", label: "⌫", cls: "wider" }
  ],
  [
    { base: "Tab", label: "Tab", cls: "wide" },
    { base: "q", shift: "Q", label: "Q" },
    { base: "w", shift: "W", label: "W" },
    { base: "e", shift: "E", label: "E" },
    { base: "r", shift: "R", label: "R" },
    { base: "t", shift: "T", label: "T" },
    { base: "y", shift: "Y", label: "Y" },
    { base: "u", shift: "U", label: "U" },
    { base: "i", shift: "I", label: "I" },
    { base: "o", shift: "O", label: "O" },
    { base: "p", shift: "P", label: "P" },
    { base: "[", shift: "{", label: "[" },
    { base: "]", shift: "}", label: "]" },
    { base: "\\", shift: "|", label: "\\", cls: "wide" }
  ],
  [
    { base: "Caps", label: "Caps", cls: "wider" },
    { base: "a", shift: "A", label: "A" },
    { base: "s", shift: "S", label: "S" },
    { base: "d", shift: "D", label: "D" },
    { base: "f", shift: "F", label: "F" },
    { base: "g", shift: "G", label: "G" },
    { base: "h", shift: "H", label: "H" },
    { base: "j", shift: "J", label: "J" },
    { base: "k", shift: "K", label: "K" },
    { base: "l", shift: "L", label: "L" },
    { base: ";", shift: ":", label: ";" },
    { base: "'", shift: '"', label: "'" },
    { base: "Enter", label: "Enter ↵", cls: "wider" }
  ],
  [
    { base: "ShiftLeft", label: "Shift", cls: "widest" },
    { base: "z", shift: "Z", label: "Z" },
    { base: "x", shift: "X", label: "X" },
    { base: "c", shift: "C", label: "C" },
    { base: "v", shift: "V", label: "V" },
    { base: "b", shift: "B", label: "B" },
    { base: "n", shift: "N", label: "N" },
    { base: "m", shift: "M", label: "M" },
    { base: ",", shift: "<", label: "," },
    { base: ".", shift: ">", label: "." },
    { base: "/", shift: "?", label: "/" },
    { base: "ShiftRight", label: "Shift", cls: "widest" }
  ],
  [
    { base: " ", label: "Espacio", cls: "space" }
  ]
];

/* Dedo asignado a cada tecla base (touch typing estándar):
 * lp/lr/lm/li = meñique/anular/medio/índice izquierdo
 * ri/rm/rr/rp = índice/medio/anular/meñique derecho           */
const FINGER_MAP = {
  "`": "lp", "1": "lp", "2": "lr", "3": "lm", "4": "li", "5": "li",
  "6": "ri", "7": "ri", "8": "rm", "9": "rr", "0": "rp", "-": "rp", "=": "rp",
  "q": "lp", "w": "lr", "e": "lm", "r": "li", "t": "li",
  "y": "ri", "u": "ri", "i": "rm", "o": "rr", "p": "rp",
  "[": "rp", "]": "rp", "\\": "rp",
  "a": "lp", "s": "lr", "d": "lm", "f": "li", "g": "li",
  "h": "ri", "j": "ri", "k": "rm", "l": "rr", ";": "rp", "'": "rp",
  "z": "lp", "x": "lr", "c": "lm", "v": "li", "b": "li",
  "n": "ri", "m": "ri", ",": "rm", ".": "rr", "/": "rp"
};

const Keyboard = {
  keyElements: {},

  /** Construye el teclado en el contenedor #keyboard */
  render() {
    const container = document.getElementById("keyboard");
    container.innerHTML = "";
    this.keyElements = {};

    KEYBOARD_ROWS.forEach(row => {
      const rowEl = document.createElement("div");
      rowEl.className = "kb-row";
      row.forEach(key => {
        const keyEl = document.createElement("div");
        keyEl.className = "key" + (key.cls ? " " + key.cls : "");
        const finger = FINGER_MAP[key.base];
        if (finger) keyEl.classList.add("f-" + finger);
        keyEl.textContent = key.label;
        this.keyElements[key.base] = keyEl;
        rowEl.appendChild(keyEl);
      });
      container.appendChild(rowEl);
    });
  },

  /** Resalta la tecla necesaria para tipear el carácter `char` */
  highlight(char) {
    Object.values(this.keyElements).forEach(el =>
      el.classList.remove("next", "next-shift"));

    if (char === undefined || char === null) return;

    if (char === "\n") {
      this.keyElements["Enter"]?.classList.add("next");
      return;
    }
    if (char === " ") {
      this.keyElements[" "]?.classList.add("next");
      return;
    }

    // Buscar la tecla base que produce este carácter
    for (const row of KEYBOARD_ROWS) {
      for (const key of row) {
        if (key.base === char) {
          this.keyElements[key.base].classList.add("next");
          return;
        }
        if (key.shift === char) {
          this.keyElements[key.base].classList.add("next");
          // Shift de la mano contraria a la del dedo que pulsa
          const finger = FINGER_MAP[key.base] || "ri";
          const shiftKey = finger.startsWith("l") ? "ShiftRight" : "ShiftLeft";
          this.keyElements[shiftKey]?.classList.add("next-shift");
          return;
        }
      }
    }
  }
};

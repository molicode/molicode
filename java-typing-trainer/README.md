# ☕ JavaTyper — Aprende Java tipeando

Aplicación local para aprender Java generando **memoria muscular**: cada lección
te explica un concepto (en español) y luego tipeas el código Java carácter por
carácter, con teclado virtual, velocidad (PPM), precisión y progreso guardado.

![Concepto](https://img.shields.io/badge/lecciones-55-blue) ![Stack](https://img.shields.io/badge/stack-HTML%2FCSS%2FJS%20puro-green) ![Offline](https://img.shields.io/badge/funciona-100%25%20offline-orange)

## 🚀 Cómo ejecutarla en Windows

No necesitas instalar nada:

1. Descarga o clona esta carpeta (`java-typing-trainer`).
2. Haz **doble clic en `JavaTyper.bat`** (o abre `index.html` directamente en
   Chrome/Edge/Firefox).

Eso es todo. Funciona 100% offline y tu progreso se guarda automáticamente en
el navegador (localStorage).

## 📚 Plan de estudios (13 módulos, ~55 lecciones)

| # | Módulo | Qué aprendes |
|---|--------|--------------|
| 1 | Fundamentos | main, variables, primitivos, operadores, Strings, casting |
| 2 | Control de flujo | if/else, switch (clásico y expression), for, while |
| 3 | Métodos y arrays | parámetros, retorno, sobrecarga, arrays |
| 4 | POO | clases, constructores, encapsulación, herencia, polimorfismo, interfaces, records, enums |
| 5 | Colecciones | List, Map, Set, genéricos, Optional |
| 6 | Funcional | lambdas, interfaces funcionales, Streams |
| 7 | Excepciones e hilos | try/catch, excepciones custom, Threads, ExecutorService |
| 8 | Algoritmos y DSA | búsqueda binaria, sorts, stack/queue, listas enlazadas, árboles, BFS, two pointers, frecuencias |
| 9 | Clean Code | nombres, funciones pequeñas, guard clauses, composición |
| 10 | SOLID | los 5 principios con ejemplos prácticos |
| 11 | Patrones de diseño | Singleton, Factory, Builder, Strategy, Observer, Decorator |
| 12 | Spring Boot | @SpringBootApplication, @RestController, @Service, JPA, DTOs, validación, @ControllerAdvice |
| 13 | Microservicios | Feign, Circuit Breaker, Kafka, API Gateway, Docker |

## ⌨️ Cómo se usa

- Lee la **teoría** en el panel izquierdo.
- Haz clic en el código y empieza a **tipear**. El carácter actual aparece resaltado.
- La **sangría inicial de cada línea se salta sola** (como en typing.io).
- <kbd>Enter</kbd> para salto de línea, <kbd>Backspace</kbd> para corregir errores (en rojo).
- El **teclado virtual** te muestra la próxima tecla y, en morado, qué Shift usar.
  El borde de color de cada tecla indica el **dedo** correcto (touch typing).
- Al terminar ves tus PPM, precisión y tiempo. Apunta primero a **+90% de
  precisión**; la velocidad llega sola.

## 🧩 Estructura del proyecto

```
java-typing-trainer/
├── index.html        # Estructura de la app
├── JavaTyper.bat     # Lanzador para Windows
├── css/style.css     # Estilos (tema oscuro)
└── js/
    ├── lessons.js    # 📚 Plan de estudios: módulos, teoría y código
    ├── keyboard.js   # Teclado virtual + mapa de dedos
    └── app.js        # Motor de tipeo, stats y progreso
```

## ➕ Agregar tus propias lecciones

Edita `js/lessons.js`: cada lección es un objeto con `id`, `title`,
`theory` (HTML) y `code` (el texto a tipear). Agrega lecciones a un módulo
existente o crea un módulo nuevo siguiendo el mismo formato.

## 🗺️ Ideas futuras

- Repaso espaciado: re-sugerir lecciones con baja precisión.
- Modo "desafío": tipear sin ver la sangría guiada.
- Dashboard con histórico de PPM por día.
- Empaquetado como app de escritorio (Tauri/Electron) si algún día lo necesitas.

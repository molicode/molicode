/* =====================================================================
 * JavaTyper — Plan de estudios
 * Cada módulo tiene lecciones con:
 *   - theory: explicación en HTML (panel izquierdo)
 *   - code:   el código Java que el usuario debe tipear
 * ===================================================================== */

const CURRICULUM = [

/* ============================================================
 * MÓDULO 1 — FUNDAMENTOS
 * ============================================================ */
{
  id: "fundamentos",
  title: "1. Fundamentos de Java",
  lessons: [
    {
      id: "hola-mundo",
      title: "Hola Mundo y el método main",
      theory: `
<p>Todo programa Java empieza en el método <code>main</code>. La JVM lo busca con esta firma exacta para arrancar tu aplicación.</p>
<ul>
<li><code>public</code>: visible desde cualquier lugar.</li>
<li><code>static</code>: se puede llamar sin crear un objeto.</li>
<li><code>void</code>: no devuelve nada.</li>
<li><code>String[] args</code>: argumentos de la línea de comandos.</li>
</ul>
<p><code>System.out.println</code> imprime texto en consola y salta de línea.</p>
<div class="tip">💡 En Java, el nombre del archivo debe coincidir con el de la clase pública: <code>HolaMundo.java</code>.</div>`,
      code: `public class HolaMundo {
    public static void main(String[] args) {
        System.out.println("Hola, mundo!");
        System.out.println("Empiezo a aprender Java");
    }
}`
    },
    {
      id: "variables-primitivos",
      title: "Variables y tipos primitivos",
      theory: `
<p>Una variable es un espacio en memoria con nombre y tipo. Java es de <strong>tipado estático</strong>: el tipo se declara y no cambia.</p>
<p>Los 8 tipos primitivos más usados:</p>
<ul>
<li><code>int</code>: enteros (32 bits).</li>
<li><code>long</code>: enteros grandes (sufijo <code>L</code>).</li>
<li><code>double</code>: decimales de doble precisión.</li>
<li><code>boolean</code>: <code>true</code> o <code>false</code>.</li>
<li><code>char</code>: un solo carácter entre comillas simples.</li>
</ul>
<div class="tip">💡 Convención: las variables se nombran en <code>camelCase</code> y describen lo que contienen.</div>`,
      code: `int edad = 28;
long poblacionMundial = 8000000000L;
double precio = 19.99;
boolean esActivo = true;
char inicial = 'J';
byte nivel = 5;
short anio = 2026;
float descuento = 0.15f;`
    },
    {
      id: "operadores-aritmeticos",
      title: "Operadores aritméticos y de asignación",
      theory: `
<p>Java tiene los operadores matemáticos clásicos: <code>+ - * /</code> y el módulo <code>%</code> (resto de la división).</p>
<ul>
<li><code>/</code> entre enteros trunca el decimal: <code>7 / 2 == 3</code>.</li>
<li><code>%</code> es muy usado en algoritmos (pares: <code>n % 2 == 0</code>).</li>
<li><code>+=</code>, <code>-=</code>, <code>*=</code> son atajos de asignación.</li>
<li><code>++</code> y <code>--</code> incrementan o decrementan en 1.</li>
</ul>
<div class="tip">💡 Para divisiones con decimales, al menos uno de los operandos debe ser <code>double</code>.</div>`,
      code: `int a = 10;
int b = 3;
int suma = a + b;
int resto = a % b;
double division = (double) a / b;
a += 5;
b++;
System.out.println("Suma: " + suma);
System.out.println("Resto: " + resto);
System.out.println("Division: " + division);`
    },
    {
      id: "operadores-logicos",
      title: "Comparación y operadores lógicos",
      theory: `
<p>Los operadores de comparación devuelven un <code>boolean</code>: <code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>.</p>
<p>Los operadores lógicos combinan condiciones:</p>
<ul>
<li><code>&amp;&amp;</code> (AND): ambas deben ser verdaderas.</li>
<li><code>||</code> (OR): basta con que una sea verdadera.</li>
<li><code>!</code> (NOT): invierte el valor.</li>
</ul>
<div class="tip">⚠️ <code>&amp;&amp;</code> y <code>||</code> hacen <em>cortocircuito</em>: si el resultado ya se conoce, no evalúan el resto. Por eso <code>obj != null &amp;&amp; obj.metodo()</code> es seguro.</div>`,
      code: `int edad = 20;
boolean tieneLicencia = true;
boolean esMayor = edad >= 18;
boolean puedeConducir = esMayor && tieneLicencia;
boolean esMenorOAnciano = edad < 18 || edad > 65;
boolean noPuede = !puedeConducir;
System.out.println("Puede conducir: " + puedeConducir);`
    },
    {
      id: "strings",
      title: "Strings y sus métodos",
      theory: `
<p><code>String</code> no es primitivo: es una clase <strong>inmutable</strong>. Cada "modificación" crea un String nuevo.</p>
<p>Métodos esenciales:</p>
<ul>
<li><code>length()</code>: longitud.</li>
<li><code>toUpperCase()</code> / <code>toLowerCase()</code>.</li>
<li><code>contains()</code>, <code>startsWith()</code>, <code>substring()</code>.</li>
<li><code>equals()</code>: compara contenido. <strong>Nunca uses <code>==</code></strong> para comparar Strings.</li>
<li><code>trim()</code>: quita espacios al inicio y final.</li>
</ul>
<div class="tip">💡 Para concatenar mucho en bucles usa <code>StringBuilder</code>, que sí es mutable y eficiente.</div>`,
      code: `String nombre = "Java Developer";
int longitud = nombre.length();
String mayusculas = nombre.toUpperCase();
boolean contiene = nombre.contains("Java");
String sub = nombre.substring(0, 4);
String saludo = "Hola, " + nombre.trim();
boolean iguales = nombre.equals("java developer");
System.out.println(sub + " tiene " + longitud + " letras");`
    },
    {
      id: "casting-var",
      title: "Casting de tipos y la palabra var",
      theory: `
<p><strong>Casting</strong> es convertir un valor de un tipo a otro:</p>
<ul>
<li><em>Implícito</em> (widening): de menor a mayor, automático. <code>int → long → double</code>.</li>
<li><em>Explícito</em> (narrowing): de mayor a menor, requiere <code>(tipo)</code> y puede perder datos.</li>
</ul>
<p>Desde Java 10, <code>var</code> deja que el compilador infiera el tipo. Sigue siendo tipado estático: el tipo queda fijo.</p>
<div class="tip">💡 <code>Integer.parseInt()</code> y <code>String.valueOf()</code> convierten entre Strings y números.</div>`,
      code: `int entero = 100;
double automatico = entero;
double pi = 3.14159;
int truncado = (int) pi;
var mensaje = "Tipo inferido: String";
var contador = 42;
int desdeTexto = Integer.parseInt("2026");
String aTexto = String.valueOf(truncado);
System.out.println(mensaje + " -> " + desdeTexto);`
    }
  ]
},

/* ============================================================
 * MÓDULO 2 — CONTROL DE FLUJO
 * ============================================================ */
{
  id: "control-flujo",
  title: "2. Control de flujo",
  lessons: [
    {
      id: "if-else",
      title: "if / else if / else",
      theory: `
<p><code>if</code> ejecuta un bloque solo si la condición es <code>true</code>. Se encadena con <code>else if</code> y <code>else</code>.</p>
<ul>
<li>Las condiciones van entre paréntesis y deben ser <code>boolean</code>.</li>
<li>El operador ternario <code>cond ? a : b</code> es un if-else compacto para asignaciones.</li>
</ul>
<div class="tip">💡 Java evalúa los <code>else if</code> en orden y se detiene en el primero verdadero: pon las condiciones más específicas arriba.</div>`,
      code: `int nota = 85;
String resultado;
if (nota >= 90) {
    resultado = "Excelente";
} else if (nota >= 70) {
    resultado = "Aprobado";
} else {
    resultado = "Reprobado";
}
String estado = nota >= 70 ? "PASA" : "NO PASA";
System.out.println(resultado + " - " + estado);`
    },
    {
      id: "switch",
      title: "switch clásico y switch expression",
      theory: `
<p><code>switch</code> compara una variable contra varios casos. El clásico necesita <code>break</code> para no "caer" al siguiente caso.</p>
<p>Desde Java 14 existe la <strong>switch expression</strong> con flechas <code>-&gt;</code>:</p>
<ul>
<li>No necesita <code>break</code>.</li>
<li>Devuelve un valor directamente.</li>
<li>Permite agrupar casos con comas.</li>
</ul>
<div class="tip">💡 En código moderno prefiere la versión con <code>-&gt;</code>: es más segura y legible.</div>`,
      code: `int dia = 3;
String nombre = switch (dia) {
    case 1 -> "Lunes";
    case 2 -> "Martes";
    case 3 -> "Miercoles";
    case 6, 7 -> "Fin de semana";
    default -> "Desconocido";
};
System.out.println("Hoy es: " + nombre);`
    },
    {
      id: "for",
      title: "Bucle for y for-each",
      theory: `
<p>El <code>for</code> clásico tiene tres partes: <em>inicialización; condición; incremento</em>. Es ideal cuando conoces el número de iteraciones o necesitas el índice.</p>
<p>El <strong>for-each</strong> (<code>for (Tipo x : coleccion)</code>) recorre arrays y colecciones sin índice: más limpio cuando solo lees los elementos.</p>
<div class="tip">💡 La variable del for-each es una copia de la referencia: reasignarla no modifica la colección.</div>`,
      code: `for (int i = 1; i <= 5; i++) {
    System.out.println("Iteracion " + i);
}

int[] numeros = {2, 4, 6, 8};
int suma = 0;
for (int n : numeros) {
    suma += n;
}
System.out.println("Suma total: " + suma);`
    },
    {
      id: "while",
      title: "while, do-while, break y continue",
      theory: `
<p><code>while</code> repite mientras la condición sea verdadera (puede no ejecutarse nunca). <code>do-while</code> garantiza al menos una ejecución.</p>
<ul>
<li><code>break</code>: sale del bucle inmediatamente.</li>
<li><code>continue</code>: salta a la siguiente iteración.</li>
</ul>
<div class="tip">⚠️ Asegúrate de que algo dentro del bucle modifique la condición, o tendrás un bucle infinito.</div>`,
      code: `int intentos = 0;
while (intentos < 3) {
    intentos++;
    System.out.println("Intento numero " + intentos);
}

int n = 0;
do {
    n += 2;
    if (n == 6) {
        continue;
    }
    if (n > 8) {
        break;
    }
    System.out.println("Valor: " + n);
} while (true);`
    }
  ]
},

/* ============================================================
 * MÓDULO 3 — MÉTODOS Y ARRAYS
 * ============================================================ */
{
  id: "metodos-arrays",
  title: "3. Métodos y arrays",
  lessons: [
    {
      id: "metodos",
      title: "Métodos: parámetros y retorno",
      theory: `
<p>Un método agrupa lógica reutilizable. Su firma define: visibilidad, tipo de retorno, nombre y parámetros.</p>
<ul>
<li><code>return</code> devuelve el valor y termina el método.</li>
<li>Si el retorno es <code>void</code>, no devuelve nada.</li>
<li>Los nombres de métodos son verbos en <code>camelCase</code>: <code>calcularTotal</code>, <code>esValido</code>.</li>
</ul>
<div class="tip">💡 Un buen método hace <strong>una sola cosa</strong>: lo veremos a fondo en el módulo de Clean Code.</div>`,
      code: `public class Calculadora {

    public static int sumar(int a, int b) {
        return a + b;
    }

    public static boolean esPar(int numero) {
        return numero % 2 == 0;
    }

    public static void main(String[] args) {
        int total = sumar(7, 8);
        System.out.println("Total: " + total);
        System.out.println("Es par: " + esPar(total));
    }
}`
    },
    {
      id: "sobrecarga",
      title: "Sobrecarga de métodos",
      theory: `
<p>La <strong>sobrecarga</strong> (overloading) permite varios métodos con el mismo nombre pero <em>distintos parámetros</em> (cantidad o tipo).</p>
<ul>
<li>El compilador elige la versión correcta según los argumentos.</li>
<li>El tipo de retorno <strong>no</strong> basta para diferenciar sobrecargas.</li>
</ul>
<div class="tip">💡 No confundir con <em>sobrescritura</em> (override), que es redefinir un método heredado: eso viene en POO.</div>`,
      code: `public class Impresora {

    public void imprimir(String texto) {
        System.out.println("Texto: " + texto);
    }

    public void imprimir(int numero) {
        System.out.println("Numero: " + numero);
    }

    public void imprimir(String texto, int veces) {
        for (int i = 0; i < veces; i++) {
            System.out.println(texto);
        }
    }
}`
    },
    {
      id: "arrays",
      title: "Arrays: declarar, recorrer, buscar",
      theory: `
<p>Un array es una colección de <strong>tamaño fijo</strong> de elementos del mismo tipo, con índices desde <code>0</code>.</p>
<ul>
<li><code>arr.length</code>: tamaño (sin paréntesis, es un campo).</li>
<li>Acceder fuera de rango lanza <code>ArrayIndexOutOfBoundsException</code>.</li>
<li>La clase <code>Arrays</code> trae utilidades: <code>sort</code>, <code>toString</code>, <code>fill</code>.</li>
</ul>
<div class="tip">💡 Los arrays son la base de casi todas las estructuras de datos que verás en DSA.</div>`,
      code: `import java.util.Arrays;

public class DemoArrays {
    public static void main(String[] args) {
        int[] notas = {70, 95, 88, 60, 91};
        int mayor = notas[0];
        for (int i = 1; i < notas.length; i++) {
            if (notas[i] > mayor) {
                mayor = notas[i];
            }
        }
        Arrays.sort(notas);
        System.out.println("Mayor: " + mayor);
        System.out.println(Arrays.toString(notas));
    }
}`
    }
  ]
},

/* ============================================================
 * MÓDULO 4 — PROGRAMACIÓN ORIENTADA A OBJETOS
 * ============================================================ */
{
  id: "poo",
  title: "4. POO — Orientación a objetos",
  lessons: [
    {
      id: "clases-objetos",
      title: "Clases, objetos y constructores",
      theory: `
<p>Una <strong>clase</strong> es el plano; un <strong>objeto</strong> es una instancia creada con <code>new</code>.</p>
<ul>
<li>El <strong>constructor</strong> tiene el mismo nombre que la clase y no tiene tipo de retorno.</li>
<li><code>this</code> distingue el atributo del parámetro cuando se llaman igual.</li>
<li>Los atributos guardan el <em>estado</em>; los métodos definen el <em>comportamiento</em>.</li>
</ul>`,
      code: `public class Persona {

    private String nombre;
    private int edad;

    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public void saludar() {
        System.out.println("Hola, soy " + nombre);
    }

    public static void main(String[] args) {
        Persona dev = new Persona("Moli", 25);
        dev.saludar();
    }
}`
    },
    {
      id: "encapsulacion",
      title: "Encapsulación: getters y setters",
      theory: `
<p>La <strong>encapsulación</strong> protege el estado interno: atributos <code>private</code> y acceso controlado mediante métodos públicos.</p>
<ul>
<li><code>get</code>: lee el valor.</li>
<li><code>set</code>: lo modifica, y es el lugar ideal para <strong>validar</strong>.</li>
</ul>
<div class="tip">💡 Ventaja real: puedes cambiar la implementación interna sin romper el código que usa la clase.</div>`,
      code: `public class CuentaBancaria {

    private double saldo;

    public double getSaldo() {
        return saldo;
    }

    public void depositar(double monto) {
        if (monto <= 0) {
            throw new IllegalArgumentException("Monto invalido");
        }
        this.saldo += monto;
    }
}`
    },
    {
      id: "herencia",
      title: "Herencia: extends y super",
      theory: `
<p>La <strong>herencia</strong> permite que una clase hija reutilice y extienda a una clase padre con <code>extends</code>.</p>
<ul>
<li><code>super(...)</code> llama al constructor del padre (debe ser la primera línea).</li>
<li>La hija hereda métodos y atributos no privados.</li>
<li>Java solo permite herencia <strong>simple</strong> (una sola clase padre).</li>
</ul>
<div class="tip">💡 Regla práctica: usa herencia solo si hay una relación "es un" real. Si no, prefiere composición.</div>`,
      code: `public class Empleado {
    protected String nombre;

    public Empleado(String nombre) {
        this.nombre = nombre;
    }
}

public class Gerente extends Empleado {
    private String departamento;

    public Gerente(String nombre, String departamento) {
        super(nombre);
        this.departamento = departamento;
    }
}`
    },
    {
      id: "polimorfismo",
      title: "Polimorfismo y @Override",
      theory: `
<p><strong>Polimorfismo</strong>: una referencia del tipo padre puede apuntar a objetos hijos, y Java ejecuta la versión del método del objeto real en tiempo de ejecución.</p>
<ul>
<li><code>@Override</code> marca que estás sobrescribiendo: el compilador verifica la firma.</li>
<li>Es la base de casi todos los patrones de diseño.</li>
</ul>`,
      code: `public class Animal {
    public void hacerSonido() {
        System.out.println("Sonido generico");
    }
}

public class Perro extends Animal {
    @Override
    public void hacerSonido() {
        System.out.println("Guau guau");
    }
}

Animal mascota = new Perro();
mascota.hacerSonido();`
    },
    {
      id: "interfaces",
      title: "Interfaces",
      theory: `
<p>Una <strong>interface</strong> define un contrato: qué métodos debe tener una clase, sin decir cómo. Se implementa con <code>implements</code>.</p>
<ul>
<li>Una clase puede implementar <strong>varias</strong> interfaces.</li>
<li>Desde Java 8 pueden tener métodos <code>default</code> con implementación.</li>
<li>Son clave para desacoplar: programa contra la interface, no la implementación.</li>
</ul>`,
      code: `public interface Notificador {
    void enviar(String mensaje);

    default void enviarUrgente(String mensaje) {
        enviar("URGENTE: " + mensaje);
    }
}

public class EmailNotificador implements Notificador {
    @Override
    public void enviar(String mensaje) {
        System.out.println("Email: " + mensaje);
    }
}`
    },
    {
      id: "abstractas",
      title: "Clases abstractas",
      theory: `
<p>Una clase <code>abstract</code> no se puede instanciar: existe para ser heredada. Puede mezclar métodos implementados y métodos <code>abstract</code> (sin cuerpo) que las hijas <strong>deben</strong> implementar.</p>
<div class="tip">💡 ¿Interface o abstracta? Interface = contrato puro ("qué hace"). Abstracta = base con lógica compartida ("qué es" + código común).</div>`,
      code: `public abstract class Figura {

    protected String nombre;

    public Figura(String nombre) {
        this.nombre = nombre;
    }

    public abstract double calcularArea();

    public void describir() {
        System.out.println(nombre + ": " + calcularArea());
    }
}

public class Circulo extends Figura {
    private double radio;

    public Circulo(double radio) {
        super("Circulo");
        this.radio = radio;
    }

    @Override
    public double calcularArea() {
        return Math.PI * radio * radio;
    }
}`
    },
    {
      id: "records-enums",
      title: "Records y Enums",
      theory: `
<p><code>enum</code> define un conjunto fijo de constantes con tipo seguro (días, estados, roles).</p>
<p><code>record</code> (Java 16+) crea clases <strong>inmutables</strong> de datos en una línea: genera constructor, getters, <code>equals</code>, <code>hashCode</code> y <code>toString</code> automáticamente.</p>
<div class="tip">💡 Los records son perfectos para DTOs en APIs REST: lo verás en el módulo de Spring.</div>`,
      code: `public enum Estado {
    PENDIENTE,
    EN_PROCESO,
    COMPLETADO
}

public record Producto(String nombre, double precio) {

    public double precioConIva() {
        return precio * 1.21;
    }
}

Producto p = new Producto("Teclado", 50.0);
System.out.println(p.nombre() + ": " + p.precioConIva());`
    }
  ]
},

/* ============================================================
 * MÓDULO 5 — COLECCIONES Y GENÉRICOS
 * ============================================================ */
{
  id: "colecciones",
  title: "5. Colecciones y genéricos",
  lessons: [
    {
      id: "arraylist",
      title: "List y ArrayList",
      theory: `
<p><code>ArrayList</code> es una lista <strong>dinámica</strong>: crece sola, mantiene el orden de inserción y permite duplicados.</p>
<ul>
<li><code>add</code>, <code>get</code>, <code>remove</code>, <code>size</code>, <code>contains</code>.</li>
<li>Declara con la interface: <code>List&lt;String&gt; lista = new ArrayList&lt;&gt;();</code></li>
<li>Acceso por índice O(1); insertar/borrar en medio O(n).</li>
</ul>`,
      code: `import java.util.ArrayList;
import java.util.List;

List<String> lenguajes = new ArrayList<>();
lenguajes.add("Java");
lenguajes.add("Kotlin");
lenguajes.add("Go");
lenguajes.remove("Go");

for (String lang : lenguajes) {
    System.out.println("Lenguaje: " + lang);
}
System.out.println("Total: " + lenguajes.size());`
    },
    {
      id: "hashmap",
      title: "Map y HashMap",
      theory: `
<p><code>HashMap</code> guarda pares <strong>clave → valor</strong> con acceso casi instantáneo O(1) por clave.</p>
<ul>
<li><code>put</code>, <code>get</code>, <code>containsKey</code>, <code>getOrDefault</code>.</li>
<li>Las claves no se repiten; un <code>put</code> con clave existente sobrescribe.</li>
<li>Se recorre con <code>entrySet()</code>.</li>
</ul>
<div class="tip">💡 El patrón "contar frecuencias con un HashMap" resuelve muchísimos problemas de entrevista.</div>`,
      code: `import java.util.HashMap;
import java.util.Map;

Map<String, Integer> stock = new HashMap<>();
stock.put("teclado", 12);
stock.put("mouse", 30);
stock.put("monitor", 7);

int teclados = stock.getOrDefault("teclado", 0);

for (Map.Entry<String, Integer> entry : stock.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}`
    },
    {
      id: "hashset",
      title: "Set y HashSet",
      theory: `
<p><code>HashSet</code> es un conjunto: <strong>no permite duplicados</strong> y no garantiza orden.</p>
<ul>
<li><code>add</code> devuelve <code>false</code> si el elemento ya existía.</li>
<li><code>contains</code> es O(1): perfecto para verificar pertenencia.</li>
<li>Variantes: <code>LinkedHashSet</code> (orden de inserción), <code>TreeSet</code> (ordenado).</li>
</ul>`,
      code: `import java.util.HashSet;
import java.util.Set;

Set<String> visitantes = new HashSet<>();
visitantes.add("ana");
visitantes.add("luis");
boolean repetido = !visitantes.add("ana");

if (visitantes.contains("luis")) {
    System.out.println("Luis ya visito el sitio");
}
System.out.println("Unicos: " + visitantes.size());
System.out.println("Ana repetida: " + repetido);`
    },
    {
      id: "genericos",
      title: "Genéricos",
      theory: `
<p>Los <strong>genéricos</strong> (<code>&lt;T&gt;</code>) permiten escribir clases y métodos que funcionan con cualquier tipo, manteniendo seguridad en compilación.</p>
<ul>
<li><code>T</code>, <code>E</code>, <code>K</code>, <code>V</code> son nombres convencionales de tipo.</li>
<li><code>&lt;T extends Comparable&lt;T&gt;&gt;</code> restringe el tipo (bounded type).</li>
<li>Evitan casts y errores de <code>ClassCastException</code>.</li>
</ul>`,
      code: `public class Caja<T> {

    private T contenido;

    public void guardar(T item) {
        this.contenido = item;
    }

    public T abrir() {
        return contenido;
    }
}

Caja<String> cajaTexto = new Caja<>();
cajaTexto.guardar("secreto");
String valor = cajaTexto.abrir();`
    },
    {
      id: "optional",
      title: "Optional: adiós a los null",
      theory: `
<p><code>Optional&lt;T&gt;</code> es un contenedor que puede tener un valor o estar vacío. Hace <strong>explícito</strong> que algo puede no existir, evitando <code>NullPointerException</code>.</p>
<ul>
<li><code>Optional.of</code>, <code>Optional.empty</code>, <code>Optional.ofNullable</code>.</li>
<li><code>orElse</code>: valor por defecto. <code>map</code>: transforma si existe.</li>
<li><code>isPresent</code> / <code>ifPresent</code>: verificar y actuar.</li>
</ul>
<div class="tip">💡 En Spring Data, los repositorios devuelven <code>Optional</code> en métodos como <code>findById</code>.</div>`,
      code: `import java.util.Optional;

public Optional<String> buscarUsuario(int id) {
    if (id == 1) {
        return Optional.of("moli");
    }
    return Optional.empty();
}

String nombre = buscarUsuario(2).orElse("invitado");
buscarUsuario(1).ifPresent(u -> System.out.println("Hola " + u));
System.out.println("Usuario: " + nombre);`
    }
  ]
},

/* ============================================================
 * MÓDULO 6 — PROGRAMACIÓN FUNCIONAL
 * ============================================================ */
{
  id: "funcional",
  title: "6. Lambdas y Streams",
  lessons: [
    {
      id: "lambdas",
      title: "Lambdas e interfaces funcionales",
      theory: `
<p>Una <strong>lambda</strong> es una función anónima: <code>(params) -&gt; expresion</code>. Solo puede usarse donde se espera una <strong>interface funcional</strong> (interface con un único método abstracto).</p>
<p>Las más usadas del paquete <code>java.util.function</code>:</p>
<ul>
<li><code>Predicate&lt;T&gt;</code>: recibe T, devuelve boolean.</li>
<li><code>Function&lt;T,R&gt;</code>: recibe T, devuelve R.</li>
<li><code>Consumer&lt;T&gt;</code>: recibe T, no devuelve nada.</li>
<li><code>Supplier&lt;T&gt;</code>: no recibe nada, devuelve T.</li>
</ul>`,
      code: `import java.util.function.Function;
import java.util.function.Predicate;
import java.util.function.Supplier;

Predicate<Integer> esPar = n -> n % 2 == 0;
Function<String, Integer> longitud = s -> s.length();
Supplier<Double> aleatorio = () -> Math.random();

System.out.println(esPar.test(10));
System.out.println(longitud.apply("lambda"));
System.out.println(aleatorio.get());`
    },
    {
      id: "streams-basico",
      title: "Streams: filter, map, collect",
      theory: `
<p>Un <strong>Stream</strong> procesa colecciones en estilo declarativo, encadenando operaciones:</p>
<ul>
<li><code>filter</code>: deja pasar los que cumplen la condición.</li>
<li><code>map</code>: transforma cada elemento.</li>
<li><code>collect(Collectors.toList())</code>: junta el resultado.</li>
</ul>
<div class="tip">💡 Las operaciones intermedias son <em>perezosas</em>: nada se ejecuta hasta la operación terminal (collect, forEach, count...).</div>`,
      code: `import java.util.List;
import java.util.stream.Collectors;

List<String> nombres = List.of("ana", "luis", "alberto", "eva");

List<String> conA = nombres.stream()
    .filter(n -> n.startsWith("a"))
    .map(String::toUpperCase)
    .collect(Collectors.toList());

System.out.println(conA);`
    },
    {
      id: "streams-avanzado",
      title: "Streams: reduce, sorted, groupingBy",
      theory: `
<p>Operaciones más potentes:</p>
<ul>
<li><code>reduce</code>: combina todos los elementos en uno (suma, máximo...).</li>
<li><code>sorted</code>: ordena, con o sin <code>Comparator</code>.</li>
<li><code>Collectors.groupingBy</code>: agrupa en un <code>Map</code> por una clave.</li>
<li><code>String::toUpperCase</code> es una <em>method reference</em>: atajo de lambda.</li>
</ul>`,
      code: `import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

List<Integer> numeros = List.of(5, 3, 8, 1, 9, 2);

int suma = numeros.stream()
    .reduce(0, Integer::sum);

List<Integer> ordenados = numeros.stream()
    .sorted()
    .collect(Collectors.toList());

Map<Boolean, List<Integer>> porParidad = numeros.stream()
    .collect(Collectors.groupingBy(n -> n % 2 == 0));

System.out.println(suma + " " + ordenados + " " + porParidad);`
    }
  ]
},

/* ============================================================
 * MÓDULO 7 — EXCEPCIONES Y CONCURRENCIA
 * ============================================================ */
{
  id: "excepciones-hilos",
  title: "7. Excepciones e hilos",
  lessons: [
    {
      id: "try-catch",
      title: "try / catch / finally",
      theory: `
<p>Las <strong>excepciones</strong> son errores en tiempo de ejecución. Se manejan con <code>try-catch</code>:</p>
<ul>
<li><code>try</code>: código que puede fallar.</li>
<li><code>catch</code>: qué hacer si falla (puede haber varios, del más específico al más general).</li>
<li><code>finally</code>: se ejecuta <strong>siempre</strong>, falle o no.</li>
</ul>
<div class="tip">💡 <em>Checked</em> (IOException) obligan a manejarse; <em>unchecked</em> (RuntimeException) no.</div>`,
      code: `public static int dividir(int a, int b) {
    try {
        return a / b;
    } catch (ArithmeticException e) {
        System.out.println("Error: " + e.getMessage());
        return 0;
    } finally {
        System.out.println("Operacion finalizada");
    }
}

int resultado = dividir(10, 0);
System.out.println("Resultado: " + resultado);`
    },
    {
      id: "excepciones-custom",
      title: "Excepciones personalizadas y throws",
      theory: `
<p>Crea tus propias excepciones extendiendo <code>RuntimeException</code> (unchecked) o <code>Exception</code> (checked).</p>
<ul>
<li><code>throw</code>: lanza la excepción.</li>
<li><code>throws</code>: declara en la firma que el método puede lanzarla.</li>
<li>Nombres descriptivos terminados en <code>Exception</code>.</li>
</ul>
<div class="tip">💡 En APIs REST con Spring, estas excepciones se traducen a códigos HTTP con <code>@ControllerAdvice</code>.</div>`,
      code: `public class SaldoInsuficienteException extends RuntimeException {

    public SaldoInsuficienteException(double saldo, double monto) {
        super("Saldo " + saldo + " insuficiente para retirar " + monto);
    }
}

public void retirar(double monto) {
    if (monto > saldo) {
        throw new SaldoInsuficienteException(saldo, monto);
    }
    saldo -= monto;
}`
    },
    {
      id: "threads",
      title: "Threads y Runnable",
      theory: `
<p>Un <code>Thread</code> ejecuta código en paralelo. La forma recomendada es implementar <code>Runnable</code> (o pasar una lambda) en lugar de extender <code>Thread</code>.</p>
<ul>
<li><code>start()</code> lanza el hilo; <code>run()</code> directamente NO crea un hilo.</li>
<li><code>join()</code> espera a que termine.</li>
<li><code>Thread.sleep(ms)</code> pausa el hilo actual.</li>
</ul>`,
      code: `public class TareaWorker implements Runnable {

    private final String nombre;

    public TareaWorker(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public void run() {
        System.out.println("Ejecutando: " + nombre);
    }
}

Thread hilo = new Thread(new TareaWorker("envio de emails"));
hilo.start();
hilo.join();`
    },
    {
      id: "executor",
      title: "ExecutorService: pool de hilos",
      theory: `
<p>Crear hilos a mano no escala. <code>ExecutorService</code> administra un <strong>pool</strong> de hilos reutilizables.</p>
<ul>
<li><code>newFixedThreadPool(n)</code>: pool de tamaño fijo.</li>
<li><code>submit</code>: encola una tarea; devuelve un <code>Future</code>.</li>
<li><code>shutdown()</code>: deja de aceptar tareas y termina las pendientes.</li>
</ul>
<div class="tip">💡 Desde Java 21 existen los <em>virtual threads</em>: <code>Executors.newVirtualThreadPerTaskExecutor()</code>.</div>`,
      code: `import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

ExecutorService pool = Executors.newFixedThreadPool(4);

Future<Integer> futuro = pool.submit(() -> {
    Thread.sleep(100);
    return 21 + 21;
});

System.out.println("Resultado: " + futuro.get());
pool.shutdown();`
    }
  ]
},

/* ============================================================
 * MÓDULO 8 — ALGORITMOS Y ESTRUCTURAS DE DATOS
 * ============================================================ */
{
  id: "dsa",
  title: "8. Algoritmos y DSA",
  lessons: [
    {
      id: "busqueda-binaria",
      title: "Búsqueda binaria — O(log n)",
      theory: `
<p>Sobre un array <strong>ordenado</strong>, descarta la mitad en cada paso comparando con el elemento del medio.</p>
<ul>
<li>Dos punteros: <code>izq</code> y <code>der</code>; el medio se recalcula cada vuelta.</li>
<li>Complejidad O(log n): buscar en 1 millón de elementos toma ~20 pasos.</li>
</ul>
<div class="tip">💡 <code>izq + (der - izq) / 2</code> evita el overflow que causaría <code>(izq + der) / 2</code> con índices enormes.</div>`,
      code: `public static int busquedaBinaria(int[] arr, int objetivo) {
    int izq = 0;
    int der = arr.length - 1;
    while (izq <= der) {
        int medio = izq + (der - izq) / 2;
        if (arr[medio] == objetivo) {
            return medio;
        }
        if (arr[medio] < objetivo) {
            izq = medio + 1;
        } else {
            der = medio - 1;
        }
    }
    return -1;
}`
    },
    {
      id: "bubble-sort",
      title: "Bubble Sort — O(n²)",
      theory: `
<p>El ordenamiento burbuja compara pares adyacentes y los intercambia si están en desorden. Los mayores "flotan" hacia el final.</p>
<ul>
<li>Es O(n²): solo educativo, no se usa en producción.</li>
<li>El flag <code>huboCambio</code> permite terminar antes si ya está ordenado.</li>
<li>El intercambio con variable temporal (<em>swap</em>) es un patrón que usarás en todos lados.</li>
</ul>`,
      code: `public static void bubbleSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        boolean huboCambio = false;
        for (int j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                huboCambio = true;
            }
        }
        if (!huboCambio) {
            break;
        }
    }
}`
    },
    {
      id: "merge-sort",
      title: "Merge Sort — O(n log n)",
      theory: `
<p><strong>Divide y vencerás</strong>: parte el array en mitades, ordena cada una recursivamente y las <em>fusiona</em>.</p>
<ul>
<li>Garantiza O(n log n) siempre, a costa de memoria extra.</li>
<li>Es <em>estable</em>: mantiene el orden relativo de elementos iguales.</li>
<li>La recursión termina cuando el subarray tiene 1 elemento.</li>
</ul>`,
      code: `public static void mergeSort(int[] arr, int izq, int der) {
    if (izq >= der) {
        return;
    }
    int medio = izq + (der - izq) / 2;
    mergeSort(arr, izq, medio);
    mergeSort(arr, medio + 1, der);
    merge(arr, izq, medio, der);
}`
    },
    {
      id: "quick-sort",
      title: "Quick Sort y partición",
      theory: `
<p>Elige un <strong>pivote</strong> y reorganiza: menores a la izquierda, mayores a la derecha. Repite en cada mitad.</p>
<ul>
<li>Promedio O(n log n); peor caso O(n²) si el pivote es malo.</li>
<li>Ordena <em>in-place</em>: no necesita memoria extra como merge sort.</li>
<li>Es el algoritmo detrás de <code>Arrays.sort()</code> para primitivos.</li>
</ul>`,
      code: `private static int particionar(int[] arr, int izq, int der) {
    int pivote = arr[der];
    int i = izq - 1;
    for (int j = izq; j < der; j++) {
        if (arr[j] < pivote) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[der];
    arr[der] = temp;
    return i + 1;
}`
    },
    {
      id: "stack-queue",
      title: "Pila (Stack) y Cola (Queue)",
      theory: `
<p>Dos estructuras fundamentales:</p>
<ul>
<li><strong>Stack</strong> (LIFO): el último en entrar es el primero en salir. <code>push</code> / <code>pop</code> / <code>peek</code>. Usos: deshacer, validar paréntesis, recursión.</li>
<li><strong>Queue</strong> (FIFO): el primero en entrar es el primero en salir. <code>offer</code> / <code>poll</code>. Usos: BFS, colas de tareas.</li>
</ul>
<div class="tip">💡 En Java moderno usa <code>ArrayDeque</code> para ambas: es más rápida que <code>Stack</code> y <code>LinkedList</code>.</div>`,
      code: `import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Queue;

Deque<Integer> pila = new ArrayDeque<>();
pila.push(1);
pila.push(2);
pila.push(3);
int cima = pila.pop();

Queue<String> cola = new ArrayDeque<>();
cola.offer("tarea1");
cola.offer("tarea2");
String primera = cola.poll();

System.out.println(cima + " - " + primera);`
    },
    {
      id: "linked-list",
      title: "Lista enlazada desde cero",
      theory: `
<p>Una <strong>lista enlazada</strong> es una cadena de nodos donde cada uno apunta al siguiente.</p>
<ul>
<li>Insertar al inicio es O(1); acceder por índice es O(n).</li>
<li>El nodo interno se declara <code>static class</code> dentro de la lista.</li>
<li>Pregunta clásica de entrevista: invertir una lista enlazada.</li>
</ul>`,
      code: `public class ListaEnlazada {

    static class Nodo {
        int valor;
        Nodo siguiente;

        Nodo(int valor) {
            this.valor = valor;
        }
    }

    private Nodo cabeza;

    public void agregarAlInicio(int valor) {
        Nodo nuevo = new Nodo(valor);
        nuevo.siguiente = cabeza;
        cabeza = nuevo;
    }
}`
    },
    {
      id: "arbol-binario",
      title: "Árbol binario y recorrido in-order",
      theory: `
<p>Un <strong>árbol binario de búsqueda</strong> (BST): cada nodo tiene hasta dos hijos; menores a la izquierda, mayores a la derecha.</p>
<ul>
<li>Buscar/insertar: O(log n) si está balanceado.</li>
<li>Recorrido <strong>in-order</strong> (izq → nodo → der) visita los valores <em>ordenados</em>.</li>
<li>Los recorridos recursivos son la base de muchos problemas de árboles.</li>
</ul>`,
      code: `public class ArbolBinario {

    static class Nodo {
        int valor;
        Nodo izquierdo;
        Nodo derecho;

        Nodo(int valor) {
            this.valor = valor;
        }
    }

    public void inOrder(Nodo nodo) {
        if (nodo == null) {
            return;
        }
        inOrder(nodo.izquierdo);
        System.out.println(nodo.valor);
        inOrder(nodo.derecho);
    }
}`
    },
    {
      id: "bfs",
      title: "BFS: recorrido por niveles",
      theory: `
<p><strong>BFS</strong> (Breadth-First Search) recorre un grafo o árbol <em>nivel por nivel</em> usando una <strong>cola</strong>.</p>
<ul>
<li>Marca los visitados para no repetir nodos.</li>
<li>Encuentra el <em>camino más corto</em> en grafos sin pesos.</li>
<li>Su gemelo DFS usa una pila (o recursión) y va a profundidad.</li>
</ul>`,
      code: `public static void bfs(Map<Integer, List<Integer>> grafo, int inicio) {
    Queue<Integer> cola = new ArrayDeque<>();
    Set<Integer> visitados = new HashSet<>();
    cola.offer(inicio);
    visitados.add(inicio);
    while (!cola.isEmpty()) {
        int actual = cola.poll();
        System.out.println("Visitando: " + actual);
        for (int vecino : grafo.getOrDefault(actual, List.of())) {
            if (visitados.add(vecino)) {
                cola.offer(vecino);
            }
        }
    }
}`
    },
    {
      id: "two-pointers",
      title: "Patrón Two Pointers",
      theory: `
<p>Dos índices que recorren el array desde extremos opuestos (o a distinta velocidad). Convierte soluciones O(n²) en O(n).</p>
<ul>
<li>Clásico: ¿hay dos números en un array <em>ordenado</em> que sumen un objetivo?</li>
<li>Si la suma es muy chica, avanza <code>izq</code>; si es muy grande, retrocede <code>der</code>.</li>
</ul>`,
      code: `public static boolean existeSuma(int[] arr, int objetivo) {
    int izq = 0;
    int der = arr.length - 1;
    while (izq < der) {
        int suma = arr[izq] + arr[der];
        if (suma == objetivo) {
            return true;
        }
        if (suma < objetivo) {
            izq++;
        } else {
            der--;
        }
    }
    return false;
}`
    },
    {
      id: "frecuencias",
      title: "Patrón HashMap de frecuencias",
      theory: `
<p>Contar ocurrencias con un <code>HashMap</code> resuelve anagramas, duplicados, el elemento más frecuente y muchos más en O(n).</p>
<ul>
<li><code>merge(clave, 1, Integer::sum)</code>: incrementa el contador en una línea.</li>
<li>Alternativa: <code>getOrDefault(clave, 0) + 1</code>.</li>
</ul>
<div class="tip">💡 Memoriza este patrón: aparece en una enorme cantidad de problemas de entrevista.</div>`,
      code: `public static char masFrecuente(String texto) {
    Map<Character, Integer> frecuencias = new HashMap<>();
    for (char c : texto.toCharArray()) {
        frecuencias.merge(c, 1, Integer::sum);
    }
    char ganador = ' ';
    int maximo = 0;
    for (Map.Entry<Character, Integer> e : frecuencias.entrySet()) {
        if (e.getValue() > maximo) {
            maximo = e.getValue();
            ganador = e.getKey();
        }
    }
    return ganador;
}`
    }
  ]
},

/* ============================================================
 * MÓDULO 9 — CLEAN CODE
 * ============================================================ */
{
  id: "clean-code",
  title: "9. Clean Code",
  lessons: [
    {
      id: "nombres",
      title: "Nombres significativos",
      theory: `
<p>El código se lee muchas más veces de las que se escribe. Un buen nombre elimina la necesidad de comentarios.</p>
<ul>
<li>Variables: sustantivos que revelan intención (<code>diasDesdeUltimoPago</code>, no <code>d</code>).</li>
<li>Métodos: verbos (<code>calcular</code>, <code>obtener</code>, <code>validar</code>).</li>
<li>Booleanos: con prefijo <code>es</code>/<code>tiene</code>/<code>puede</code>.</li>
<li>Evita abreviaturas crípticas y números mágicos.</li>
</ul>`,
      code: `public class CalculadoraDescuentos {

    private static final double DESCUENTO_CLIENTE_VIP = 0.20;
    private static final int COMPRA_MINIMA_VIP = 1000;

    public double calcularPrecioFinal(double precioBase, boolean esClienteVip) {
        if (esClienteVip && precioBase >= COMPRA_MINIMA_VIP) {
            return precioBase * (1 - DESCUENTO_CLIENTE_VIP);
        }
        return precioBase;
    }
}`
    },
    {
      id: "funciones-pequenas",
      title: "Funciones pequeñas que hacen una cosa",
      theory: `
<p>Regla de oro de Clean Code: una función debe hacer <strong>una sola cosa</strong>, hacerla bien, y ser corta.</p>
<ul>
<li>Si necesitas la palabra "y" para describirla, divídela.</li>
<li>Pocas líneas, pocos parámetros (idealmente ≤ 3), un solo nivel de abstracción.</li>
<li>Extraer métodos con buenos nombres documenta el flujo.</li>
</ul>`,
      code: `public void procesarPedido(Pedido pedido) {
    validarPedido(pedido);
    aplicarDescuentos(pedido);
    guardarPedido(pedido);
    notificarCliente(pedido);
}

private void validarPedido(Pedido pedido) {
    if (pedido.getItems().isEmpty()) {
        throw new PedidoVacioException(pedido.getId());
    }
}`
    },
    {
      id: "guard-clauses",
      title: "Early return y guard clauses",
      theory: `
<p>En lugar de anidar <code>if</code> dentro de <code>if</code>, valida lo inválido al principio y <strong>sal temprano</strong>.</p>
<ul>
<li>Las <em>guard clauses</em> dejan el "camino feliz" plano y legible al final.</li>
<li>Reduce la complejidad ciclomática y la indentación.</li>
</ul>
<div class="tip">💡 Si tu método tiene 3+ niveles de indentación, casi seguro necesita guard clauses o extracción de métodos.</div>`,
      code: `public double calcularBono(Empleado empleado) {
    if (empleado == null) {
        throw new IllegalArgumentException("Empleado requerido");
    }
    if (!empleado.estaActivo()) {
        return 0;
    }
    if (empleado.getAntiguedad() < 1) {
        return 0;
    }
    return empleado.getSalario() * 0.10 * empleado.getAntiguedad();
}`
    },
    {
      id: "composicion",
      title: "Composición sobre herencia",
      theory: `
<p>Heredar solo para reutilizar código crea jerarquías rígidas y frágiles. <strong>Composición</strong>: la clase <em>tiene</em> colaboradores y delega en ellos.</p>
<ul>
<li>Más flexible: puedes cambiar el colaborador en runtime.</li>
<li>Más testeable: inyectas mocks fácilmente.</li>
<li>Es la idea detrás de la inyección de dependencias de Spring.</li>
</ul>`,
      code: `public class ServicioPedidos {

    private final ValidadorPedidos validador;
    private final RepositorioPedidos repositorio;

    public ServicioPedidos(ValidadorPedidos validador,
                           RepositorioPedidos repositorio) {
        this.validador = validador;
        this.repositorio = repositorio;
    }

    public void crear(Pedido pedido) {
        validador.validar(pedido);
        repositorio.guardar(pedido);
    }
}`
    }
  ]
},

/* ============================================================
 * MÓDULO 10 — PRINCIPIOS SOLID
 * ============================================================ */
{
  id: "solid",
  title: "10. Principios SOLID",
  lessons: [
    {
      id: "srp",
      title: "S — Responsabilidad Única (SRP)",
      theory: `
<p>Una clase debe tener <strong>una sola razón para cambiar</strong>. Si <code>Factura</code> calcula totales, se guarda en BD y se imprime, tiene 3 razones para cambiar.</p>
<ul>
<li>Separa: lógica de negocio, persistencia y presentación.</li>
<li>Clases pequeñas y enfocadas son más fáciles de testear y mantener.</li>
</ul>`,
      code: `public class Factura {
    private final List<Item> items;

    public Factura(List<Item> items) {
        this.items = items;
    }

    public double calcularTotal() {
        return items.stream()
            .mapToDouble(Item::getPrecio)
            .sum();
    }
}

public class FacturaRepositorio {
    public void guardar(Factura factura) {
        System.out.println("Guardando factura en BD");
    }
}`
    },
    {
      id: "ocp",
      title: "O — Abierto/Cerrado (OCP)",
      theory: `
<p>Las clases deben estar <strong>abiertas a extensión, cerradas a modificación</strong>: agregar comportamiento nuevo sin tocar código existente.</p>
<ul>
<li>Señal de violación: un <code>switch</code> sobre tipos que crece con cada feature.</li>
<li>Solución: polimorfismo — cada caso es una implementación nueva de la interface.</li>
</ul>`,
      code: `public interface CalculadorEnvio {
    double calcular(double peso);
}

public class EnvioEstandar implements CalculadorEnvio {
    @Override
    public double calcular(double peso) {
        return peso * 1.5;
    }
}

public class EnvioExpress implements CalculadorEnvio {
    @Override
    public double calcular(double peso) {
        return peso * 3.0 + 10;
    }
}`
    },
    {
      id: "lsp",
      title: "L — Sustitución de Liskov (LSP)",
      theory: `
<p>Una subclase debe poder usarse <strong>donde se espera la clase padre</strong> sin romper el programa.</p>
<ul>
<li>Violación clásica: <code>Pinguino extends Ave</code> donde <code>volar()</code> lanza excepción.</li>
<li>Solución: rediseñar la jerarquía con interfaces más específicas.</li>
</ul>`,
      code: `public interface Ave {
    void comer();
}

public interface AveVoladora extends Ave {
    void volar();
}

public class Aguila implements AveVoladora {
    @Override
    public void comer() {
        System.out.println("El aguila come");
    }

    @Override
    public void volar() {
        System.out.println("El aguila vuela alto");
    }
}

public class Pinguino implements Ave {
    @Override
    public void comer() {
        System.out.println("El pinguino come peces");
    }
}`
    },
    {
      id: "isp",
      title: "I — Segregación de Interfaces (ISP)",
      theory: `
<p>Mejor <strong>varias interfaces pequeñas</strong> que una gigante: ninguna clase debería verse forzada a implementar métodos que no usa.</p>
<ul>
<li>Una interface "Dios" obliga a implementaciones vacías o que lanzan excepciones.</li>
<li>Interfaces enfocadas = contratos claros y clases que solo dependen de lo que necesitan.</li>
</ul>`,
      code: `public interface Imprimible {
    void imprimir(Documento doc);
}

public interface Escaneable {
    void escanear(Documento doc);
}

public class ImpresoraBasica implements Imprimible {
    @Override
    public void imprimir(Documento doc) {
        System.out.println("Imprimiendo: " + doc.getNombre());
    }
}

public class Multifuncion implements Imprimible, Escaneable {
    @Override
    public void imprimir(Documento doc) { }

    @Override
    public void escanear(Documento doc) { }
}`
    },
    {
      id: "dip",
      title: "D — Inversión de Dependencias (DIP)",
      theory: `
<p>Los módulos de alto nivel <strong>no deben depender de implementaciones concretas</strong>, sino de abstracciones (interfaces).</p>
<ul>
<li>En vez de <code>new MySqlRepositorio()</code> dentro del servicio, recibe la interface por constructor.</li>
<li>Esto es exactamente lo que automatiza Spring con la <strong>inyección de dependencias</strong>.</li>
</ul>`,
      code: `public interface RepositorioUsuarios {
    void guardar(Usuario usuario);
}

public class ServicioUsuarios {

    private final RepositorioUsuarios repositorio;

    public ServicioUsuarios(RepositorioUsuarios repositorio) {
        this.repositorio = repositorio;
    }

    public void registrar(Usuario usuario) {
        repositorio.guardar(usuario);
    }
}`
    }
  ]
},

/* ============================================================
 * MÓDULO 11 — PATRONES DE DISEÑO
 * ============================================================ */
{
  id: "patrones",
  title: "11. Patrones de diseño",
  lessons: [
    {
      id: "singleton",
      title: "Singleton",
      theory: `
<p>Garantiza <strong>una única instancia</strong> de una clase con un punto de acceso global.</p>
<ul>
<li>Constructor <code>private</code> + método estático <code>getInstance()</code>.</li>
<li><code>synchronized</code> o inicialización temprana para hilos seguros.</li>
</ul>
<div class="tip">⚠️ Úsalo con moderación: en Spring, los beans ya son singleton por defecto y gestionados por el contenedor.</div>`,
      code: `public class Configuracion {

    private static volatile Configuracion instancia;

    private Configuracion() {
    }

    public static Configuracion getInstance() {
        if (instancia == null) {
            synchronized (Configuracion.class) {
                if (instancia == null) {
                    instancia = new Configuracion();
                }
            }
        }
        return instancia;
    }
}`
    },
    {
      id: "factory",
      title: "Factory Method",
      theory: `
<p>Centraliza la <strong>creación de objetos</strong>: el cliente pide "dame una notificación de tipo X" sin conocer las clases concretas.</p>
<ul>
<li>Facilita agregar tipos nuevos sin tocar al cliente (apoya OCP).</li>
<li>Muy común junto a enums o switch expressions.</li>
</ul>`,
      code: `public class NotificadorFactory {

    public static Notificador crear(String tipo) {
        return switch (tipo) {
            case "email" -> new EmailNotificador();
            case "sms" -> new SmsNotificador();
            case "push" -> new PushNotificador();
            default -> throw new IllegalArgumentException(tipo);
        };
    }
}

Notificador notificador = NotificadorFactory.crear("email");
notificador.enviar("Bienvenido!");`
    },
    {
      id: "builder",
      title: "Builder",
      theory: `
<p>Construye objetos complejos <strong>paso a paso</strong>, evitando constructores con 8 parámetros donde no sabes qué es qué.</p>
<ul>
<li>Cada método devuelve <code>this</code> para encadenar (fluent API).</li>
<li><code>build()</code> crea el objeto final, idealmente inmutable.</li>
<li>Lombok lo genera con <code>@Builder</code>; tipear esta versión te enseña qué hay detrás.</li>
</ul>`,
      code: `public class Pizza {

    private final String masa;
    private final boolean extraQueso;

    private Pizza(Builder builder) {
        this.masa = builder.masa;
        this.extraQueso = builder.extraQueso;
    }

    public static class Builder {
        private String masa = "tradicional";
        private boolean extraQueso = false;

        public Builder masa(String masa) {
            this.masa = masa;
            return this;
        }

        public Builder extraQueso() {
            this.extraQueso = true;
            return this;
        }

        public Pizza build() {
            return new Pizza(this);
        }
    }
}

Pizza pizza = new Pizza.Builder().masa("fina").extraQueso().build();`
    },
    {
      id: "strategy",
      title: "Strategy",
      theory: `
<p>Define una <strong>familia de algoritmos intercambiables</strong>: el contexto delega en la estrategia inyectada, que puede cambiar en runtime.</p>
<ul>
<li>Elimina cadenas de if/else por tipo de comportamiento.</li>
<li>En Spring se implementa inyectando un <code>Map</code> de beans estrategia.</li>
</ul>`,
      code: `public interface EstrategiaPago {
    void pagar(double monto);
}

public class PagoTarjeta implements EstrategiaPago {
    @Override
    public void pagar(double monto) {
        System.out.println("Pagando " + monto + " con tarjeta");
    }
}

public class CarritoCompras {

    private EstrategiaPago estrategia;

    public void setEstrategia(EstrategiaPago estrategia) {
        this.estrategia = estrategia;
    }

    public void checkout(double total) {
        estrategia.pagar(total);
    }
}`
    },
    {
      id: "observer",
      title: "Observer",
      theory: `
<p>Relación <strong>uno a muchos</strong>: cuando el sujeto cambia, notifica automáticamente a todos sus observadores suscritos.</p>
<ul>
<li>Base conceptual de los eventos en UIs, listeners y sistemas de mensajería.</li>
<li>En microservicios, esta idea escala a eventos con Kafka o RabbitMQ.</li>
</ul>`,
      code: `public interface Observador {
    void actualizar(String evento);
}

public class CanalNoticias {

    private final List<Observador> suscriptores = new ArrayList<>();

    public void suscribir(Observador obs) {
        suscriptores.add(obs);
    }

    public void publicar(String noticia) {
        for (Observador obs : suscriptores) {
            obs.actualizar(noticia);
        }
    }
}`
    },
    {
      id: "decorator",
      title: "Decorator",
      theory: `
<p>Agrega responsabilidades a un objeto <strong>envolviéndolo</strong> en otro con la misma interface, sin modificar la clase original.</p>
<ul>
<li>Los decoradores se pueden apilar: café + leche + chocolate.</li>
<li>Lo usa la propia JDK: <code>new BufferedReader(new FileReader(...))</code>.</li>
</ul>`,
      code: `public interface Cafe {
    double precio();
}

public class CafeSimple implements Cafe {
    @Override
    public double precio() {
        return 2.0;
    }
}

public class ConLeche implements Cafe {

    private final Cafe base;

    public ConLeche(Cafe base) {
        this.base = base;
    }

    @Override
    public double precio() {
        return base.precio() + 0.5;
    }
}

Cafe pedido = new ConLeche(new CafeSimple());`
    }
  ]
},

/* ============================================================
 * MÓDULO 12 — SPRING BOOT
 * ============================================================ */
{
  id: "spring",
  title: "12. Spring Boot",
  lessons: [
    {
      id: "spring-app",
      title: "@SpringBootApplication: el punto de entrada",
      theory: `
<p>Spring Boot arranca con una clase anotada con <code>@SpringBootApplication</code>, que combina tres anotaciones:</p>
<ul>
<li><code>@Configuration</code>: la clase define beans.</li>
<li><code>@EnableAutoConfiguration</code>: configura automáticamente según las dependencias del classpath.</li>
<li><code>@ComponentScan</code>: escanea y registra tus componentes (<code>@Service</code>, <code>@Controller</code>...).</li>
</ul>
<div class="tip">💡 El "contenedor IoC" de Spring crea y conecta los objetos (beans) por ti: es DIP automatizado.</div>`,
      code: `package com.molicode.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiApplication.class, args);
    }
}`
    },
    {
      id: "rest-controller",
      title: "@RestController y @GetMapping",
      theory: `
<p><code>@RestController</code> expone endpoints HTTP que devuelven JSON.</p>
<ul>
<li><code>@RequestMapping("/api/productos")</code>: ruta base de la clase.</li>
<li><code>@GetMapping</code>: responde a GET.</li>
<li><code>@PathVariable</code>: captura partes de la URL (<code>/productos/5</code>).</li>
<li><code>@RequestParam</code>: captura query params (<code>?nombre=teclado</code>).</li>
</ul>`,
      code: `@RestController
@RequestMapping("/api/productos")
public class ProductoController {

    private final ProductoService service;

    public ProductoController(ProductoService service) {
        this.service = service;
    }

    @GetMapping
    public List<ProductoDto> listar() {
        return service.obtenerTodos();
    }

    @GetMapping("/{id}")
    public ProductoDto obtener(@PathVariable Long id) {
        return service.obtenerPorId(id);
    }
}`
    },
    {
      id: "service-inyeccion",
      title: "@Service e inyección por constructor",
      theory: `
<p><code>@Service</code> marca la capa de lógica de negocio. Spring detecta la clase y la registra como bean.</p>
<ul>
<li><strong>Inyección por constructor</strong> es la recomendada: dependencias <code>final</code>, obligatorias y fáciles de testear.</li>
<li>Con un solo constructor, <code>@Autowired</code> es opcional.</li>
<li>Arquitectura típica: Controller → Service → Repository.</li>
</ul>`,
      code: `@Service
public class ProductoService {

    private final ProductoRepository repository;

    public ProductoService(ProductoRepository repository) {
        this.repository = repository;
    }

    public ProductoDto obtenerPorId(Long id) {
        return repository.findById(id)
            .map(ProductoDto::desde)
            .orElseThrow(() -> new ProductoNoEncontradoException(id));
    }
}`
    },
    {
      id: "entity-jpa",
      title: "@Entity y Spring Data JPA",
      theory: `
<p>JPA mapea clases Java a tablas de base de datos:</p>
<ul>
<li><code>@Entity</code>: la clase es una tabla.</li>
<li><code>@Id</code> + <code>@GeneratedValue</code>: clave primaria autogenerada.</li>
<li><code>@Column</code>: personaliza la columna.</li>
</ul>
<p>Extender <code>JpaRepository</code> te regala CRUD completo sin escribir SQL, y los <em>query methods</em> como <code>findByNombre</code> generan la consulta a partir del nombre.</p>`,
      code: `@Entity
@Table(name = "productos")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String nombre;

    private double precio;
}

public interface ProductoRepository extends JpaRepository<Producto, Long> {
    List<Producto> findByNombreContaining(String nombre);
}`
    },
    {
      id: "post-dto-validacion",
      title: "@PostMapping, DTOs y validación",
      theory: `
<p>Nunca expongas tus entidades directamente: usa <strong>DTOs</strong> (aquí, un record) para la capa web.</p>
<ul>
<li><code>@RequestBody</code>: convierte el JSON del request al objeto.</li>
<li><code>@Valid</code>: dispara las validaciones del DTO.</li>
<li><code>@NotBlank</code>, <code>@Positive</code>, <code>@Email</code>: reglas declarativas de Bean Validation.</li>
<li><code>ResponseEntity</code>: controla el código de estado (201 Created).</li>
</ul>`,
      code: `public record CrearProductoRequest(
    @NotBlank String nombre,
    @Positive double precio
) {
}

@PostMapping
public ResponseEntity<ProductoDto> crear(
        @Valid @RequestBody CrearProductoRequest request) {
    ProductoDto creado = service.crear(request);
    return ResponseEntity
        .status(HttpStatus.CREATED)
        .body(creado);
}`
    },
    {
      id: "configuracion",
      title: "@Value y @ConfigurationProperties",
      theory: `
<p>La configuración vive en <code>application.yml</code>, no en el código:</p>
<ul>
<li><code>@Value("\${propiedad}")</code>: inyecta un valor suelto.</li>
<li><code>@ConfigurationProperties(prefix = "...")</code>: mapea un grupo completo de propiedades a una clase, con tipado fuerte.</li>
</ul>
<div class="tip">💡 En microservicios esta configuración se externaliza con Spring Cloud Config o variables de entorno.</div>`,
      code: `@Component
@ConfigurationProperties(prefix = "app.pagos")
public class PagosProperties {

    private String apiUrl;
    private int timeoutMs;

    public String getApiUrl() {
        return apiUrl;
    }

    public void setApiUrl(String apiUrl) {
        this.apiUrl = apiUrl;
    }

    public int getTimeoutMs() {
        return timeoutMs;
    }

    public void setTimeoutMs(int timeoutMs) {
        this.timeoutMs = timeoutMs;
    }
}`
    },
    {
      id: "controller-advice",
      title: "Manejo global de errores: @ControllerAdvice",
      theory: `
<p>En lugar de try-catch en cada controller, <code>@RestControllerAdvice</code> centraliza el manejo de excepciones de toda la API.</p>
<ul>
<li><code>@ExceptionHandler</code>: qué método maneja cada excepción.</li>
<li>Traduce excepciones de negocio a códigos HTTP correctos (404, 400...).</li>
<li>Devuelve un cuerpo de error consistente para todos los endpoints.</li>
</ul>`,
      code: `@RestControllerAdvice
public class ManejadorGlobalErrores {

    @ExceptionHandler(ProductoNoEncontradoException.class)
    public ResponseEntity<ErrorResponse> manejarNoEncontrado(
            ProductoNoEncontradoException ex) {
        ErrorResponse error = new ErrorResponse("NOT_FOUND", ex.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> manejarValidacion(
            MethodArgumentNotValidException ex) {
        ErrorResponse error = new ErrorResponse("BAD_REQUEST", "Datos invalidos");
        return ResponseEntity.badRequest().body(error);
    }
}`
    }
  ]
},

/* ============================================================
 * MÓDULO 13 — MICROSERVICIOS
 * ============================================================ */
{
  id: "microservicios",
  title: "13. Microservicios",
  lessons: [
    {
      id: "feign",
      title: "Comunicación entre servicios: Feign",
      theory: `
<p>En microservicios, un servicio llama a otro por HTTP. <strong>OpenFeign</strong> convierte esa llamada en una simple interface:</p>
<ul>
<li><code>@FeignClient(name = "...")</code>: nombre del servicio destino (resuelto por service discovery como Eureka).</li>
<li>Declaras métodos como si fuera un controller: Feign genera el cliente HTTP.</li>
<li>Se habilita con <code>@EnableFeignClients</code> en la clase principal.</li>
</ul>`,
      code: `@FeignClient(name = "servicio-inventario")
public interface InventarioClient {

    @GetMapping("/api/inventario/{productoId}")
    InventarioDto obtenerStock(@PathVariable Long productoId);
}

@Service
public class PedidoService {

    private final InventarioClient inventarioClient;

    public PedidoService(InventarioClient inventarioClient) {
        this.inventarioClient = inventarioClient;
    }

    public boolean hayStock(Long productoId) {
        return inventarioClient.obtenerStock(productoId).cantidad() > 0;
    }
}`
    },
    {
      id: "circuit-breaker",
      title: "Resiliencia: Circuit Breaker",
      theory: `
<p>Si el servicio de inventario se cae, no quieres que tumbe también al de pedidos. El <strong>circuit breaker</strong> (Resilience4j) corta las llamadas a un servicio que está fallando:</p>
<ul>
<li><code>@CircuitBreaker</code>: si supera el umbral de fallos, "abre el circuito" y deja de llamar.</li>
<li><code>fallbackMethod</code>: respuesta alternativa mientras tanto.</li>
<li><code>@Retry</code>: reintentos automáticos para fallos transitorios.</li>
</ul>`,
      code: `@Service
public class CatalogoService {

    private final InventarioClient client;

    public CatalogoService(InventarioClient client) {
        this.client = client;
    }

    @CircuitBreaker(name = "inventario", fallbackMethod = "stockPorDefecto")
    @Retry(name = "inventario")
    public InventarioDto consultarStock(Long productoId) {
        return client.obtenerStock(productoId);
    }

    private InventarioDto stockPorDefecto(Long productoId, Throwable ex) {
        return new InventarioDto(productoId, 0);
    }
}`
    },
    {
      id: "kafka",
      title: "Eventos asíncronos con Kafka",
      theory: `
<p>La comunicación <strong>asíncrona por eventos</strong> desacopla los servicios: "Pedidos" publica un evento y sigue su vida; "Notificaciones" lo consume cuando puede.</p>
<ul>
<li><code>KafkaTemplate</code>: publica mensajes en un <em>topic</em>.</li>
<li><code>@KafkaListener</code>: consume mensajes del topic.</li>
<li>Es el patrón Observer a escala de sistemas distribuidos.</li>
</ul>`,
      code: `@Service
public class PublicadorPedidos {

    private final KafkaTemplate<String, PedidoCreadoEvent> kafka;

    public PublicadorPedidos(KafkaTemplate<String, PedidoCreadoEvent> kafka) {
        this.kafka = kafka;
    }

    public void publicar(PedidoCreadoEvent evento) {
        kafka.send("pedidos.creados", evento);
    }
}

@Component
public class ConsumidorNotificaciones {

    @KafkaListener(topics = "pedidos.creados", groupId = "notificaciones")
    public void alCrearPedido(PedidoCreadoEvent evento) {
        System.out.println("Enviando email del pedido " + evento.pedidoId());
    }
}`
    },
    {
      id: "gateway",
      title: "API Gateway",
      theory: `
<p>El <strong>API Gateway</strong> es la puerta de entrada única: enruta cada request al microservicio correcto y centraliza autenticación, rate limiting y CORS.</p>
<ul>
<li>Spring Cloud Gateway define rutas con un DSL fluido en Java (o YAML).</li>
<li><code>lb://</code> indica balanceo de carga vía service discovery.</li>
<li><code>stripPrefix</code> y filtros transforman el request antes de reenviarlo.</li>
</ul>`,
      code: `@Configuration
public class GatewayConfig {

    @Bean
    public RouteLocator rutas(RouteLocatorBuilder builder) {
        return builder.routes()
            .route("pedidos", r -> r
                .path("/api/pedidos/**")
                .uri("lb://servicio-pedidos"))
            .route("inventario", r -> r
                .path("/api/inventario/**")
                .filters(f -> f.stripPrefix(1))
                .uri("lb://servicio-inventario"))
            .build();
    }
}`
    },
    {
      id: "docker",
      title: "Dockerfile para un microservicio",
      theory: `
<p>Cada microservicio se empaqueta como imagen Docker para desplegarse igual en cualquier entorno.</p>
<ul>
<li><em>Multi-stage build</em>: una etapa compila con Maven, otra solo lleva el JAR — imagen final pequeña.</li>
<li><code>EXPOSE</code> documenta el puerto; <code>ENTRYPOINT</code> arranca la app.</li>
<li>Con <code>docker-compose</code> levantas todos los servicios + BD + Kafka juntos.</li>
</ul>
<div class="tip">💡 Esto no es Java, pero tipearlo también genera memoria muscular para tu día a día DevOps.</div>`,
      code: `FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn package -DskipTests

FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]`
    }
  ]
}

];

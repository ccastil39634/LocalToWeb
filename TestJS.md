##Variables y operaciones

### Responde las siguientes preguntas en la sección de comentarios

- ¿Qué es una variable y para qué sirve?

Una variable es la representación de un espacio de memoria y sirve para almacenar elementos que van a ser usados posteriormente en el código

- ¿Cuál es la diferencia entre declarar e inicializar una variable?

Declarar una variable es crearla dentro del código, por ejemplo **var miVariable;**. Mientras que inicializarla es asignarle un valor de la forma **var miVariable = "Hola mundo";**

- ¿Cuál es la diferencia entre sumar números y concatenar strings?

- ¿Cuál operador me permite sumar o concatenar?

El operador **+**

### Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: string
- Apellido: string
- Nombre de usuario en Platzi: string
- Edad: number
- Correo electrónico: string
- Mayor de edad: boolean
- Dinero ahorrado: number
- Deudas: number

### Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```
let nombre = "Alexander";
let apellido = "Castillo";
let username = "a.casti11";
let edad = 30;
let correo = "a.casti11@hotmail.com";
let mayor = true;
let ahorros = 10000000;
let deudas = 4000000;
```

### Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)

```
let nombreCompleto = nombre + " " + apellido;
```

- Dinero real (dinero ahorrado menos deudas)

```
let dineroReal = ahorros - deudas;
```

## Funciones

### 1. Responde las siguiente preguntas

- ¿Qué es una función?

Es un bloque de código al cual se le pueden ingresar variables para que ejecute una serie de acciones

- ¿Cuándo me sirve unas una función en mi código?

Cuando tengo acciones que se repiten a lo largo del código y quiero reutilizar esas líneas

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

Los parámetros son las variables que se definen como entrada de una función cuando esta se construye, mientras que los argumentos son los valores que se indican al momento de ejecutar la función

### 2. Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";
console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

```
let miName = "Alexander";
let lastname = "Castillo";
let nickname = "a.casti11";

function imprimirMensaje (nombre, apellido, apodo){
    let nombreCompleto = nombre + " " + apellido;
    console.log("Mi nombre es " + nombreCompleto + ", pero prefiero que me digas " + apodo + ".");
}

imprimirMensaje(niMame, lastname, nickname);
```

## Condicionales

### Responde las siguiente preguntas:

- ¿Qué es una condicional?

Es una validación que te permite obtener un resultado dependiendo de si se cumple o no una condición establecida.

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

Existen condicionales If-Else y Switch-Case, las primeras validan si una condición se cumple para arrojar un resultado, de lo contrario arrojar otro. Para Switch-Case nos basamos en un parámetro y se valida frente a distintas opciones o "case" para establecer las acciones a ejecutar.
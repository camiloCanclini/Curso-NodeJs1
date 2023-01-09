# Curso de NodeJs ![Node.JS](https://img.shields.io/badge/Node.JS-339933?logo=node.js&logoColor=white)

## Por Camilo Canclini

___

Este "curso" refleja mi propio aprendizaje con respecto a NodeJs. Ire recopilando todo lo que vaya aprendiendo y lo iré guardando en este repositorio. Me parece que es una forma interesante de estudiar y de demostrar como estudio. Sin mencionar que, por un lado, me sirve tener esta informacion guardada y documentada en un servicio online como github. Y, por otro lado, tambien soy consciente de que esto puede contruibuirle a alguna persona en el futuro.
Por eso ten en cuenta que los siguientes "apuntes" provienen de alguien autodidacta que solo esta estudiando y que quiere compartir el conocimiento que obtenido.
___

## Documentación Utilizada

Obviamente necesitamos tener algun tipo de documentación o trabajo previo sobre el cual basarnos a la hora de estudiar. En mi caso voy a recomendar, un video de YT, un roadmap y un libro. **Toda la información es gratuita y pública**

[![PDF](https://img.shields.io/badge/PDF-%09%20%20%20%20Node.js%20Notes%20for%20Professionals-white)](https://openlibra.com/es/book/node-js-notes-for-professionals)

[![YT](https://img.shields.io/badge/YT-%09%20Nodejs%20Curso%20Desde%20Cero%2C%20para%20principiantes%20%7C%20FZST%20%20-red)](https://www.youtube.com/watch?v=BhvLIzVL8_o)

[![ROADMAP](https://roadmap.sh/nodejs/)

___

## Conceptos Previos

En mi caso ya tengo conocimientos, redes informaticas, modelo OSI, modelo cliente-servidor, hardware, funcionamiento interno de la pc, etc. Para empezar a trabajar con Node se recomienda tener un minimo de conocimiento en estos temas ya que, al ser una tecnología que trabaja en el backend, todo estos conocimientos son fundamentales para entender la manera en la cual opera y como trabaja Node. Tampóco me centraré en explicar conceptos propios de javascript, ya qué, se supone que se debe tener conocimientos minimos en js para empezar a ver Node.
___

## Introducción A NodeJS

> ### NodeJs es un entorno de ejecución para Javascript y un manejador de eventos asíncronos

Vamos a empezar a desglozar esto.

* **Entorno de ejecución**: Significa que haremos uso de un script o programa para poder ejecutar Javascript, esto quiere decir que no haremos uso del navegador para correr el codigo, este correra en nuestra maquina o servidor.
* **Manejador de eventos asíncronos:** Significa que esté será capaz de escuchar, eventos del sistema y peticiones de usuarios. Los eventos son instancias en las que el estado de algun componente que esta siendo "escuchado" cambia o "dispara" una alerta al servidor. Con asíncronos se refiere a que pueden ocurrir en cualquier momento de la ejeccución, no existe un tiempo que marque cuando puede dispararse un evento.

## ¿ Para que se usa Node ?

Node es utilizado para crear **aplicaciones web escalables**, esto quiere decir que estaremos creando un programa que pueda ser corrido desde nuestra propia pc o servidor y que ademas tendrá funcionalidades web. Con escalables se refiere a que la sintaxis y la forma en la que se construyen estas aplicaciones pueden cubrir necesidades basicas o mas complejas, ya que, el entorno se ajusta dependiendo de la complejidad de sus funciones. Ademas otra ventaja es que, gracias a la asincronía, el sistema no se bloquea, por lo que es mas facil trabajar con este tipo de aplicaciones.

## Requerimientos

Para empezar a trabajar con NodeJs primero necesitamos descargarlo desde la pagina oficial. [NodeJs.org](https://nodejs.org/en/)
La instalación realizará 2 cosas importantes que deberemos que tener en cuenta, la primera es que al instalar Node tambien estaremos instalando npm, y la segunda es que se integrará el comando "node" a nuestro PATH.

### ¿Qué es NPM?

NPM significa Node Package Manager o en español Gestor de Paquetes de Node. Este es un herramienta que permite la instalación de paquetes para nuestro entorno de ejecución. Los paquetes son, un conjunto de modulos o archivos javascript los cuales cumplen funcionalidades específicas, y pueden ser llamados desde nuestra aplicación de manera sencilla y práctica. Frameworks como React pueden ser integrados a traves de esta herramienta.

### ¿Qué es PATH?

El Path es el listado de las rutas a programas que pueden ser llamados desde nuestra terminal, o sea, en este caso, el programa o script "node" se utilizara desde la terminal.

___

## Hola Mundo en NodeJs

Recomiendo que para la proxima lección
Guardamos el siguiente codigo en un archivo holaMundoNode.js

```js

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

```

Desde la terminal nos dirigimos a la carpeta donde guardamos el script anterior (`cd Curso-Nodejs`) y ejecutamos el comando `node holaMundoNode.js`

Luego nos dirigimos a la ruta que nos indica la aplicación en mi caso, `http://127.0.0.1:3000/`.

Deberiamos ver algo como esto...
![img1](readme-imgs/img1.png)
![img2](readme-imgs/img2.png)

## Desglozando el Hola Mundo

En este caso se hace uso del modulo `http`, es se utiliza para montar el servidor en nuestra pc y es el que permite responder a los usuarios con información.
`
Con respecto a los modulos hay algo que tenemos que remarcar y es el tipo de modulo al que se esta haciendo referencia, en este caso, el modulo `http` es un modulo que ya viene instalado con Node por lo que no es necesario hacer ningun llamado "especial" o descargarlo de npm por ejemplo. Este tipo de modulos se los conoce como **Modulos Core**, ya que vienen preinstalados. (Un poco más adelante veremos sobre módulos)

Una vez importado en la linea uno, se guardan en variables constantes los datos para configurar el servidor (`const hostname = '127.0.0.1';` y `const port = 3000;`)

Ahora bien, a continuación podemos ver uno de los conceptos mas importantes que se mencionaron anteriormente. Vease el siguiente fragmento...

```js

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

```

Lo que esta ocurriendo aquí es que se esta guardando el resultado de un metodo del objeto `http` que importamos antes. Fijese como, por parametros estamos pasando una **función flecha**. Esto es fundamental, ya que, permite que el código siga ejecutandoce a pesar de que el proceso dentro del bloque de la función no haya terminado.

Esto es lo que hablamos antes, famosa **asincronía** de tareas o procesos,  evita que el programa se bloqueé y no pueda continuar. Si bien es un ejemplo sencillo, gracias a el podemos entender muchos otros conceptos y modulos.

Despues vemos como por parametros le pasamos a la función flecha 2 variables, que despues se transforman en objetos:

* `req` : es el objeto que permite manejar los mensajes entrantes (En este caso no se usa).

* `res` : es el objeto que permite manejar la respuesta que da el servidor al cliente que hace una petición. Este es el importante ya que setea el tipo de respuesta, el codigo de esta HTTP, y el mensaje (en este caso, hello world).

Para mas informacion, visita [NodeJs.Org | http.methods](https://nodejs.org/dist/latest-v18.x/docs/api/http.html#httpcreateserveroptions-requestlistener)

Por otro lado tenemos...

```js

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

```

Este metodo `server.listen()` es el que setea donde se esta ejecutando la aplicación web, en que dirección y que puerto. Y ademas nos permite realizar operaciones mietras que se incia. Ya qué, al igual que el anterior, esté acepta una función asíncrona, que en este caso arroja un mensaje por terminal que nos indica en que dirección se encuentra corriendo el servidor.

## Modularización

La modularización es un concepto de la programación que hace referencia al hecho de dividir el código en disntintos fragmentos y cada uno realice una tarea específica. Las ventajas de esta metodología son:

* Mejor organización
* Mejor mantenimiento
* Mejor rendimiento
* Reutilización de codigo

Hasta ahora vimos la utilización del modulo `http`, el cual es un fragmento de codigo que permite gestionar las peticiones por el protocolo http. Esto nos facilita esa tarea en concreto y hace que no tengamos que preocuparnos por crear nosotros esa funcionalidad.

Otra ventaja, es que si pensamos los modulos como piezas que encastran entre si, podemos decir que a la hora de construir un proyecto seremos capaces de elegir que piezas utilizar en nuestro proyecto y cuales no.

### Tipos de módulos en JS

#### CommonJS modules

Es la forma original en la cual el modulo se preparaba para ser importado, es el que viene por defecto integrado en el lenguaje de JS.

Vease el siguiente ejemplo:

Supongamos que el siguiente modulo es un archivo llamado `foo.js`

```js
module.exports.add = function(a, b) {
        return a + b;
} 

module.exports.subtract = function(a, b) {
        return a - b;
} 
```

Lo que esta ocurriendo aqui es que se esta haciendo uso de una palabra reservada llamada `module`.
La cual permite "empaquetar" funciones en variables para poder exportarlas y ser utilizadas desde otro modulo. Por ejemplo, el siguiente modulo, que denominaremos `main.js`

```js
const {add, subtract} = require('./foo')

console.log(add(5, 5)) // 10
console.log(subtract(10, 5)) // 5
```

Resaltemos algo importante, notece como en la declaración de `const {add, subtract} = require('./foo')` las constantes estan encerradas entre `{}`, esto es una funcionalidad que se agregó en ES6.

Esta permite asignarle a las constantes los valores del objeto en el orden en el que se declararon. Por ejemplo, si en `foo.js` primero declaré la función `add`, entonces cuando yo importe el modulo en mi `main.js` la primera constante que yo escriba se le va a asignar la función `add`, en este caso tambien se llama "add".

Ademas notece una última cosa, fijese que al momento de pasar por parametro en `require()` la ubicación del modulo que queremos importar, este comienza con un `./`

Esto significa que estamos buscando el modulo **desde la misma carpeta** que el "archivo llamador", en este caso seria desde la carpeta o directorio donde se encuentra `main.js`

#### EMACASript modules (ES Modules)

Por otro lado tenemos los ES Modules, que son modulos de javascript que se encuentran estandarizados. Esto quiere decir que estos tienen una estructura o sintaxis diferentes que los hace poseer mejores ventajas que los CommonJS Modules. Vease el anterior codigo pero esta vez como la metodologia de un ES Module...

```js
export function add(a, b) {
        return a + b;
}

export function subtract(a, b) {
        return a - b;
}
```

Fijese que ahora la sintaxis es mucho mas limpia y agradable a la vista.
Algo que tenemos que aclarar es que el codigo de arriba **NO** lo guardaremos como `foo.js` **SINO** como `foo.mjs`.

Esto permite que Node identifique que el modulo se trata del tipo estandarizado. Pero ahora bien, como seria el archivo `main.js`?, vease el siguiente codigo...

```js
import {add, subtract} from './foo.mjs'

console.log(add(5, 5)) // 10
console.log(subtract(10, 5)) // 5
```

Vease que la forma de importar tambien cambia.

### Diferencias (import and require)

* Los `import` solo pueden ser llamados desde el principio del archivo (`main.js`), mientras que los `require()` pueden ser llamados en cualquier momento, por ejemplo.

```js
if(user.length > 0){
   const userDetails = require(‘./userDetails.js’);
  // Do something ..
}
```

* Los `import` son **ASINCRONOS** y los `require()` son **SINCRONOS**, lo que quiere decir que, los `require()` esperan a que se terminen de cargar todas las funciones para poder continuar la ejecución. Esto puede perjudicar al rendimiento en grandes aplicaciones.

### El objeto `global` En NodeJS

El objeto `global`, es similar al objeto window, los 2 almacenan los objetos y metodos que comunmente usamos cuando trabajos con JS, por ejemplo:

* `console`

* `setInterval()`

* `setTimeout()`

La diferencia es que `window` se usa cuando js se esta ejecutando en el navegador y el otro se utliza en Node.

### Los tipos de variables `var` en Node

Algo importante a tener en cuenta cuando hablamos de módulos es que el comportamiento que toman las variables del tipo `var` cambia, ya que en node, su **scope** es el modulo desde donde se declaran. A diferencia del navegador que se comparte entre archivos porque se almacena en el objeto `window`.

## NPM ( Node Package Manager )

Ahora vamos a ver en mayor profundidad NPM. Como digimos anteriormente, este sirve para instalar paquetes que son consumidos por nuestra aplicación para realizar tareas especificas.

### Preparando proyecto

Para empezar a utilizar NPM se recomienda que empecemos con el siguiente comando.

```bash
npm init
```

Este comando lo que hará sera hacernos una serie de preguntas relacionadas con los metadatos del proyecto entero, posteriora esto creará un primer archivo para mantener esta configuración, llamado `package.json`.

### Como instalar paquetes

Una vez instalado nodejs y npm, tan solo bastaria con abrir la terminal y navegar hasta la carpeta del proyecto para escribir el siguiente comando

```bash
npm install <NombreDelPaquete>
```

Este comando instalara el paquete indicado, creando una carpeta en la raiz de nuestro proyecto llamada `node_modules`. Aquí se almacenaran todos los paquetes.

#### package.json y package-lock.json

![img3](./readme-imgs/img3.png)

Estos 2 se crean al momento de empezar a instalar paquetes o dependencias, como dijimos `package.json` es el archivo donde se guarda la configuración de la carpeta raiz, en mi caso Proyecto1. Mientras que el `package-lock.json` es el archivo donde se va a guardar el listado de módulos descargados, asi como un historial de versiones de los mismos.

### Como instalar dependencias

Si nosotros bajamos un proyecto y necesitamos instalar *todos* los paquetes necesarios para que este funcione, tan solo bsataria, ir a la terminal, dirigirnos al directorio raiz del mismo proyecto y escribir el siguiente comando:

```bash
npm install
```

Esto lo que hara sera descargar todos los paquetes listados en el directorio (Que se supone que existe)

### Como actualizar paquetes

Para un actualizar paquete usamos

```bash
npm update <NombreDelPaquete>
```

Para actualizar **TODOS** los paquetes

```bash
npm update 
```

### Como importar paquetes

```js
require(<NombreDelPaquete>)
```

Con el metodo `require()` podemos hacer uso de los paquetes instalados en el proyecto. **No es necesario especificar ninguna ruta, solo indicar el nombre.**

> Al integrar estos paquetes estos pasan a convertirse en **dependencias** que nuestra aplicación necesita para funcionar.

### NPM Tasks

Si miramos el archivo `package.json` deberiamos ver algo parecido a lo siguiente:

```json
{
  "name": "proyecto-1",
  "version": "1.0.0",
  "description": "Este es el primer proyecto del curso",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "curso"
  ],
  "author": "Camilo Canclini Stephano",
  "license": "ISC",
  "dependencies": {
    "colors": "^1.4.0"
  }
}
```

Si nos fijamos en la parte de `scripts` podremos ver que se esta almacenando un objeto (keys y values). Este objeto, en mi caso, se encuentra guardando la siguiente entrada: `"test": "echo \"Error: ..."`.

Gracias a la estructura que brinda este archivo para el apartado de `"scripts"` es que somos capaces de guardar diferentes scripts, y **personalizados**. Esto nos permite generar una serie de comandos predefinidos que pueden ser leidos y ejecutados a traves de npm con la finalidad de poder ejecutar ciertas acciones en nuestro paquete o proyecto que estemos creando, como por ejemplo: configurar e iniciar el servidor, crear archivos iniciales, ejecutar testeos, entre otras cosas.

#### Ejecutar Scripts con NPM

Con el siguiente comando seremos capaces de ejecutar los scripts que esten definidos en nuestro `package.json`.

```bash
npm run <NombreDelScript>
```

### NPX

npx es un comando que se integró con npm para poder realizar la ejecución de comandos basandoce en el **contexto de los paquetes**. Con contexto nos referimos a la **forma** en la que **tienen** que ser **accedidos** estos paquetes para funcionar.

Hay veces que los paquetes requieren estar instalados de manera **global** en el equipo, pueden requerir **privilegios de administrador** para ejecutar cierta función, o bien pueden necesitar ser ejecutados mediante la aplicación que estemos desarrollando directamente. NPX surge para solucionar todo esto.

NPX lo que hace es realizar todas las operaciones necesarias en un segundo plano para poder cumplir con el comando que queramos ejecutar. Un ejemplo muy sencillo podria ser el siguiente.

```bash
npx create-react-app prueba
```

`create-react-app` es un comando propio del framework de **React** que lo que hace es realizar las operaciones internas de la libreria para crear la estructura de una app con React. Obviamente para que funcione requiero tener instalado React en mi proyecto, pero si uso npx, esto no es necesario. Al ejecutarlo nos preguntará si queremos instalar React, y si seleccionamos que si, entonces npx lo instalará de forma temporal y lo posicionara basandose en el contexto de nuestro proyecto. Lo "instalará" manera local, en otras palabras.

Podemos concluir con que NPX es un comando que permite saltarse ciertos requerimientos como, por ejemplo, tener que declarar un comando en especifico en el `package.json` para ejecutar cierto modulo.

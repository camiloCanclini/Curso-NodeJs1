const path = require('path');

console.log(path.win32); 
console.log('--------');
console.log(path.posix);

//Devuelve un STRING con el separador que utiliza el SO para los PATHS
// WINDOWS --> \
// LINUX --> /
console.log(path.sep);

//Retorna un STRING de la última parte de un path
console.log(path.basename('/home/camilocanclini/Documents/hola.txt')); 
//Retorna un STRING pero recortando lo que indiquemos en el segundo argumento
console.log(path.basename('/home/camilocanclini/Documents/hola.txt', '.txt'));
//Devuelve un STRING del path sin la ultima parte
console.log(path.dirname('/home/camilocanclini/Documents/hola.txt'));


//Devuelve un STRING con el separador que usa el OS para separar los paths 
// WINDOWS --> ;
// LINUX --> :
console.log(path.delimiter);

//Devuelve un STRING  que indica la extensión del path 
console.log(path.extname('hola.txt'));

//Devuelve un STRING, este genera un PATH haciendo uso de los argumentos que pasemos
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')); 

//Devuelve un STRING, este genera un PATH NORMALIZADO para el SO en que nos enconetremos
//Que este normalizado quiere decir que es valido, que puede ser reconocido por nuestro SO
console.log(path.normalize('/foo/bar//baz///asdf/quux/..'));

//Devuelve un OBJETO con las propiedades del PATH que pasemos como argumento
console.log(path.parse('/home/user/dir/file.txt'));
const pathObj = path.parse('/home/user/dir/file.txt');

//Hace la operacion opuesta que path.parse
console.log(path.format(pathObj));

/*
Hace lo mismo que path.join pero ademas tienen en cuenta
si los argumentos pasados son PATHS ABSOLUTOS o RELATIVOS

PATH ABSOLUTO --> /hola/como/estas
PATH RELATIVO --> hola/como/estas ó ./hola/como/estas

Este metodo analiza de derecha a izquierda
Si es absoluto se toma  ese path y desde ahi, hacia la derecha se unen los demas paths
Si NO HAY PATHS ABSOLUTOS se agrega el PATH total y se unifica con los pasados por Argumentos
*/ 
console.log(path.resolve('hola/pepe','argentina/moni'));
console.log(path.resolve('/hola/pepe','argentina/moni'));
console.log(path.resolve('hola/pepe','/argentina/moni'));





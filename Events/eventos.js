//Importación y declaracion de Emitter
const {EventEmitter} = require('events');
const myEmitter = new EventEmitter();

// Definición de Funciones Listeners
const funcion1 = (arg1,arg2)=>{
    console.log('Hola!, como estas ',arg1 ,arg2);
};

const funcion2 = (arg1,arg2)=>{
    console.log('Chau!, ',arg1 ,arg2);
};

myEmitter.addListener('saludar',funcion1)
myEmitter.addListener('despedir',funcion2)


// Emisión de Eventos y Pasando Argumentos para las funcioens
myEmitter.emit('saludar','Camilo','Canclini');
myEmitter.emit('despedir','Camilo','Canclini');

console.log(myEmitter.eventNames());// Muestra los eventos escuchados en el emitter
console.log(myEmitter.listeners('saludar'));// Muestra las funciones Listeners asociadas a este evento

// Despues de un tiempo le saca la escucha de un evento y vuelve a ejecutar las emisiones
setTimeout(()=>{

    myEmitter.removeListener('despedir', funcion2);
    
    myEmitter.emit('saludar','Camilo','Canclini');
    myEmitter.emit('despedir','Camilo','Canclini');
    
},1000)

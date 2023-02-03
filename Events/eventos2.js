//Importación y declaracion de Emitter
const {EventEmitter} = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('saludar',(arg1,arg2)=>{
    console.log('Hola!, ',arg1 ,arg2);
});
myEmitter.on('despedir',(arg1,arg2)=>{
    console.log('Chau!, ',arg1 ,arg2);
})

// Emisión de Eventos y Pasando Argumentos para las funcioens
myEmitter.emit('saludar','Camilo','Canclini');
myEmitter.emit('despedir','Camilo','Canclini');

console.log(myEmitter.eventNames());// Muestra los eventos escuchados en el emitter
console.log(myEmitter.listeners('saludar'));// Muestra las funciones Listeners asociadas a este evento

// Despues de un tiempo le saca la escucha de un evento y vuelve a ejecutar las emisiones
setTimeout(()=>{

    //Remueve todas las funciones Listener Asociadas al evento saludar
    myEmitter.removeAllListeners('saludar');
    
    myEmitter.emit('saludar','Camilo','Canclini');
    myEmitter.emit('despedir','Camilo','Canclini');
    
},1000)

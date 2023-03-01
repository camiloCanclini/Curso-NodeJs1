const { suma } = require('./funciones');
const assert = require('assert');

describe('Función de Suma', function() {
    describe('Cuando se le pasan dos números', function() {
      it('debería devolver la suma de los dos números', ()=>{
        assert.equal(suma(2, 3), 5);
      });
    });
  
    describe('cuando se le pasan argumentos no numéricos', function() {
      it('Debería devolver NaN', function() {
        assert.throws(function() {
          suma(2, '3');
        });
      });
    });
  }); 
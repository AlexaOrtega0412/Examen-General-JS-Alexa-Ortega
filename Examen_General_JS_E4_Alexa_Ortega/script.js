Array.prototype.myOwnReduce = function(callback, initialValue) {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function');
    }
  
    const array = Object(this);
    const len = array.length >>> 0;
    let accumulator, i = 0;
  
    if (arguments.length > 1) {
      accumulator = initialValue;
    } else {
      if (len === 0) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      accumulator = array[i++]; // Asigna el primer elemento al acumulador
    }
  
    for (; i < len; i++) { // La iteración debe comenzar desde el siguiente elemento
      if (i in array) {
        accumulator = callback.call(undefined, accumulator, array[i], i, array);
      }
    }
  
    return accumulator;
  };
  
  document.getElementById('calcular').addEventListener('click', function() {
    const numerosInput = document.getElementById('numeros').value;
    const numeros = numerosInput.split(',').map(Number); // Convierte los números a tipo Number
  
    const callback = (acumulador, actual) => {
        acumulador += actual;
        return acumulador;
    };
  
    const resultado = numeros.myOwnReduce(callback);
    console.log(resultado);
  
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
  });
  
  document.getElementById('eliminar').addEventListener('click', function() {
    document.getElementById('numeros').value = ''; // Borra el campo de texto
    document.getElementById('resultado').textContent = ''; // Borra el resultado
  });
  







  Array.prototype.myOwnReduce = function(callback, initialValue) {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function');
    }
  
    const array = Object(this);
    const len = array.length >>> 0;
    let accumulator, i = 0;
  
    if (arguments.length > 1) {
      accumulator = initialValue;
    } else {
      if (len === 0) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      accumulator = array[i++];
    }
  
    for (; i < len; i++) {
      if (i in array) {
        accumulator = callback.call(undefined, accumulator, array[i], i, array);
      }
    }
  
    return accumulator;
  };
  
  document.getElementById('calcular').addEventListener('click', function() {
    const numerosInput = document.getElementById('numeros').value;
    const separador = document.getElementById('separador').value || ',';
  
    const regex = new RegExp(`^\\s*(\\d+(\\s*${separador}\\s*\\d+)*)\\s*$`);
  
    if (!regex.test(numerosInput)) {
        alert(`Error: Ingrese números separados por "${separador}"`);
        return;
    }
  
    const numeros = numerosInput.split(separador).map(Number);
  
    const callback = (acumulador, actual) => {
        acumulador += actual;
        return acumulador;
    };
  
    const resultado = numeros.myOwnReduce(callback);
    console.log(resultado);
  
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
  });
  
  document.getElementById('eliminar').addEventListener('click', function() {
    document.getElementById('numeros').value = '';
    document.getElementById('resultado').textContent = '';
  });
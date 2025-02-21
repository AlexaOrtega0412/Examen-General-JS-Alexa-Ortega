function comprimir() {
    const inputString = document.getElementById('inputString').value;
    const resultado = document.getElementById('resultado');

    if (!inputString) {
        resultado.textContent = "Ingresa una cadena para comprimir.";
        return;
    }

    const stringComprimido = myMethod(inputString);
    resultado.textContent = `Cadena comprimida: ${stringComprimido}`;
}

function myMethod(str) {
    let resultado = "";
    let contador = 1;

    for (let i = 0; i < str.length; i++) {
        if (i + 1 < str.length && str[i] === str[i + 1]) {
            contador++;
        } else {
            resultado += str[i];
            if (contador >= 1) { // Se modificó la condición a >= 1
                resultado += contador;
            }
            contador = 1;
        }
    }

    return resultado;
}
function distancia(string1, string2) {
    let diferencias = 0;
    const longitudMaxima = Math.max(string1.length, string2.length);

    for (let i = 0; i < longitudMaxima; i++) {
        const char1 = string1[i] || ''; // Manejar cadenas de diferente longitud
        const char2 = string2[i] || '';

        if (char1 !== char2) {
            diferencias++;
        }
    }

    return diferencias;
}

function compararStrings() {
    const string1 = document.getElementById("string1").value;
    const string2 = document.getElementById("string2").value;

    if (string1 === "" || string2 === "") {
        document.getElementById("resultado").textContent = "Por favor, ingresa ambos strings.";
    } else {
        const resultado = distancia(string1, string2);
        document.getElementById("resultado").textContent = `Número de caracteres diferentes: ${resultado}`;
    }
}

function limpiarCampos() {
    document.getElementById("string1").value = "";
    document.getElementById("string2").value = "";
    document.getElementById("resultado").textContent = ""; // Limpiar también el resultado
}
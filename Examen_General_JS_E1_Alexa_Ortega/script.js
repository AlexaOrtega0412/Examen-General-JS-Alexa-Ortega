let listaTareas = [];

function agregarTarea() {
    const nuevaTarea = document.getElementById("nuevaTarea");
    const tarea = nuevaTarea.value.trim();

    if (tarea !== "") {
        listaTareas.push({ texto: tarea, completada: false });
        actualizarListaTareas();
        nuevaTarea.value = "";
    }
}

function actualizarListaTareas() {
    const listaTareasElemento = document.getElementById("listaTareas");
    listaTareasElemento.innerHTML = "";

    for (let i = 0; i < listaTareas.length; i++) {
        const tarea = listaTareas[i];
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" ${tarea.completada ? "checked" : ""}>
            <span>${tarea.texto}</span>
            <button onclick="eliminarTarea(${i})">Eliminar</button>
        `;

        const checkbox = li.querySelector("input[type='checkbox']");
        checkbox.addEventListener("change", () => {
            tarea.completada = checkbox.checked;
            actualizarContador();
        });

        listaTareasElemento.appendChild(li);
    }

    actualizarContador();
}

function eliminarTarea(index) {
    listaTareas.splice(index, 1);
    actualizarListaTareas();
}

function actualizarContador() {
    const tareasCompletadasElemento = document.getElementById("tareasCompletadas");
    const tareasIncompletasElemento = document.getElementById("tareasIncompletas");

    let tareasCompletadas = 0;
    let tareasIncompletas = 0;

    for (let i = 0; i < listaTareas.length; i++) {
        if (listaTareas[i].completada) {
            tareasCompletadas++;
        } else {
            tareasIncompletas++;
        }
    }

    tareasCompletadasElemento.textContent = tareasCompletadas;
    tareasIncompletasElemento.textContent = tareasIncompletas;
}
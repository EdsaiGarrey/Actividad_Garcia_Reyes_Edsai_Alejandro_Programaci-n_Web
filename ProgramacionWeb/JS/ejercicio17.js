// Closure que encapsula el manejo de tareas
const manejarTareas = (() => {
    // Variable local dentro del closure
    const claveStorage = "tareasPendientes";

    // Obtiene tareas desde Local Storage
    const obtenerTareas = () => {
        const tareasJSON = localStorage.getItem(claveStorage);

        if (tareasJSON === null) {
            return [];
        }

        return JSON.parse(tareasJSON);
    };

    // Guarda tareas en Local Storage como JSON
    const guardarTareas = (tareas) => {
        localStorage.setItem(claveStorage, JSON.stringify(tareas));
    };

    // Agrega una nueva tarea
    const agregar = (textoTarea) => {
        const tareas = obtenerTareas();

        const nuevaTarea = {
            id: Date.now(),
            tarea: textoTarea,
            completada: false
        };

        tareas.push(nuevaTarea);
        guardarTareas(tareas);
    };

    // Elimina una tarea por id
    const eliminar = (id) => {
        const tareas = obtenerTareas();

        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);

        guardarTareas(tareasActualizadas);
    };

    // Retorna funciones públicas del closure
    return {
        obtenerTareas,
        agregar,
        eliminar
    };
})();

// Función para agregar tarea desde el formulario
const agregarTarea = () => {
    const input = document.getElementById("tareaInput");
    const textoTarea = input.value.trim();

    // Valida campo vacío
    if (textoTarea === "") {
        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Debes escribir una tarea.",
            confirmButtonText: "Entendido"
        });
        return;
    }

    // Usa el closure para guardar la tarea
    manejarTareas.agregar(textoTarea);

    input.value = "";
    renderizarTareas();

    Swal.fire({
        icon: "success",
        title: "Tarea agregada",
        text: "La tarea se guardó correctamente.",
        confirmButtonText: "Aceptar"
    });
};

// Función para obtener tareas
const obtenerTareas = () => {
    return manejarTareas.obtenerTareas();
};

// Función para eliminar tarea
const eliminarTarea = (id) => {
    Swal.fire({
        icon: "warning",
        title: "¿Eliminar tarea?",
        text: "Esta acción eliminará la tarea seleccionada.",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            manejarTareas.eliminar(id);
            renderizarTareas();

            Swal.fire({
                icon: "success",
                title: "Eliminada",
                text: "La tarea fue eliminada correctamente.",
                confirmButtonText: "Aceptar"
            });
        }
    });
};

// Función para mostrar tareas en pantalla
const renderizarTareas = () => {
    const lista = document.getElementById("listaTareas");
    const tareas = obtenerTareas();

    // Limpia la lista antes de volver a pintar
    lista.innerHTML = "";

    // Si no hay tareas, muestra mensaje
    if (tareas.length === 0) {
        const mensaje = document.createElement("p");
        mensaje.classList.add("vacio");
        mensaje.textContent = "No hay tareas pendientes.";
        lista.appendChild(mensaje);
        return;
    }

    // Recorre las tareas guardadas
    tareas.forEach((tarea) => {
        const item = document.createElement("li");
        item.classList.add("tarea");

        const texto = document.createElement("span");
        texto.textContent = tarea.tarea;

        const botonEliminar = document.createElement("button");
        botonEliminar.classList.add("btn-eliminar");
        botonEliminar.textContent = "Eliminar";

        // Llama a eliminar tarea con su id
        botonEliminar.onclick = () => eliminarTarea(tarea.id);

        item.appendChild(texto);
        item.appendChild(botonEliminar);

        lista.appendChild(item);
    });
};

// Carga las tareas cuando abre la página
document.addEventListener("DOMContentLoaded", () => {
    renderizarTareas();

    const input = document.getElementById("tareaInput");

    // Permite agregar tarea con la tecla Enter
    input.addEventListener("keydown", (evento) => {
        if (evento.key === "Enter") {
            agregarTarea();
        }
    });
});
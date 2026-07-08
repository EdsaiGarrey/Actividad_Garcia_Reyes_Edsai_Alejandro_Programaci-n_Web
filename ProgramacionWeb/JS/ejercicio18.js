// Selecciona elementos del DOM
const input = document.getElementById("nuevoElemento");
const botonAgregar = document.getElementById("agregarBtn");
const lista = document.getElementById("lista");
const mensaje = document.getElementById("mensaje");

// Muestra un mensaje de error con Bootstrap
function mostrarMensaje(texto) {
    mensaje.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            ${texto}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
}

// Limpia el mensaje de error
function limpiarMensaje() {
    mensaje.innerHTML = "";
}

// Agrega un nuevo elemento a la lista
function agregarElemento() {
    const texto = input.value.trim();

    // Valida que no esté vacío
    if (texto === "") {
        mostrarMensaje("Escribe algo para agregar a la lista.");
        return;
    }

    limpiarMensaje();

    // Crea el elemento li
    const li = document.createElement("li");
    li.classList.add("list-group-item", "elemento");

    // Crea el texto del elemento
    const span = document.createElement("span");
    span.classList.add("texto-elemento");
    span.textContent = texto;

    // Crea el botón eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("btn", "btn-danger", "btn-sm", "btn-eliminar");

    // Elimina el elemento del DOM
    botonEliminar.addEventListener("click", function () {
        li.remove();
    });

    // Agrega texto y botón al li
    li.appendChild(span);
    li.appendChild(botonEliminar);

    // Agrega el li a la lista
    lista.appendChild(li);

    // Limpia el input
    input.value = "";
    input.focus();

    console.log("Elemento agregado:", texto);
}

// Evento para el botón agregar
botonAgregar.addEventListener("click", agregarElemento);

// Permite agregar con la tecla Enter
input.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
        agregarElemento();
    }
});
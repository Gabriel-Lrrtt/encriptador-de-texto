
    // Función para encriptar el texto
    function encriptarTexto(texto) {
        return texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    // Función para desencriptar el texto
    function desencriptarTexto(texto) {
        return texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    // Función para validar el texto (sin mayúsculas ni acentos)
    function validarTexto(texto) {
        const regex = /^[a-z\s]*$/;  // Expresión regular para solo minúsculas y espacios
        return regex.test(texto);
    }

    // Obtener elementos del DOM
    const textarea = document.querySelector("textarea");
    const botonEncriptar = document.querySelector(".encriptar");
    const botonDesencriptar = document.querySelector(".desencriptar");
    const seccionSinMensaje = document.querySelector(".sin-mensaje");
    const noMensaje = document.querySelector(".no-mensaje");
    const parrafo = document.querySelector(".parrafo");
    const muneco = document.querySelector(".muneco");
    const botonCopiar = document.createElement("button");

    // Crear botón de copiar
    botonCopiar.textContent = "Copiar";
    botonCopiar.style.display = "none"; // Se ocultará por defecto
    botonCopiar.style.marginTop = "20px";
    botonCopiar.style.padding = "10px 20px";
    botonCopiar.style.backgroundColor = "#2b6cb0";
    botonCopiar.style.color = "#ffffff";
    botonCopiar.style.border = "none";
    botonCopiar.style.borderRadius = "24px";
    botonCopiar.style.cursor = "pointer";
    seccionSinMensaje.appendChild(botonCopiar);

    // Función para mostrar el mensaje y el botón de copiar
    function mostrarMensaje(mensaje) {
        noMensaje.textContent = mensaje;
        parrafo.textContent = "";
        muneco.style.display = "none"; // Ocultar la imagen
        botonCopiar.style.display = "block"; // Mostrar el botón de copiar
    }

    // Función para mostrar el error
    function mostrarError(mensaje) {
        noMensaje.textContent = "Error:";
        parrafo.textContent = mensaje;
        muneco.style.display = "none"; // Ocultar la imagen
        botonCopiar.style.display = "none"; // Ocultar el botón de copiar
    }

    // Evento para copiar el texto encriptado/desencriptado
    botonCopiar.addEventListener("click", function() {
        const textoACopiar = noMensaje.textContent;
        navigator.clipboard.writeText(textoACopiar)
            .then(() => {
                alert("Texto copiado al portapapeles");
            })
            .catch(err => {
                alert("Error al copiar el texto");
            });
    });

    // Evento para el botón de encriptar
    botonEncriptar.addEventListener("click", function() {
        const textoOriginal = textarea.value;

        if (validarTexto(textoOriginal)) {
            if (textoOriginal) {
                const textoEncriptado = encriptarTexto(textoOriginal);
                mostrarMensaje(textoEncriptado);
            } else {
                noMensaje.textContent = "Ningún mensaje fue encontrado";
                parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
                muneco.style.display = "block"; // Mostrar la imagen si no hay texto
                botonCopiar.style.display = "none"; // Ocultar el botón de copiar si no hay texto
            }
        } else {
            mostrarError("Solo letras minúsculas y sin acentos");
        }
    });

    // Evento para el botón de desencriptar
    botonDesencriptar.addEventListener("click", function() {
        const textoOriginal = textarea.value;

        if (validarTexto(textoOriginal)) {
            if (textoOriginal) {
                const textoDesencriptado = desencriptarTexto(textoOriginal);
                mostrarMensaje(textoDesencriptado);
            } else {
                noMensaje.textContent = "Ningún mensaje fue encontrado";
                parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
                muneco.style.display = "block"; // Mostrar la imagen si no hay texto
                botonCopiar.style.display = "none"; // Ocultar el botón de copiar si no hay texto
            }
        } else {
            mostrarError("Solo letras minúsculas y sin acentos");
        }
    });


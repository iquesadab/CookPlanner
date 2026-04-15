let btnGuardar = document.getElementById("Guardar");

// Función Principal
function guardarFavorito(){
    Swal.fire({
        title: "Guardado",
        text: "La receta se agregó a favoritos",
        icon: "success",
        confirmButtonText: "OK"
    });
}

btnGuardar.addEventListener("click", guardarFavorito);
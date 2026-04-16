let btnNuevaCategoria = document.getElementById("NuevaCategoria");

let botonesEditar = document.getElementsByClassName("Editar");
let botonesEliminar = document.getElementsByClassName("Eliminar");

//Función Principal
function nuevaCategoriaRetorno(){
    Swal.fire({
        title: "Nueva categoría",
        text: "La categoría se agregó correctamente",
        icon: "success",
        confirmButtonText: "OK"
    });
}

// Función para editar categoría
function editarCategoriaRetorno(){

    Swal.fire({
        title: "Categoría editada",
        text: "La categoría se editó correctamente",
        icon: "success",
        confirmButtonText: "OK"
    });
}

// Función para eliminar categoría
function eliminarCategoriaRetorno(){

    Swal.fire({
        title: "¿Está seguro?",
        text: "Esta categoría será eliminada",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Categoría eliminada",
                text: "La categoría se eliminó correctamente",
                icon: "success",
                confirmButtonText: "OK"
            });
        }
    });
}

btnNuevaCategoria.addEventListener("click", nuevaCategoriaRetorno);

// Eventos editar
for(let i = 0; i < botonesEditar.length; i++){
    botonesEditar[i].addEventListener("click", editarCategoriaRetorno);
}

// Eventos eliminar
for(let i = 0; i < botonesEliminar.length; i++){
    botonesEliminar[i].addEventListener("click", eliminarCategoriaRetorno);
}
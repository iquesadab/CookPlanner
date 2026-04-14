let btnBuscar = document.getElementById("Buscar");

let txtBuscarReceta = document.getElementById("txtBuscarReceta");

// Función Principal
function buscarRetorno(){

    // Validar campos vacíos
    if(validarCamposVacios() === false){

        Swal.fire({
            title: "Búsqueda realizada",
            text: "Mostrando resultados de recetas",
            icon: "success",
            confirmButtonText: "OK"
        })

        txtBuscarReceta.value = "";
    }
    else{
        Swal.fire({
            title: "No se puede buscar",
            text: "Por favor ingrese el nombre de la receta",
            icon: "warning",
            confirmButtonText: "Aceptar"
        });
    }
}

// Validar campos
function validarCamposVacios(){

    let error = false;

    // Buscar
    if(txtBuscarReceta.value.trim() === ""){
        txtBuscarReceta.classList.add("input-error");
        error = true;
    } else {
        txtBuscarReceta.classList.remove("input-error");
    }
    return error;
}

btnBuscar.addEventListener("click", buscarRetorno);
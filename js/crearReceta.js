let btnGuardarReceta = document.getElementById("btnGuardarReceta");

let txtNombre = document.getElementById("txtNombre");
let txtIngredientes = document.getElementById("txtIngredientes");
let txtInstrucciones = document.getElementById("txtInstrucciones");
let selectCategoria = document.getElementById("selectCategoria");
let presupuesto = document.getElementById("presupuesto");

// Función Principal
function guardarRecetaRetorno(){

    // Validar campos vacíos
    if(validarCamposVacios() === false){

        Swal.fire({
            title: "Receta Guardada",
            text: "Receta guardada exitosamente",
            icon: "success",
            confirmButtonText: "OK"
        })

        txtNombre.value = "";
        txtIngredientes.value = "";
        txtInstrucciones.value = "";
        selectCategoria.value = "";
        presupuesto.value = "";

    }
    else{
        Swal.fire({
            title: "No se puede guardar la receta",
            text: "Por favor revise los campos marcados",
            icon: "warning",
            confirmButtonText: "Aceptar"
        });
    }
}

// Validar campos
function validarCamposVacios(){

    let error = false;

    // Nombre de la receta
    if(txtNombre.value.trim() === ""){
        txtNombre.classList.add("input-error");
        error = true;
    } else {
        txtNombre.classList.remove("input-error");
    }

    // Ingredientes
    if(txtIngredientes.value.trim() === ""){
        txtIngredientes.classList.add("input-error");
        error = true;
    } else {
        txtIngredientes.classList.remove("input-error");
    }

    // Instrucciones
    if(txtInstrucciones.value.trim() === ""){
        txtInstrucciones.classList.add("input-error");
        error = true;
    } else {
        txtInstrucciones.classList.remove("input-error");
    }

    // Categoría (select)
    if(selectCategoria.value === ""){
        selectCategoria.classList.add("input-error");
        error = true;
    } else {
        selectCategoria.classList.remove("input-error");
    }

    // Presupuesto
    if(presupuesto.value.trim() === "" || isNaN(presupuesto.value)){ // Valido que lo que se ingresa sea un numero
        presupuesto.classList.add("input-error");
        error = true;
    } else {
        presupuesto.classList.remove("input-error");
    }

    return error;
}

btnGuardarReceta.addEventListener("click", guardarRecetaRetorno);
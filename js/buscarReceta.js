let btnBuscar = document.getElementById("Buscar");
let btnCategorias = document.getElementById("Categorias");
let btnDificultad = document.getElementById("Dificultad");
let botonesverReceta = document.getElementsByClassName("verReceta");

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

// Función para el boton de categorías
function categoriasRetorno(){
    Swal.fire({
        title: "Información por Categorías",
        text: "Mostrando resultados de recetas por categorías",
        icon: "success",
        confirmButtonText: "OK"
    })
}

// Función para el boton de dificultad
function dificultadRetorno(){
    Swal.fire({
        title: "Información por Dificultad",
        text: "Mostrando resultados de recetas según su nivel de dificultad",
        icon: "success",
        confirmButtonText: "OK"
    })
}

// Función para el boton de verReceta
function verRecetaRetorno(){
    Swal.fire({
        title: "Receta seleccionada",
        text: "Redirigiendo a la receta seleccionada",
        icon: "success",
        confirmButtonText: "OK"
    })
}

btnBuscar.addEventListener("click", buscarRetorno);
btnCategorias.addEventListener("click", categoriasRetorno);
btnDificultad.addEventListener("click", dificultadRetorno);

// Eventos botones verReceta
for(let i = 0; i < botonesverReceta.length; i++){
    botonesverReceta[i].addEventListener("click", verRecetaRetorno);
}
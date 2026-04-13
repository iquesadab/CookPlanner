let btnIniciarSesion = document.getElementById("iniciarSesion");

let txtCorreo = document.getElementById("txtCorreo");
let txtContrasena = document.getElementById("txtContrasena");

// Función Principal
function iniciarSesionRetorno(){

     // Validar campos vacíos
    if (validarCamposVacios() === false) {

        Swal.fire({
            title: "Inicio de sesión exitoso",
            text: "Bienvenido a CookPlanner",
            icon: "success",
            confirmButtonText: "Aceptar"
        });

        txtCorreo.value = "";
        txtContrasena.value = "";
    }
    else {
        Swal.fire({
            title: "No se puede iniciar sesión",
            text: "Por favor revise los campos vacíos",
            icon: "warning",
            confirmButtonText: "Aceptar"
        });
    }
}

// Validar campos
function validarCamposVacios(){

    let error = false;

    // Correo
    if(txtCorreo.value === ""){
        txtCorreo.classList.add("input-error");
        error = true;
    } else {
        txtCorreo.classList.remove("input-error");
    }

    // Contraseña
    if(txtContrasena.value === ""){
        txtContrasena.classList.add("input-error");
        error = true;
    } else {
        txtContrasena.classList.remove("input-error");
    }
    return error;
}

btnIniciarSesion.addEventListener("click", iniciarSesionRetorno);
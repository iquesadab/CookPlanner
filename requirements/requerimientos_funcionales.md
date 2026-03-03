# Requerimientos Funcionales

## Gestión de Usuarios

**RF-01:** El sistema debe permitir el registro de nuevos usuarios solicitando obligatoriamente: nombre completo (texto), correo electrónico (formato válido user@dominio.com), contraseña (mínimo 8 caracteres incluyendo al menos un número y un símbolo) y selección de rol (Usuario regular o Chef).

**RF-02:** El sistema debe validar que el correo electrónico no esté previamente registrado. En caso de existir, debe mostrar un mensaje indicando que el correo ya está en uso.

### Usuario Regular

**RF-03:** El sistema debe permitir al usuario regular actualizar su información personal (nombre y contraseña) desde su perfil.

**RF-04:** El sistema debe permitir al usuario regular eliminar su cuenta previa confirmación explícita.

### Chef / Experto Culinario

**RF-05:** El sistema debe permitir al chef crear recetas ingresando obligatoriamente: nombre, lista de ingredientes con cantidades, instrucciones paso a paso, categoría y presupuesto estimado por porción.

**RF-06:** El sistema debe permitir al chef editar o eliminar únicamente las recetas que haya creado.

### Administrador del Sistema

**RF-07:** El sistema debe permitir al administrador crear, editar y eliminar categorías de recetas.

**RF-08:** El sistema debe permitir al administrador eliminar recetas o comentarios que incumplan las normas de la plataforma.

---

## Funcionalidades del Sistema

### Búsqueda y Gestión de Recetas

**RF-09:** El sistema debe permitir buscar recetas por nombre mostrando coincidencias parciales o exactas.

**RF-10:** El sistema debe permitir guardar recetas en una lista de favoritos accesible desde el perfil del usuario.

**RF-11:** El sistema debe permitir modificar recetas únicamente al usuario creador o al chef correspondiente.

**RF-12:** El sistema debe permitir calificar recetas utilizando una escala numérica del 1 al 5 y calcular automáticamente el promedio de calificaciones.

---

### Planificador de Comidas

**RF-13:** El sistema debe permitir crear un menú semanal asignando recetas a cada día de la semana.

**RF-14:** El sistema debe calcular automáticamente el presupuesto total del menú semanal y generar una lista consolidada de ingredientes basada en las recetas seleccionadas.

---

### Comunidad y Ranking

**RF-15:** El sistema debe generar un ranking automático de las recetas más populares basado en la cantidad de calificaciones y favoritos registrados.

**RF-16:** El sistema debe permitir a los usuarios seguir a chefs registrados y visualizar sus recetas publicadas.

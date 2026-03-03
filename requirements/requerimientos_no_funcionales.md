# Requerimientos No Funcionales

## Rendimiento

**RNF-01:** El tiempo de carga inicial de la aplicación no debe superar los 2 segundos en una conexión de 10 Mbps, medido desde la solicitud de la página hasta que el contenido principal sea visible.

**RNF-02:** Las búsquedas de recetas deben devolver resultados en un tiempo máximo de 1 segundo cuando existan hasta 500 recetas registradas en el sistema.

---

## Capacidad

**RNF-03:** El sistema debe soportar al menos 200 usuarios concurrentes manteniendo tiempos de respuesta inferiores a 1.5 segundos para el 95% de las solicitudes.

---

## Compatibilidad

**RNF-04:** La aplicación debe funcionar correctamente en las dos últimas versiones estables de Google Chrome, Mozilla Firefox y Microsoft Edge.

**RNF-05:** La aplicación debe visualizarse correctamente en resoluciones desde 360x640 píxeles hasta 1920x1080 píxeles sin pérdida de funcionalidad.

---

## Accesibilidad (WCAG 2.1 Nivel AA)

**RNF-06:** La aplicación debe cumplir con el nivel AA de las pautas WCAG 2.1, garantizando una relación de contraste mínima de 4.5:1 entre texto y fondo.

**RNF-07:** La aplicación debe permitir la navegación completa mediante teclado y contar con etiquetas (label) correctamente asociadas a todos los campos de formulario.

---

## Seguridad

**RNF-08:** Las contraseñas deben almacenarse utilizando un método de hash antes de ser guardadas en la base de datos.

**RNF-09:** El sistema debe cerrar automáticamente la sesión del usuario después de 15 minutos de inactividad.

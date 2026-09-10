//Crear u  programa que gestione una lista de tareas
//debe permitir:
// 1. Agregar una tarea
// 2. Eliminar una tarea
// 3. Mostrar todas las tareas
// 4. Marcar una tarea como completada
// 5. Mostrar las tareas incompletas

// Lista de tareas
let tareas = [];
function agregarTarea(tarea = "", estado = "Incompleto") {
  if (tarea === "") {
    tarea = document.getElementById("tarea").value;
    estado = document.getElementById("tareaSelect").value;
  }
  tareas.push({ descripcion: tarea, completada: estado });
}
function eliminarTarea(indice) {
  if (indice >= 0 && indice < tareas.length) {
    tareas.splice(indice, 1);
  } else {
    console.log("Índice inválido");
  }
}
function mostrarTareas() {
  console.log("Mostrando Lista de tareas:");
  const contenedor = document.getElementById("respuesta");
  let respuestaHtml = `<ul>`;
  tareas.forEach((tarea, indice) => {
    console.log(`${indice + 1}. [${tarea.completada}] ${tarea.descripcion}`);
   
    respuestaHtml += `<li>${indice + 1}. [${tarea.completada}] ${tarea.descripcion} </li>`;
    
  });
  respuestaHtml += `</ul>`;
  contenedor.innerHTML = respuestaHtml;
}

//Adicionar las tares
agregarTarea("Comprar leche", "Completado");
agregarTarea("Hacer ejercicio", "Completado");
agregarTarea("Estudiar JavaScript", "Incompleto");
agregarTarea("Subir a GitHub", "Incompleto");
mostrarTareas();

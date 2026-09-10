// alert("Hola mundo");
const studentList = [];
function addStudent() {
  const firstName = document.getElementById("nombre").value;
  const lastName = document.getElementById("apellidos").value;
  const birthDate = document.getElementById("fechaNacimiento").value;
  const listStudents = {
    firstName: firstName,
    lastName: lastName,
    birthDate: birthDate
  };
  studentList.push(listStudents);
  showStudents();
}
function showStudents() {
  const contenedor = document.getElementById("respuesta");
  let respuestaHtml = `<ul>`;
  studentList.forEach((student, indice) => {
    respuestaHtml += `<li>${indice + 1}. ${student.firstName} ${student.lastName} (${student.birthDate})</li>`;
  });
  respuestaHtml += `</ul>`;
  contenedor.innerHTML = respuestaHtml;
}
function borrar() {
  const firstName = document.getElementById("nombre").value="";
  const lastName = document.getElementById("apellidos").value="";
  const birthDate = document.getElementById("fechaNacimiento").value="";
}
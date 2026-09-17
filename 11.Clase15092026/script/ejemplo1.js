const listaEstudiante = [
  { nro: 1, nombre: "Abril", apellido: "Chambi", fecNac: "12/09/2020", edad: 6, genero: "Femenino" },
  { nro: 2, nombre: "Mateo", apellido: "Quispe", fecNac: "05/03/2019", edad: 7, genero: "Masculino" },
  { nro: 3, nombre: "Valeria", apellido: "Mamani", fecNac: "22/11/2020", edad: 6, genero: "Femenino" },
  { nro: 4, nombre: "Diego", apellido: "Flores", fecNac: "18/07/2018", edad: 8, genero: "Masculino" },
  { nro: 5, nombre: "Camila", apellido: "Gutiérrez", fecNac: "30/01/2019", edad: 7, genero: "Femenino" },
  { nro: 6, nombre: "Lucas", apellido: "Rojas", fecNac: "14/04/2020", edad: 6, genero: "Masculino" },
  { nro: 7, nombre: "Sofía", apellido: "Vargas", fecNac: "09/09/2018", edad: 8, genero: "Femenino" },
  { nro: 8, nombre: "Andrés", apellido: "Pérez", fecNac: "25/12/2019", edad: 7, genero: "Masculino" },
  { nro: 9, nombre: "Mariana", apellido: "Torrez", fecNac: "02/06/2020", edad: 6, genero: "Femenino" },
  { nro: 10, nombre: "Gabriel", apellido: "Suárez", fecNac: "11/10/2018", edad: 8, genero: "Masculino" }
];
function mostrarEstudiantes()
{   const datos=document.getElementById("datos");
    datos.innerHTML="";
    let fila="";
    listaEstudiante.forEach(
        est=>{
            fila=`
                <tr>
                    <td>${est.nro}</td>
                    <td>${est.nombre}</td>
                    <td>${est.apellido}</td>
                    <td>${est.fecNac}</td>
                    <td>${est.edad}</td>
                    <td>${est.genero}</td>
                </tr>
            `;
           datos.innerHTML+=fila; 
        }
    );
}
mostrarEstudiantes();
/*RESULTADOS MATERIA
*Sea la información de varios estudiantes: cédula y nota final. Se sabe que los estudiantes
*aprueban con 48Ptos.
*Se desea procesar a varios estudiantes y determinar la siguiente estadística: porcentaje de
*aprobados y cédula de alguno de los mejores estudiantes.
*Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 888 (60Ptos),
*777 (50Ptos), 999 (40Ptos), 333 (90Ptos), 111 (30Ptos), 666 (90Ptos), 444 (48Ptos) y
*222 (60Ptos), la salida que se espera es como la siguiente:
*Porcentaje de aprobados: 75%
*Cédula de uno de los mejores estudiantes: 333
*/ 
import Cl_estudiante from "./Cl_estudiante.js";
import Cl_materia from "./Cl_materia.js";

let estudiante1 = new Cl_estudiante(888, 60);
let estudiante2 = new Cl_estudiante(777, 50);
let estudiante3 = new Cl_estudiante(999, 40);
let estudiante4 = new Cl_estudiante(333, 90);
let estudiante5 = new Cl_estudiante(111, 30);
let estudiante6 = new Cl_estudiante(666, 90);
let estudiante7 = new Cl_estudiante(444, 48);
let estudiante8 = new Cl_estudiante(222, 60);

let materia = new Cl_materia();
materia.procesarEstudiante(estudiante1);
materia.procesarEstudiante(estudiante2);
materia.procesarEstudiante(estudiante3);
materia.procesarEstudiante(estudiante4);
materia.procesarEstudiante(estudiante5);
materia.procesarEstudiante(estudiante6);
materia.procesarEstudiante(estudiante7);
materia.procesarEstudiante(estudiante8);    

let salida = document.getElementById("salida");
salida.innerHTML = ` <br> Porcentaje de aprobados: ${materia.porcentajeAprobados()}%`;
salida.innerHTML +=` <br> Cédula de uno de los mejores estudiantes: ${materia.cedulaMejorEstudiante()}`
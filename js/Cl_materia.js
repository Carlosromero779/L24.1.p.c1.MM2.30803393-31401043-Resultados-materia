export default class Cl_materia{
    constructor(){
        this.contEstudiantes = 0;
        this.contEstudiantesAprobados = 0;
        this.mayorNota = 0;
        this.mejorEstudiante = 0;
    }
    procesarEstudiante(estudiante){
        this.contEstudiantes++;
        if(estudiante.notaFinal >= 48){
            this.contEstudiantesAprobados++;
        }
            if(estudiante.notaFinal > this.mayorNota){
                this.mayorNota = estudiante.notaFinal;
                this.mejorEstudiante = estudiante.cedula;
            }
}
porcentajeAprobados(){
    return (this.contEstudiantesAprobados / this.contEstudiantes) * 100;
}
cedulaMejorEstudiante(){
    return this.mejorEstudiante;
}
    }
    
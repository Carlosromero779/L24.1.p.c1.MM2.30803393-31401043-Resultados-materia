export default class Cl_estudiante {
    constructor(cedula, notaFinal) {
        this.cedula = cedula;
        this.notaFinal = notaFinal;
}
set cedula(cedula) {
    this._cedula = cedula;
}
get cedula() {
    return this._cedula;
}
set notaFinal(notaFinal) {
    this._notaFinal = notaFinal;
}
get notaFinal() {
    return this._notaFinal;
}
resulatdo() {
    if(this.notaFinal >= 48) {
        return "aprobado";
    } else {
        return "reprobado";
    }
}
}
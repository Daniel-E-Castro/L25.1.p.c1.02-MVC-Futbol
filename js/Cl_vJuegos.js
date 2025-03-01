export default class cl_vJuegos {
    constructor() {
        this.inResultados = document.getElementById("juegosForm_inResultados");
        this.btProcesar = document.getElementById("juegosForm_btProcesar");
    }
    get resultados() {
        return +this.inResultados.value;
    }
}
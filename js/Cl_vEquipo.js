import cl_vJuegos from "./Cl_vJuegos.js"
import cl_mJuegos from "./Cl_mJuegos.js"
export default class cl_vEquipo {

    constructor() {
        this.controlador = null
        this.vJuegos = new cl_vJuegos();
        this.tabla = document.getElementById("mainForm_Tabla");
        this.lblPorcentaje = document.getElementById("mainForm_lblPorcentaje");

        this.vJuegos.btProcesar.onclick = () => this.controlador.procesarJ();
    }
    agregarNumeroDeJuegos() {
        this.mJuegos = new cl_mJuegos({
            resultados: this.vJuegos.resultados
        })
        return this.mJuegos
    }
   reportarJuegos(porcentaje) {
        this.lblPorcentaje.innerHTML = `${porcentaje}`;
        this.tabla.innerHTML += `
        <tr>
            <td>${this.mJuegos.resultados}</td>
        </tr>`;
    }
}
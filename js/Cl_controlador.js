export default class cl_controlador {

    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarJ() {
        this.modelo.procesarJ(this.vista.agregarNumeroDeJuegos());
        this.vista.reportarJuegos(
            this.modelo.porcentaje(),
        );
    }
}
export default class cl_Bodega {

    constructor() {
        this.acumGanancia = 0
    }

    procesar(arti) {
        this.acumGanancia += arti.ganancia()

    }

    totalGanancia() {
        return this.acumGanancia
    }
}
/**
 * Función que crea un objeto "smartphone" de tipo "Premio".
 * @returns {number} - Preció del smartphone.
 */
function smartphone() {

    var Premio = function (nombre, rango_menor, rango_mayor) {
        this.nombre = nombre
        this.rango_menor = rango_menor
        this.rango_mayor = rango_mayor
        this.precio = function () {
            return random(this.rango_menor, this.rango_mayor)
        }
    }
    /**
     * Almacena el objeto "smartphone" con sus atributos.
     * @type {object}
     */
    var smartphone = new Premio('smartphone', 100, 1500)
    return smartphone.precio()
}
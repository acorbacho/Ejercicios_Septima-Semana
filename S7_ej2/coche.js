/**
 * Función que crea un objeto "coche" de tipo "Premio".
 * @returns {number} - Preció del coche.
 */
function coche() {

    var Premio = function (nombre, rango_menor, rango_mayor) {
        this.nombre = nombre
        this.rango_menor = rango_menor
        this.rango_mayor = rango_mayor
        this.precio = function () {
            return random(this.rango_menor, this.rango_mayor)
        }
    }
    /**
     * Almacena el objeto "coche" con sus atributos.
     * @type {object}
     */
    var coche = new Premio('coche', 5000, 100000)
    return coche.precio()
}
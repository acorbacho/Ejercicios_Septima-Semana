/**
 * Función que crea un objeto "tv" de tipo "Premio".
 * @returns {number} - Preció del televisor.
 */
function tv() {

    var Premio = function (nombre, rango_menor, rango_mayor) {
        this.nombre = nombre
        this.rango_menor = rango_menor
        this.rango_mayor = rango_mayor
        this.precio = function () {
            return random(this.rango_menor, this.rango_mayor)
        }
    }
    /**
     * Almacena el objeto "tv" con sus atributos.
     * @type {object}
     */
    var tv = new Premio('tv', 100, 5000)
    return tv.precio()
}
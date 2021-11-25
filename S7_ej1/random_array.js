/**
 * Función que crea un array aleatorio.
 * @param {number} min - Valor mínimo.
 * @param {number} max - Valor máximo
 * @param {number} long - Longitud del array.
 * @returns {Array} - Array.
 */
function random_array(min, max, long) {
    /**
     * Variable que almacena el valor mínimo del array pasada por parámetro.
     * @type {number}
     */
    var minAux = min
    /**
     * Variable que almacena el valor máximo del array pasada por parámetro.
     * @type {number}
     */
    var maxAux = max
    /**
     * Variable que almacena la longitud del array pasada por parámetro.
     */
    var longAux = long
    /**
     * Variable que almacena el array.
     * @type {Array}
     */
    var array = []
    /**
     * Variable que almacena cada valor del array.
     * @type {number}
     */
    var numero

    for (i = 0; i < longAux; i++) {
        numero = Math.floor(Math.random() * (maxAux - minAux)) + minAux
        array.push(numero)
    }
    return array
}
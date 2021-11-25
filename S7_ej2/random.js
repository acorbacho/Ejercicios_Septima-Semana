/**
 * Función que genera un número aleatorio.
 * @returns {number} - Devuelve el número.
 */
function random(min, max) {
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
    var numero = Math.floor(Math.random() * (maxAux - minAux)) + minAux
    return numero
}
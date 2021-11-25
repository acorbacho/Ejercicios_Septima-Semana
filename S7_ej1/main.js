/**
 * Función 'main' de adivinar una combinación de 5 números. Mastermind.
 */
function main() {
    /**
     * Valor mínimo de los números.
     * @type {number}
     */
    var min = 0
    /**
     * Valor máximo de los números.
     * @type {number}
     */
    var max = 9
    /**
     * Longitud de la combinación a generar aleatoriamente.
     * @type {number}
     */
    var long = 5
    /**
     * Máximos intentos del usuario para adivinar la combinación.
     * @type {number}
     */
    var intentos = 10
    /**
     * Variable para comprobar si el programa sigue en bucle o no.
     * @type {boolean}
     */
    var isRunning = true

    while (isRunning === true) {
        /**
         * Variable que guarda la combinación creada por otra función.
         * @type {Array}
         */
        var combinacion = random_array(min, max, long)
        mastermind(combinacion, intentos)
        /**
         * Variable que guarda la respuesta del usuario a continuar el juego.
         * @type {string}
         */
        var mensaje_continuar = entrada('¿Deseas volver a jugar? Escribe "si" o "no".')

        if (mensaje_continuar == 'si' || mensaje_continuar == 'Si' || mensaje_continuar == 'SI' || mensaje_continuar == 'sI') {
            isRunning = true
        } else {
            isRunning = false
        }
    }
    salida('¡Hasta la próxima!')
}
main()
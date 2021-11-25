function main() {
    /**
     * Variable para comprobar si el programa sigue en bucle o no.
     * @type {boolean}
     */
    var isRunning = true
    while (isRunning === true) {
        precio_justo()
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
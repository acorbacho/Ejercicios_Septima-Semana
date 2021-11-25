/**
 * Función que desarrolla el juego 'Mastermind'.
 * @param {Array} combinacion - Array a adivinar.
 * @param {number} intentos - Máximos intentos.
 */
function mastermind(combinacion, intentos) {
    /**
     * Variable que guarda el array a adivinar, traido por parámetro.
     * @type {Array}
     */
    var array_combinacion = combinacion
    /**
     * Variable que almacena los intentos traidos por parámetro.
     * @type {number}
     */
    var intentosAux = intentos
    /**
     * Un contador para los intentos gastados.
     * @type {number}
     */
    var contador = 0
    /**
     * Variable que se utiliza para almacenar un array de 'O's para comparar más adelante en el programa.
     * @type {Array}
     */
    var arrayEval = []

    //Creamos un array de 'O's del tamaño de la combinación, para evaluarlo más adelante.
    for (i = 0; i < array_combinacion.length; i++) {
        arrayEval[i] = 'O'
    }
    salida('Intenta adivinar un número de 5 cifras.\nEscribe la combinación de 5 números a continuación.\nSi escribes más números, no se tendrán en cuenta.\nSi haciertas número y posición aparecerá como "O".\nSi el numero existe pero no en esa posición, aparecerá como "X".\nSi el número no existe en la combinación, aparecerá como "-".\n¡Suerte!')

    while (contador < intentosAux) {
        /**
         * Almacena la combinación que el usuario introduce.
         * @type {string}
         */
        var numero_usuario = entrada('Introduce una combinación de 5 números para intentar adivinarla.')
        /**
         * Se almacena la conversión a array del string que el usuario introduce.
         * @type {Array}
         */
        var array_usuario = Array.from(numero_usuario)
        /**
         * Array que se va a generar para imprimir por pantalla con la pista para el usuario.
         * @type {Array}
         */
        var array_impresion = []

        for (i = 0; i < array_combinacion.length; i++) {

            for (j = 0; j < array_combinacion.length; j++) {

                if (array_combinacion[i] == array_usuario[j] & i == j) {
                    array_impresion[j] = 'O'
                } else if (array_combinacion[i] == array_usuario[j] & array_impresion[j] != 'O') {
                    array_impresion[j] = 'X'
                } else if (array_impresion[j] != 'O' & array_impresion[j] != 'X') {
                    array_impresion[j] = '-'
                }
            }
        }
        contador++
        /**
         * Índice de 'arrayEval' usado para el próximo bucle.
         * @type {number}
         */
        var indice_arrayEval = 0
        /**
         * Variable que almacena un booleano utilizado para evaluar si 'arrayEval' y 'array_impresion' son iguales.
         * @type {boolean}
         */
        var sonIguales = true

        //Evaluamos si el 'array_impresion' está completo de 'O's.
        for (valor of arrayEval) {

            if (valor != array_impresion[indice_arrayEval]) {
                sonIguales = false
                break
            }
            indice_arrayEval++
        }

        if (sonIguales === true) {
            salida('¡Has acertado!')
            break
        } else if (sonIguales === false && contador < intentosAux) {
            salida(array_impresion.join(' ') + '\nSigue intentándolo, te quedan ' + (intentosAux - contador) + ' intentos.')
        } else {
            salida('¡Has fallado y se te han agotado los intentos! \n¡Oh noooo!')
            salida('El número era el ' + array_combinacion.join(''))
        }
    }
}
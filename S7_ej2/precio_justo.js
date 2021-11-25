/**
 * Función que adivina el precio justo de un premio.
 */
function precio_justo() {
    salida('Intenta adivinar el precio justo del producto que elijas. Si te pasas habrás perdido.')
    /**
     * Almacena la elección del premio.
     * @type {string}
     */
    var premio = entrada('Escribe a continuación el premio del cual quieres adivinar su precio justo => "televisor", "smartphone" o "coche".')
    /**
     * Almacena el precio que introduce el usuario.
     * @type {number}
     */
    var precio_usuario = 0

    if (premio === 'televisor' || premio === 'Televisor' || premio === 'TELEVISOR') {
        /**
         * Almacena la salida de la función "tv" la cual hace un return del precio justo del premio.
         * @type {number}
         */
        var precio_justo = tv()
        salida('Has elegido el televisor.')

        while (precio_usuario < precio_justo) {
            precio_usuario = entrada('Escribe su precio justo en euros. \nPor favor, no escribas decimales ni símbolos, solo la cantidad numérica.')

            if (precio_usuario == precio_justo) {
                salida('¡Enhorabuena, has adivinado el precio!\n' + precio_justo + '€')
            } else if (precio_usuario < precio_justo) {
                salida('El precio es mayor')
            } else if (precio_usuario > precio_justo) {
                salida('Te has pasado y has perdido, el precio era de ' + precio_justo + '€')
            } else {
                salida('No válido')
            }
        }
    } else if (premio === 'smartphone' || premio === 'Smartphone' || premio === 'SMARTPHONE') {
        /**
         * Almacena la salida de la función "smartphone" la cual hace un return del precio justo del premio.
         * @type {number}
         */
        var precio_justo = smartphone()
        salida('Has elegido el smartphone.')

        while (precio_usuario < precio_justo) {
            precio_usuario = entrada('Escribe su precio justo en euros. \nPor favor, no escribas decimales ni símbolos, solo la cantidad numérica.')

            if (precio_usuario == precio_justo) {
                salida('¡Enhorabuena, has adivinado el precio!\n' + precio_justo + '€')
            } else if (precio_usuario < precio_justo) {
                salida('El precio es mayor')
            } else if (precio_usuario > precio_justo) {
                salida('Te has pasado y has perdido, el precio era de ' + precio_justo + '€')
            } else {
                salida('No válido')
            }
        }
    } else if (premio === 'coche' || premio === 'coche' || premio === 'coche') {
        /**
         * Almacena la salida de la función "coche" la cual hace un return del precio justo del premio.
         * @type {number}
         */
        var precio_justo = coche()
        salida('Has elegido el coche.')

        while (precio_usuario < precio_justo) {
            precio_usuario = entrada('Escribe su precio justo en euros. \nPor favor, no escribas decimales ni símbolos, solo la cantidad numérica.')

            if (precio_usuario == precio_justo) {
                salida('¡Enhorabuena, has adivinado el precio!\n' + precio_justo + '€')
            } else if (precio_usuario < precio_justo) {
                salida('El precio es mayor')
            } else if (precio_usuario > precio_justo) {
                salida('Te has pasado y has perdido, el precio era de ' + precio_justo + '€')
            } else {
                salida('No válido')
            }
        }
    } else {
        salida('No válido')
    }
}
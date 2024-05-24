/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} retorna una carta del deck
 */

export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) throw new Error('deck es obligatorio como un arreglo de string')

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}

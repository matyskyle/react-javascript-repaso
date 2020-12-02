const personajes = [ 'Goku', 'Vegeta', 'Gohan', 'Trunks', ];

const [ , , , pj ] = personajes;
console.log( pj );

///////////////////////////////////////////////////////////
const retornaArreglo = () => {
    return [ 'ABC', 123 ];
};

const [ letras, numeros ] = retornaArreglo();
console.log( letras, numeros );

///////////////////////////////////////////////////////////
const usarEstado = ( valor ) => {
    return [ valor, () => { console.log('Hola Mundo') }];
}

const [ nombre, setNombre ] = usarEstado( 'Goku' );
console.log( nombre );
setNombre();
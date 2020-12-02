const nombre = "Matias";
const apellido = "Herrera";

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log( nombreCompleto );

function getSaludo( nombreCompleto ) {
    return 'Hola ' + nombreCompleto;
}

console.log( `Este texto sera genial: ${ getSaludo( nombreCompleto ) }` );
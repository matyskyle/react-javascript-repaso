const saludar = function ( nombre ) {
    return `Hola, ${ nombre }`;
};

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`
};

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

const saludar4 = () => `Hola Mundo`;

console.log( saludar('Hola Amigos') );
console.log( saludar2('Hola Amigos') );
console.log( saludar3('Hola Amigos') );
console.log( saludar4() );

const getUser = () => ({
    uid: 'ABCDEFGH',
    username: 'matyskyle',
});

const user = getUser();

console.log( user );

//TAREA
const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABCFDBDF',
    username: nombre,
});

const usuarioActivo = getUsuarioActivo( 'Matias' );
console.log( usuarioActivo );
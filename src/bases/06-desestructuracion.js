//destructuracion
//asignacion destructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const retornaPersona = ( { nombre, edad, clave, rango = 'Capitan' } ) => {

    // console.log( edad, clave, nombre, rango );
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 13.40814,
            lng: -14.1497983,
        },
    }
};

const { nombreClave, anios, latlng:{ lat, lng } } = retornaPersona( persona );

console.log( nombreClave, anios );
console.log( lat, lng );
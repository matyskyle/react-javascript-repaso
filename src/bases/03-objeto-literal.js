const persona = {
    nombre: 'Matias',
    apellido: 'Cabrera',
    edad: 24,
    nacionalidad: 'Chileno',
    direccion: {
        ciudad: 'Santiago',
        comuna: 'Maipu',
        codigoPostal: 9250000,
        pais: 'Chile',
    },
};

const persona2 = { ...persona };
persona2.nombre = 'Jose';

console.log( persona );
console.log( persona2 );
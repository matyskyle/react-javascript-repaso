import { getHeroesById } from './bases/08-import-export';

// const promesa = new Promise( ( resolve, reject ) => {

//     setTimeout( () => {
//         const heroe = getHeroesById( 2 );
//         resolve( heroe );
//     }, 2000 );

// });

// promesa.then( ( heroe ) => {
//     console.log('Heroe: ', heroe );
// }).catch( err => console.warn( err ) );

const getHeroesByIdAsync = ( id ) => {

    return new Promise( ( resolve, reject ) => {
    
        setTimeout( () => {
            const heroe = getHeroesById( id );
            if (heroe) {
                resolve( heroe );
            } else {
                reject( 'Error: La busqueda es invalida');
            }
        }, 2000 );
    
    });

};

getHeroesByIdAsync( 3 ).then( console.log )
.catch( console.warn );

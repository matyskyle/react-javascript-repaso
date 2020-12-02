import heroes from '../data/heroes';

export const getHeroesById = ( id ) => {
    return heroes.find( (element) => element.id === id );
};

const getHeroesByOwner = ( owner ) => {
    return heroes.filter( (element) => element.owner === owner );
};

// console.log( getHeroesByOwner( 'DC' ) );
getHeroesByOwner( 'DC' );




import { heroes, Owner, type Hero } from './data/heores.data';

const getHeroById = ( id: number ): Hero | undefined =>{
    const hero = heroes.find( ( hero )=>{
        return hero.id === id;
    } )

    return hero;
};

console.log( getHeroById(3) );
console.log( getHeroById(100) );


export const getHeroByOwner = ( owner: Owner ): Hero[] | undefined =>{

    const hero = heroes.filter(( hero ) => {
        return hero.owner === owner
    })

    return hero;
}



const characterNames = ['Goku','Vegeta','Trunks'];


const [ character1, character2, character3 ] = characterNames;

console.log( {character1, character2, character3 } );

const [ , char2, ] = characterNames;

console.log( { char2 } );


const [ , , trunks ] = characterNames;

console.log( { trunks } );

const returnsArray = (): (string | number)[]=>{
    return ['ABX', 123];
};
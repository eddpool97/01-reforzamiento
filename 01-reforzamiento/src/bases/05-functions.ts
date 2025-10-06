



function greet( name: string ): string{
    return `Hola ${name}`
}

const message: string =  greet('Edwin');

console.log( message );


const greet2 = ( name: string ): string=>{
    return `Hola ${ name }`
};

console.log( greet2( 'Enoc' ) );

interface User{
    uid: string;
    username: string
}

const user = {
        uid: 'ABC-123',
        username: 'EDD-1456'
    };

function getUser( user: User ): User{
    return user
}

console.log( getUser( user ) );

const getUser2 = ( user: User ):User=> user;

console.log( getUser2( user ) );

const myNumbers: number[] = [1,2,3,4,5];

myNumbers.forEach( ( value: number )=>  console.log({ value }) );
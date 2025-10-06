
const person = {

    name: 'Tony',
    age: 45,
    key: 'Ironman'
};

/* 
const name = person.name;
const age = person.age;
const key = person.key;

console.log( { name, age, key } ); */

const { name: ironManName, age: ironManAge, key } = person;

console.log( { ironManName, ironManAge, key } );


interface Hero{
    name: string;
    age: number;
    key: string;
    rank?: string
};

const useContext = ( hero: Hero )=>{

    const { name, age, key, rank } = hero;

    return {
        keyName: key,
        user: {
            name,
            age
        },
        rank
    }
};

const {rank, keyName, user: { name, age }} = useContext( person );

console.log( { rank, keyName, name, age});
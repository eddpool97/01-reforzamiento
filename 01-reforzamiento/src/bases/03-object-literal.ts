
interface Person{
    firstName: string;
    lastName: string;
    age: number;
    address?: {
        postalCode: string, 
        city: string
    }
}

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 42,
    address: {
        postalCode: '12345',
        city: 'New York'
    }
};

console.log( ironman );


//Clon en profundidad del objeto


/*const spiderman = structuredClone( ironman );

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.address.city = 'San Jose';

console.log( ironman );
console.log( spiderman );*/
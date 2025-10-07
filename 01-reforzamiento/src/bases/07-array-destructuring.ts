

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

const [userName, userCode] = returnsArray();

console.log( {userName, userCode} );


//----------------------------------------------

//TAREA

/* La función debe llamarse useState.

Debe retornar un arreglo con dos elementos:

#1 - Un string (el valor inicial).

#2 - Una función anónima de flecha que:

Recibe un string.
Imprime ese string en consola.
 */

const useState = ( initialValue: string ): any[]=>{

    return [
        initialValue,
        ( value: string ): void=> console.log( value )
    ] as const;
};

const [ name, setName ] = useState('Goku');

console.log( name );

setName( 'Dexter' );
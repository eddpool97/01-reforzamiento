import type { GiphyRandomResponse, } from './data/giphy.response';

const API_KEY: string = 'cOwPpckPeaYORpyUo5VCpldkBKAoYokt';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);


const createImage = ( url: string ): void=>{
     const imgElement = document.createElement('img');
     imgElement.src = url;
     document.body.append( imgElement );
}


myRequest
    .then( (response) => response.json() /*Regresa una promesa y se atrapa en el siguiente Then*/ )
    .then( ( {data} : GiphyRandomResponse ) => {


        const imageUrl = data.images.original.url;
        createImage( imageUrl );
        
    } )
    .catch( error => console.warn( error ) );

//Peticion HTTP con promesas de manera tradicional

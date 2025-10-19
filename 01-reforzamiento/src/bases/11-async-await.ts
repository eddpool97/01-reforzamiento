

import type { GiphyRandomResponse, } from './data/giphy.response';

const API_KEY: string = 'cOwPpckPeaYORpyUo5VCpldkBKAoYokt';


const createImage = ( url: string ): void=>{
     const imgElement = document.createElement('img');
     imgElement.src = url;
     document.body.append( imgElement );
}

const getRandomGif = async(): Promise<string>=>{  
    const response  = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);
    const {data}: GiphyRandomResponse = await response.json();
    return data.images.original.url;
};

getRandomGif().then( createImage );

//Peticion HTTP con promesas de manera tradicional

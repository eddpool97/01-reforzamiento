

const API_KEY: string = 'cOwPpckPeaYORpyUo5VCpldkBKAoYokt';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

myRequest
    .then( (response) => response.json() )
    .then( data => console.log( data ) )
    .catch( error => console.warn( error ) );
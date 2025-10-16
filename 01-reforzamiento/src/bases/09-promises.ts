
//Se indica que la promesa resuelve un valor de tipo <number>
const myPromise = new Promise<string>(( /*resolve*/ reject )=>{
    setTimeout(()=>{
        reject(`Mi amigo se perdió`)
        
        
        //resolve(`Recupere mis $${100}`);
    }, 2000)
});


myPromise
    .then( myMoneyIsBack =>console.log(myMoneyIsBack))
    .catch( reason => console.warn( reason ) )
    .finally( ()=>console.log(`Nada que hacer, a seguir con mi vida`) );


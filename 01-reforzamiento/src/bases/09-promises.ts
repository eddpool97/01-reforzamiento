

const myPromise = new Promise(( resolve, reject )=>{
    setTimeout(()=>{
        reject(`Mi amigo se perdió`)
        
        //resolve(`Recupere mis $${100}`);
    }, 2000)
});


myPromise
    .then( myMoneyIsBack =>console.log(myMoneyIsBack))
    .catch( reason => console.log( reason ) )
    .finally( ()=>console.log(`Nada que hacer, a seguir con mi vida`) )
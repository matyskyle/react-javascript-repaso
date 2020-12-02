const apiKey = 'PAT1zJyHPmbKxFdzwo3JyVLiCqD6uNGF';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

//promesa normal
// peticion.then( resp => {
//     resp.json().then(
//         data => { console.log( data ); 
//     });
// })
// .catch( console.warn );

peticion.then( ( resp ) => resp.json())
.then( ({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;

    document.body.append( img );
})
.catch( console.warn );
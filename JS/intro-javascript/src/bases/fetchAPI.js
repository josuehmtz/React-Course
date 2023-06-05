const apiKey = '2YcAbyIL8C2za8UasAJyUaoji3WZ5mhq';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion.then( res => res.json() )
.then(({data}) => {
    const url = data.url; 
    console.log(url)

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
})
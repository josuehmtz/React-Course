const getImage = async () => {
    const apiKey = '2YcAbyIL8C2za8UasAJyUaoji3WZ5mhq';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
}

getImage();

export const reqImagenes = async (busqueda, offset = 0) => {
    const limit = 20;
    const PUBLIC_API_KEY = '52PYHTB-73b7QKxbGa7yhiEK-rhQjwATa9AOEiRk21k';
    const api_url = `https://api.unsplash.com/search/photos?query=${busqueda}&per_page=${limit}&page=${offset}&client_id=${PUBLIC_API_KEY}`;

    const resp = await fetch(api_url);
    const data = await resp.json();  

    const imagenes = data.map((imagen) => ({
        url : imagen.results.urls.regular
    }))

    console.log(imagenes);
    
    return imagenes;
};



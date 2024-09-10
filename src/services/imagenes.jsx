export const reqImagenes = async (busqueda, page = 1) => {
    const limit = 18; 
    const PUBLIC_API_KEY = '3FYO7apMy2sBcLC0oEAq9NXczAM0c6tGY9HoD8p-5jE';
    const api_url = `https://api.unsplash.com/search/photos?page=${page}&query=${busqueda}&per_page=${limit}&client_id=${PUBLIC_API_KEY}`;
  
    const resp = await fetch(api_url);
    const { results } = await resp.json();
    
    return results;
  };
  
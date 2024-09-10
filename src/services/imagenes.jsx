export const reqImagenes = async (query, page = 1) => {
    const limit = 14; 
    const PUBLIC_API_KEY = '52PYHTB-73b7QKxbGa7yhiEK-rhQjwATa9AOEiRk21k';
    const api_url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&per_page=${limit}&client_id=${PUBLIC_API_KEY}`;
  
    const resp = await fetch(api_url);
    const { results } = await resp.json();
    
    return results;
  };
  
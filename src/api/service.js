export const fetchProducts = async (keyword = 'Lego Star Wars', page = 1) => {
    const url = `https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-search-by-keyword?keyword=${keyword}&page=${page}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'fce0e15738msh6a87c0c9db9505cp14b74fjsn54bc768f3bc7', // tu API Key
        'X-RapidAPI-Host': 'axesso-walmart-data-service.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error en la petición: ${response.status}`);
      }
      const data = await response.json();
      console.log(data); // Aquí manejas los datos de la respuesta
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  export const fetchProductsFake = async (page) => {
    try {
      const response = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${(page) * 10}&limit=10`);
      if (!response.ok) {
        throw new Error('Error fetching products');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  };
  
  // Función para buscar productos por término de búsqueda
  export const fetchSearchedProducts = async (searchTerm) => {
    try {
      const response = await fetch(`https://api.escuelajs.co/api/v1/products?title=${searchTerm}`);
      if (!response.ok) {
        throw new Error('Error fetching searched products');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching searched products:', error);
      return [];
    }
  };
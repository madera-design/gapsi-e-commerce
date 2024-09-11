import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Search from './components/Search';
import Carrito from './components/Carrito';
import { fetchProductsFake, fetchSearchedProducts } from './api/service'

import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]); // Limpiar el estado del carrito
    loadProducts()
    setSearchTerm(''); // Limpiar el término de búsqueda
  };

  const loadProducts = async () => {
    const data = await fetchProductsFake(page);
    if (data.length === 0) {
      setHasMore(false); // No hay más productos para cargar
    } else {
      setProducts((prevProducts) => [...prevProducts, ...data]);
    }
  };
 
  // Función para manejar la búsqueda
  const handleSearch = async (searchTerm) => {
    setPage(1);
    setHasMore(true);
    setProducts([]);
    // if(searchTerm === '') loadProducts();
    const data = await fetchSearchedProducts(searchTerm);
    setProducts(data);
  };


  // Función para cargar más productos cuando se hace scroll
  const handleScroll = () => {
    const scrollableHeight = document.documentElement.scrollHeight;
    const currentScroll = window.innerHeight + window.scrollY;
    if (currentScroll + 10 >= scrollableHeight && hasMore) {
      loadMore();
    }
  };

  // Función para incrementar la página y cargar más productos
  const loadMore = () => {
    setPage((prevPage) => prevPage + 10); // Incrementar el número de página
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setProducts((prevProducts) => prevProducts.filter(p => p.id !== product.id)); // Eliminar del estado de productos
  };

 // Llamar a la API cuando cambia la página
  useEffect(() => {
    loadProducts();
  }, []);

  // Usar efecto para agregar el manejador de scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore, products]);

  return (
    <>
      <Header onClearCart={clearCart} />
      <Search 
        onSearch={handleSearch}
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />
      <div className="App">
        <div className="product-list">
          <h2>Lista de productos</h2>
          {products.length === 0 ? (
            <p>No hay productos disponibles</p>
          ) : (
            <div className="product-list-container">
              {products.map((product) => (
                <Card
                  key={product.id}
                  data={product}
                  addToCart={addToCart}
                />
              ))}
            </div>
          )}
          {hasMore && <h4>Cargar más productos...</h4>}
        </div>
          <Carrito data={cart} />
      </div>
    </>
  );
};

export default App;
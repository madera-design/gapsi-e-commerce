import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 

const Search = ({ onSearch, searchTerm, setSearchTerm }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm); // Llamar a la función que viene como prop con el término de búsqueda
  };

  return (
    <div className='container-search'>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar producto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='primaryButton' type="submit">
          Buscar
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
      </form>
    </div>
  );
};

export default Search;

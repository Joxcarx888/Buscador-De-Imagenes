import React, { useState } from 'react';

export const BuscarImagenes = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <form onSubmit={onSubmit} className="d-flex justify-content-center mb-4 mt-4">
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        className="form-control w-50" 
        placeholder="Buscar" 
      />
      <button type="submit" className="btn btn-primary ms-2">Search</button>
    </form>
  );
};


import React, { useState } from 'react';

export const BuscarImagenes = ({ buscarImagen }) => {
  const [query, setQuery] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    buscarImagen(query);
  };

  return (
    <div className='d-flex justify-content-center align-items-center mt-3'>
      <img src="/src/styles/assets/Diseño_sin_título-removebg-preview.png" alt="Lupa" className="img-fluid" 
        style={{ maxWidth: '48px', maxHeight: '48px', marginRight: '8px' }} 
      />
      <form onSubmit={onSubmit} className="d-flex align-items-center">
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          className="form-control w-75" 
          placeholder="Buscar" 
        />
        <button type="submit" className="btn btn-primary ms-2">Buscar</button>
      </form>
    </div>
  );
};


import React, { useState } from 'react';
import { useImagenes } from '../hooks/useImagenes';
import { ContenedorImagenes } from './ContenedorImagenes';
import { BuscarImagenes } from './BuscarImagenes';

export const ImagenesApp = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const { images } = useImagenes(query, page);

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1); 
  };

  return (
    <>
      <BuscarImagenes handleSearch={handleSearch} />

      <ContenedorImagenes images={images} />

      <div className="position-absolute mt-5 start-50 translate-middle-x">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <button className="page-link" onClick={handlePrevious} disabled={page === 1}>Previous</button>
            </li>
            <li className="page-item">
              <button className="page-link" onClick={handleNext}>Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

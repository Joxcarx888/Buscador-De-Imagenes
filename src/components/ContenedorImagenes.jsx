import React from 'react';

export const ContenedorImagenes = ({ imagenes }) => {
  return (
    <div className='d-flex flex-row row row-cols-5'>
      {
        imagenes &&
        imagenes.map((img) => (
          <div key={img.id} className="card m-3 shadow-sm" style={{ width: '14rem', borderRadius: '10px', overflow: 'hidden' }}>
            <img src={img.urls.regular} className="card-img-top" alt={img.alt_description} style={{ height: '12rem', objectFit: 'cover' }} />
            <div className="card-body text-center p-3" style={{ backgroundColor: '#f8f9fa' }}>
              <h3 className="card-title mb-0" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{img.alt_description || 'Sin Titulo'}</h3>
            </div>
          </div>
        ))
      }
    </div>
  );
};

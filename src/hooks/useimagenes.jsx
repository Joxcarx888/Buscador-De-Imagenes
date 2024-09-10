import { useEffect, useState } from 'react';
import { reqImagenes } from '../services/imagenes';

export const useImagenes = (query = '', page = 1) => {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    reqImagenes(query, page).then((data) => {
      setImagenes(data);
    });
  }, [query, page]);

  return {
    imagenes,
  };
};
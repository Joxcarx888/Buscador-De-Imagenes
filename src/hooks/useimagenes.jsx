import { useEffect, useState } from 'react';
import { reqImagenes } from '../services/imagenes';

export const useImagenes = (query = '', page = 1) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    reqImagenes(query, page).then((data) => {
      setImages(data);
    });
  }, [query, page]);

  return {
    images,
  };
};


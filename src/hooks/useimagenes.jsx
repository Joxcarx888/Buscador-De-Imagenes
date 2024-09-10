import { useEffect, useState } from "react";
import { reqImagenes} from "./services/imagenes";

export const useImagenes = (busqueda, offset = 0) => {
    const [imagenes, setImagenes] = useState([])
    const [busqueda,setBusqueda] = useState([])
 
    const handleGetImagen = (e, busqueda) =>{
        e.preventDefault()

        reqImagenes(busqueda).then((imagenes) => {
            setImagenes(imagenes)            
        })

        setNombreCategoria(busqueda)
    }

    return{
        handleGetImagen,
        imagenes,
        busqueda
    }
};
 
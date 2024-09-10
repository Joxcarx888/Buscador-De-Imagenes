import { useImagenes } from "./hooks/useImagenes"
import { BuscarImagenes } from "./BuscarImagenes"
import { ContenedorImagenes } from "./ContenedorImagenes"

export const GifApp = () =>{

    const {handleGetImagen, imagenes, busqueda} = useImagenes()
    return(
        <>
            <BuscarImagenes handleGetImagen={handleGetImagen}/>
            
            <ContenedorImagenes imagenes={imagenes} busqueda={busqueda}/>
            
        </>
    )

}



 
 
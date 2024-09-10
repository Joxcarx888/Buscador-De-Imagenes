import { useState } from "react"

export const BuscarImagenes = ({handleGetImagen}) => {

    const[busqueda, setBusqueda]=useState('')
  return (
    <>  
        
        <div className="d-flex flex-row justify-content-center alig-items-center mt-3">
            <form className="d-flex" onSubmit={ (e) => { handleGetImagen(e,busqueda)}}>
                
                <input className="me-2 form-control" type="text" onChange={ (e) =>{ setBusqueda(e.target.value)}}/>
                <input className="btn btn-primary" type="submit" value='buscar'/>
            </form>
        </div>
        
    </>
  )
}

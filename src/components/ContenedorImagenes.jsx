export const ContenedorImagenes = ({imagenes,busqueda}) => {
    return (
      <>
          <div className=" d-flex flex-row justify-content-center alig-items-center mt-3">
              <h1>{busqueda}</h1>
          </div>
          <div className="d-flex flex-row justify-content-center alig-items-center">
              
              {imagenes.map(({url})=>{
                  return (
                      <img key={id} className="w-25 m-3" src={url} alt="imagen"/>
                  )
              })}    
          </div>
      </>
    )
  }
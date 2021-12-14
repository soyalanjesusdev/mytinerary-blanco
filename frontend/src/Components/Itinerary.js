
import {useState} from "react"




export default function Itinerary(props) { // creamos la funcion itinerary que recibe como parametro props
// creamos un estado open que es un booleano y lo inicializamos en false
  const [display, setDisplay] = useState(false)
  const handleClick = () => setDisplay(!display)
  function costo(price) { // creamos la funcion costo que recibe como parametro price
    return Array.from({length: price}) // creamos un array de longitud price
  }
  return (
    <>
      {props.itineraries.length > 0 && // si la longitud de itineraries es mayor a 0 entonces retornamos una lista de itineraries
        props.itineraries.map((itinerary, index) => ( // creamos un map para recorrer los itineraries y retornar una lista de itineraries
          <div key={index} className="itinerarioCard">
            <h2 className="title">{itinerary.itineraryName}</h2>
            <img
              className="singleCard"
              variant="top"
              src={itinerary.src}
              alt="Imagen"
            />
            <h3>{itinerary.name}</h3>
            <div className="divi">
                <div className="minidiv">
                  <div>Likes: {itinerary.likes}</div>
                </div>
                <div className="minidiv">
                    <div>Duration: {itinerary.duration}Hs</div>
                </div>
                <div className="minidiv">
                  {costo(itinerary.price).map(() => (// creamos un map para recorrer el array de costo y retornar una lista de costo 
                    <div>💵</div>
                  ))}
                </div>
              </div>
              <div className="hashtag">
              {itinerary.hashtags.map((hash) => ( // creamos un map para recorrer los hashtags y retornar una lista de hashtags
                <div className="tag"> #{hash}</div>
                ))}
            </div>
            
              <div className="btn-ver-mas">
                              {display && (
                                  <h4 className="texto-construccion">Under Construction...</h4>
                              )}
                              <button onClick={handleClick} className="btn-ver">
                                  {" "}
                                  {display ? "View less" : "View more"}
                            </button>
                        </div>
            </div>
       
        ))}
    </>
  )
}

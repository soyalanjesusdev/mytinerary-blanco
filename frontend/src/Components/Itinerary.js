import {Button, Collapse} from "react-bootstrap"

import {useState} from "react"

export default function Itinerary(props) {
  const [open, setOpen] = useState(false)

  function costo(price) {
    return Array.from({length: price})
  }
  return (
    <>
      {props.itineraries.length > 0 &&
        props.itineraries.map((itinerary, index) => (
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
                  {costo(itinerary.price).map(() => (
                    <div>💵</div>
                  ))}
                </div>
              </div>
              <div className="hashtag">
              {itinerary.hashtags.map((hash) => (
                <div className="tag"> #{hash}</div>
                ))}
            </div>
              <Button
                className="btn-warning p-1 fs-6 fw-normal m-1"
                onClick={() => setOpen(!open)}
                aria-controls="example-fade-text"
                aria-expanded={open}
              >
                {!open ? "View more" : "View less"}
              </Button>
              <Collapse in={open}>
                <div id="example-collapse-text">Under Construction...</div>
              </Collapse>
              
            </div>
       
        ))}
    </>
  )
}

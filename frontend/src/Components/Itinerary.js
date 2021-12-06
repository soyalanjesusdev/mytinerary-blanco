import {Button, Collapse} from "react-bootstrap"
import {Link} from "react-router-dom"
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
            <h2>{itinerary.itineraryName}</h2>
            <img
              className="singleCard"
              variant="top"
              src={itinerary.src}
              alt="Imagen"
            />
            <h3>{itinerary.userName}</h3>
            <div>
              <span>{itinerary.duration}</span>
              {costo(itinerary.price).map(() => (
                <span>💵</span>
              ))}
            </div>
            <div>
              {itinerary.hashtags.map((hash) => (
                <div className="tag"> #{hash}</div>
              ))}
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
              {/* <div className="d-flex">
                <Link to="/cities">
                  <Button className="btn-warning p-1 fs-6 fw-normal m-3">
                    Back to cities
                  </Button>
                </Link>
                {<Link to="/">
                  <Button className="btn-warning p-1 fs-6 fw-normal m-3">
                    Back to Home
                  </Button>
                </Link>}
              </div> */}
            </div>
          </div>
        ))}
    </>
  )
}

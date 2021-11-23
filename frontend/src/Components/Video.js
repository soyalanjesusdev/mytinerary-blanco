import Video from "../components/asset/Lake64587.mp4";
import {Link} from "react-router-dom";

const Videos = () => {
  return (
    
      <div className="videos">
        
            <video
              className="video"
              src={Video}
              autoPlay
              loop
              muted
              type="video/mp4"
            />
            <div className="buttonlink"></div>
            <h1>MyTinerary </h1>
            <h4>¡Find your perfect trip! <span>&#160;</span></h4>
            <p className="p">"designed by insiders who know and love their cities" </p>
            
            <Link  to="/Cities"  type="button" class="btn btn-outline-light">Press to start the adventure</Link>
          </div>
    
  );
};

export default Videos;

import Video from "./asset/Lake64587.mp4";
import { Link } from "react-router-dom";

const VideosII = () => {
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
     

      <Link to="/Cities" type="button" class="btn btn-outline-light">
        Press to start the adventure
      </Link>
    </div>
  );
};

export default VideosII;

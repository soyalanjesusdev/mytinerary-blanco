import Video from "../components/asset/Lake64587.mp4";

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
            
            
            <h1>Find your perfect trip</h1>
            <button type="button" class="btn btn-outline-light">Press to start the adventure</button>
            
            <p>designed by insiders who know and love their cities! </p>
          </div>
    
  );
};

export default Videos;

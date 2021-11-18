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
            <h1>MyTinerary </h1>
          </div>
    
  );
};

export default Videos;

import React from 'react';
import "../index";
import Video from "../Components//asset/Sunrise30850.mp4";

export default function Cities() {
  return (
    <div className="container-fluid" id="hero">
      <div className="row">
        <div className="WelcomeMessage">
        
        </div>
        
          <div className="VideoFather">
          <video 
          className="Video"
            src={Video}
            autoPlay
            loop
            muted
            type="video/mp4"
            />
            </div>
        </div>
        </div>
        

         
           
     
  );
}

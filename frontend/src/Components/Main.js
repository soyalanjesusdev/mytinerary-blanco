import react from "react";
import Carrusel from "./MultipleRows";
import VideoII from "./VideoII";

export default class Main extends react.Component {
  render() {
    return (
      <div className="main">
        <Carrusel />
        <VideoII />
      </div>
    );
  }
}

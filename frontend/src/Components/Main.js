import react from 'react';
import Carrusel from './MultipleRows';
import Video from "../Components/Video"

export default class Main extends react.Component {
  render() {
    return (
      <div className="main">
        <Carrusel/> 
        <Video/>
        </div>
        );
    }
}
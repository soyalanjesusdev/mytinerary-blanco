import "../index";
import wallpaperbetter from "../components/wallpaperbetter.jpg";

export default function Cities() {
  return (
    <div className="container-fluid" id="hero">
      <div className="row">
        <div className="WelcomeMessage">
          <h1>Welcome to the best place to find your perfect wallpaper!</h1>
          <p> We have a wide range of wallpaper for you to choose from. </p>
        </div>
        <div className="wallpaperbetterFather">
          <img
            className="wallpaperbetter"
            src={wallpaperbetter}
            alt="wallpaperbetter"
          />
        </div>
      </div>
    </div>
  );
}

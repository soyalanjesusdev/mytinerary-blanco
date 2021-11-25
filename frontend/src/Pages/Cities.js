import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Video from "../components/Video"
import TarjetaCiudad from "../components/TarjetaCiudad"  


/* import Find from "../components/Find"
import Ciudad from "../components/Citie" */


function Cities() {

 
      
      return (
        <div className="contenedor">
          <Header />
          <Navbar />
          <Video />
       

         <TarjetaCiudad />

         
        
          <Footer />
        </div>
      );
    }
  

    export default Cities;



   

import Home from "./pages/Home";
import Cities from "./pages/Cities";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import City from "./pages/City";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App () {
  
    return (
      <BrowserRouter>
      <ToastContainer autoClose={4000}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/city/:id" element={<City />} />
          <Route path="/signup" element={<SignUpPage />} />
           <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    );
  }


export default App;

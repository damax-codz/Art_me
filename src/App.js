
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import './App.css';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Gallery from "./pages/Gallery/Gallery";
import Footer from './components/footer/footer';
import Signup from './components/form/singnup';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
     
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="Artme/" element={<Home />} />
      <Route path="Artme/gallery" element={<Gallery />} />
      <Route path="Artme/home" element={<Home />} />
      <Route path="Artme/signup" element={<Signup />} />
    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>
     
    </div>
    
  );
}

export default App;
 
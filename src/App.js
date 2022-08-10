import logo from './logo.svg';

import { BrowserRouter, Routes, Route,Outlet } from "react-router-dom";

import './App.css';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Gallery from "./components/Gallery/Gallery";
import Footer from './components/footer/footer';
import Signup from './components/form/singnup';
import reportWebVitals from './reportWebVitals';
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
    <Footer />
  </BrowserRouter>
     
    </div>
    
  );
}

export default App;
 
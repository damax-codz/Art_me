
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import './App.css';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Gallery from "./pages/Gallery/Gallery";
import Signup from './components/form/singnup';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
     
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="Art_me/" element={<Home />} />
      <Route path="Art_me/gallery" element={<Gallery />} />
      <Route path="Art_me/home" element={<Home />} />
      <Route path="Art_me/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
     
    </div>
    
  );
}

export default App;
 
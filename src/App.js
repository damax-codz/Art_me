
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import Gallery from "./pages/Gallery/Gallery";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./pages/Auth/Signup/Signup";
import Login from "./pages/Auth/Login/Login";



function App() {
  return (
    <div className="App">
     
  <BrowserRouter>
    <Routes>
      <Route path="Art_me/" element={<Home />} />
      <Route path="Art_me/gallery" element={<Gallery />} />
      <Route path="Art_me/home" element={<Home />} />
      <Route path="Art_me/signup" element={<Signup />} />
      <Route path="Art_me/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
     
    </div>
    
  );
}

export default App;
 
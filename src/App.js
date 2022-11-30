import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/Auth/Signup/Signup";
import Login from "./pages/Auth/Login/Login";
import { useSelector } from "react-redux";
import Protected from "./components/Protected/Protected";
import Profile from "./pages/Profile/Profile";

function App() {
  const { logvalue } = useSelector((state) => state.logged);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="Art_me/" element={<Home />} />

          <Route
            path="Art_me/gallery"
            element={
              <Protected isLoggedIn={logvalue}>
                {" "}
                <Gallery />{" "}
              </Protected>
            }
          />

          <Route path="Art_me/home" element={<Home />} />
          <Route path="Art_me/signup" element={<Signup />} />
          <Route path="Art_me/login" element={<Login />} />
          <Route path="Art_me/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

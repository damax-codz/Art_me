import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/Auth/Signup/Signup";
import Login from "./pages/Auth/Login/Login";
import { useSelector } from "react-redux";
import MainPage from "./pages/MainPage/MainPage";
import Profile from "./pages/MainPage/Profile/Profile";
import MainHome from "./pages/MainPage/MainHome/MainHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="Art_me/" element={<Home />} />

          <Route
            path="Art_me/gallery"
            element={
              // <Protected isLoggedIn={logvalue}>
              // {" "}
              <Gallery />
              // </Protected>
            }
          />

          <Route path="Art_me/home" element={<Home />} />
          <Route path="Art_me/signup" element={<Signup />} />
          <Route path="Art_me/login" element={<Login />} />
          <Route path="Art_me/homepage" element={<MainPage />}>
            <Route
              index
              path="/Art_me/homepage/profile"
              element={<Profile />}
            ></Route>
            <Route
              index
              path="/Art_me/homepage/home"
              element={<MainHome />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

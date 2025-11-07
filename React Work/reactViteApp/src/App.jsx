import "./App.css";
import Login from "./pages/Login";
// e.g. in src/main.jsx or src/App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from "./components/Gallery";
import ImageManipulation from "./components/ImageManipulation";
import StateHandling from "./components/StateHandling";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      {/* <h1 className="head">Welcome to React</h1> */}
      {/* <h2 className="profile-head">Profile Page</h2>

      <Gallery />
      <StateHandling /> */}
      {/* <ImageManipulation /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Gallery />} />
          <Route path="/state" element={<StateHandling />} />
          <Route path="/image" element={<ImageManipulation />} /> */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

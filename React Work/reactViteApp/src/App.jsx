import "./App.css";
import Login from "./pages/Login";
// e.g. in src/main.jsx or src/App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from "./components/Gallery";
import ImageManipulation from "./components/ImageManipulation";
import StateHandling from "./components/StateHandling";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import MainLayout from "./pages/MainLayout";
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
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<MainLayout/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

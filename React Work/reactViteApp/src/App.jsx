import "./App.css";
import Gallery from "./components/Gallery";
import StateHandling from "./components/StateHandling";
function App() {
  return (
    <>
      <h1 className="head">Welcome to React</h1>
      <h2 className="profile-head">Profile Page</h2>

      <Gallery />
      <StateHandling />
    </>
  );
}

export default App;

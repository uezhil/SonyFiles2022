import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Nav from "./Common/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Contact />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/AppBar";
import Projects from "./pages/Projects";
import About from "./pages/About";
// import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Timeline" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          {/* <Route path="/Contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

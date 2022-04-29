// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import FirstPage from "./FirstPage";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        {/* <Navbar />
        <FirstPage />
        <Footer /> */}
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<FirstPage />} />
          </Routes>
          <Routes>
            <Route path="/About" element={<About />} />
          </Routes>
          <Routes>
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;

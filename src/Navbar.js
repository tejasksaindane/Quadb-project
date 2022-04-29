import React, { useState } from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="Navbar">
      <div className="rightSide">
        <h1> The Movie App</h1>
      </div>
      <div className="leftSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="Contact">Contact</Link>
        </div>
        <i
          class="fa fa-bars"
          aria-hidden="true"
          onClick={() => setShowLinks(!showLinks)}
        ></i>
        {/* <button onClick={() => setShowLinks(!showLinks)}>Open</button> */}
      </div>
    </div>
  );
};

export default Navbar;

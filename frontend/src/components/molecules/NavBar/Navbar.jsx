import React from "react";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import BotonToggle from "../../atoms/DarkButton/DarkButton";
import BurguerButton from "../../atoms/BurguerButton/BurguerButton";
import "../NavBar/Navbar.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    //cuando esta true lo pasa a false y viceversa
    setClicked(!clicked);
  };
  return (
    <>
      
        <nav className={`nav-bar ${clicked ? "active" : ""}`}>
          <ul>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/course">Courses</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
            
           
          </ul>
        </nav>
        <div className="burguer-nav">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
    </>
  );
}

export default Navbar;


  

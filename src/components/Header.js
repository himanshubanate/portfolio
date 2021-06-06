import { faInfo } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Typed from 'react-typed';
const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Hello</h1>
        <Typed
            className="typed-text"
            strings={["HIm" ,"tej","ans"]}
            typeSpeed={40}
            backSpeed={60}
            loop
        />
       
        <button type="button" class="btn btn-primary btn-lg">Large button</button>
        
      </div>
    </div>
  );
};
export default Header;
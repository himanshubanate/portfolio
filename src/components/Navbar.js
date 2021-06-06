import React from 'react'
import logo from '../logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons"
const Navbar=()=>{
return(
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">
    <a className="navbar-brand" href="#">Brand</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <FontAwesomeIcon icon={faBars}/>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav active">

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" href="#">About Me</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" href="#">Contact Me</a>
        </li>

      </ul>
    </div>

  </div>
</nav>
)

}
export default Navbar;
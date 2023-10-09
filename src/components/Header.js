import React, { Component } from 'react';
import {Link} from "react-router-dom";
import logo from '../assets/logo.png';
import '../stylesheets/Header.css'
export class Header extends Component {
  render() {
    return(
    <div>
         <Link to ="/"><img src={logo} alt="icon" /></Link>
        
    </div>
    )
  }
}
export default Header;
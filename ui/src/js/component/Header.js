import React, { Component } from "react";
 import {
  Route,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";

class Header extends Component {
  render() {
  	return (
		<div>
		<h1>HEADER</h1>
	    <NavLink to="/simon">Home</NavLink>
	    <NavLink to="/pizza">Pizza</NavLink>
	    </div>
  	);
  }
}
 
export default Header;
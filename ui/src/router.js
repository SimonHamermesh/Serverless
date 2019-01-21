import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router
} from "react-router-dom";

import Simon from "./js/feature/simon/Simon";
import Pizza from "./js/feature/pizza/Pizza";


class AppRouter extends Component {
	
	render() {
		return(
			<div>
		    	<Route path="/simon" component={Simon}/>
		    	<Route path="/pizza" component={Pizza}/>	
	    	</div>
    	);		
	}
}

export default AppRouter;
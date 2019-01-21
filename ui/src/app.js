import React, { Component } from 'react';
import {
  Route,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";

import Header from "./js/component/Header";
import AppRouter from "./router";
import Footer from "./js/component/Footer";



class App extends Component {
	
	render() {
		return(
		<Router>
			<div>
				<div className="main-header">
					<Header />
				</div>
			
		        <div className="main-content">
		        	<AppRouter />
		        </div>
		    

		        <div className="main-footer">
		        	<Footer />
				</div>
			</div>	
		</Router>
    	);		
	}
}

export default App;
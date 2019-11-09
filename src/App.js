import React from 'react';
import './App.scss';
import './assets/fontawesome/scss/fontawesome.scss';
import './assets/fontawesome/scss/regular.scss';
import './assets/fontawesome/scss/solid.scss';
import './assets/bootstrap/scss/bootstrap.scss';
import './assets/bootstrap/theme/sb-admin-2.scss';

import {
	BrowserRouter as Router,
	Route,
  } from "react-router-dom";

import Expense from './components/expense';
import Navbar from './components/navbar';

function App() {
  	return (
		  
		<Router>
			<Navbar />

			<Route exact path="/e">
				<div className="container p-4">
					<h2>All Expense</h2>
				</div>
			</Route>

			<Route path="/e/:expenseID" >
				<Expense />
			</Route>
		</Router>
	);
}

export default App;

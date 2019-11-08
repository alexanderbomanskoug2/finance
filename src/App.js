import React from 'react';
import './App.scss';
import './assets/fontawesome/scss/fontawesome.scss';
import './assets/fontawesome/scss/regular.scss';
import './assets/bootstrap/scss/bootstrap.scss';
import './assets/bootstrap/theme/sb-admin-2.scss';

import Expense from './components/expense';
import Navbar from './components/navbar';
import AddExpense from './components/add_expense';

var expenses = [
	{
		name: 'IF Car insurance',
		tags: ['insurance','car'],
		cost: 587,
		occurrence: 'Weekly'
	},
	{
		name: 'IF Car insurance',
		tags: ['insurance','car','insurance','car'],
		cost: 587,
		occurrence: 'Weekly'
	},
	{
		name: 'IF Car insurance',
		tags: ['insurance','car'],
		cost: 587,
		occurrence: 'Weekly'
	},
]

function App() {
  	return (
		<React.Fragment>
			<Navbar />
			<div className="container p-4">
				<div className="w-100 d-flex align-items-center justify-content-between mb-2">
					<h2 className="float-left">Expenses</h2>
					<button type="button" className="btn btn-outline-primary align-self-bottom" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Add Expense</button>
				</div>

				<AddExpense/>

				<Expense name='IF Car insurance' tags={['insurance','car']} cost={587} occurrence='Weekly'/>
				{expenses.map((expense, key) =>
                        <Expense name={expense.name} tags={expense.tags} cost={expense.cost} occurrence={expense.occurrence}/>
				)}
			</div>
		</React.Fragment>
	);
}

export default App;

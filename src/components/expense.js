import React from 'react';
import Cost from './cost';
import Tag from './tag';
import AddExpense from './add_expense';

import {
	useParams
} from "react-router-dom";

var parent = {
	name: 'IF Car insurance',
	tags: ['insurance','car'],
	cost: 587,
	occurrence: 'Weekly'
}

var costs = [
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

export default function Expense() {
	// We can use the `useParams` hook here to access
	// the dynamic pieces of the URL.
	let { expenseID } = useParams();
  
	return (
		<div className="container p-4">
			<div className="w-100 d-flex align-items-center justify-content-between mb-2">
				<h2 className="float-left">{expenseID}</h2>
				<button type="button" className="btn btn-outline-primary align-self-bottom" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Add Expense</button>
			</div>

			<AddExpense/>

			<div className="w-100 border border-left-2 border-left-primary rounded p-1 row mb-2 bg-white mx-0">
				<div className="col-12 col-md-9 d-flex align-items-center pb-2 px-2 pb-md-0">
					<p className="mb-0 float-left text-uppercase">{parent.name}</p>

                    <div className="d-flex flex-wrap justify-content-end">
                        {parent.tags.map((item, key) =>
                            <Tag name={item} key={key}/>
                        )}
                    </div>
                    
				</div>

				<div className="col-12 col-md-3 px-2 d-flex align-items-center justify-content-end">
					<button type="button" className="btn text-primary"><i className="far fa-edit"></i></button>
					<button type="button" className="btn text-danger"><i className="far fa-trash-alt"></i></button>
				</div>
      		</div>
		
			{costs.map((expense, key) =>
				<Cost name={expense.name} tags={expense.tags} cost={expense.cost} occurrence={expense.occurrence} key={key}/>
			)}
		</div>
	)
  }
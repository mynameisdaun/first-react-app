import React, {useState} from 'react';
import './ExpenseForm.css';
//how can we pass the data from bottom to up!

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	}

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	}

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	}

	const submitHandler = (event) => {
		event.preventDefault(); // built - in
		const expenseDate = {
			title:enteredTitle,
			amount:enteredAmount,
			date:enteredDate
		};
		props.onSavedExpenseData(expenseDate);
	}

	return(
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input type='number' min ='0.01' step = '0.01' value={enteredAmount} onChange={amountChangeHandler}/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input type='date' min='2022-01-01' max='2023-12-31' value = {enteredDate} onChange={dateChangeHandler}/>
				</div>
			</div>
			<div>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
}

export default ExpenseForm
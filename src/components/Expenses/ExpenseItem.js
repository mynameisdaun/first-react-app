//component in react is just a function... that returns html code!
import React, {useState} from 'react';

import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) { // react use just only '1' argument
	const [title, setTitle] = useState(props.title);
	// first element is value, second element is update function

	const clickHandler = () => {
		setTitle('Updated!')
		console.log('title is updated to ' + title);
	};

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date}></ExpenseDate>
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">{props.amount}</div>
				<button onClick={clickHandler}>update title!</button>
			</div>
		</Card>
	);
}

export default ExpenseItem;
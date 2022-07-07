//component in react is just a function... that returns html code!
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) { // react use just only '1' argument
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date}></ExpenseDate>
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">{props.amount}</div>
			</div>
		</Card>
	);
}

export default ExpenseItem;
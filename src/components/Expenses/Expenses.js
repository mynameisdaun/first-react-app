import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card"
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";

function Expenses(props) {
	const [selectedYear, setSelectedYear] = useState('2022');

	const filteredExpense = props.items.filter(expense => expense.date.getFullYear().toString() === selectedYear)
										.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)
	const expenseContent = filteredExpense.length === 0 ? <p>Expense Not Found</p> : filteredExpense

	const selectFilterHandler = (value) => { setSelectedYear(value);}

	return (
		<div>
			<Card className="expenses">
			<ExpenseFilter selected={selectedYear} onChangeFilter={selectFilterHandler} />
			{ expenseContent }
			</Card>
		</div>
	);
}

export default Expenses
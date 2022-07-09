import React from 'react';
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card"
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpenseList from "./ExpenseList";

function Expenses(props) {
	const [selectedYear, setSelectedYear] = useState('2022');

	const selectFilterHandler = (value) => { setSelectedYear(value);}
	const filteredExpense = props.items.filter(expense => {
		if (typeof expense === 'string') {
			expense.date = new Date(expense);
		}
		return expense.date.getFullYear().toString()===selectedYear;
	})

	return (
		<div>
			<Card className="expenses">
			<ExpenseFilter selected = {selectedYear} onChangeFilter = {selectFilterHandler} />
			<ExpenseList items={filteredExpense} selectedYear = {selectedYear}/>
			</Card>
		</div>
	);
}

export default Expenses
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
	{
		id : 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date : new Date(2021, 7, 7)
	},
	{
		id : 'e2',
		title: 'Car Insurance',
		amount: 294.67,
		date : new Date(2021, 6, 7)
	},
	{
		id : 'e3',
		title: 'Coffee',
		amount: 300.122,
		date : new Date(2022, 5, 7)
	},
	{
		id : 'e4',
		title: 'Bread',
		amount: 600,
		date : new Date(2022, 4, 7)
	}
]

function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = expense => {
		setExpenses(prev => [expense,...prev] )
	}

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}
export default App;

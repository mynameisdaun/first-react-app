import './App.css';
import ExpenseItem from "./components/ExpenseItem";

function App() {
	const expenses = [
		{
			id : 'e1',
			title: 'Toilet Paper',
			amount: 94.12,
			date : new Date(2020, 7, 7)
		},
		{
			id : 'e2',
			title: 'Car Insurance',
			amount: 294.67,
			date : new Date(2020, 6, 7)
		},
		{
			id : 'e3',
			title: 'Coffee',
			amount: 300.122,
			date : new Date(2020, 5, 7)
		},
		{
			id : 'e4',
			title: 'Bread',
			amount: 600,
			date : new Date(2020, 4, 7)
		}
	]
  return (
    <div className="App">
      <h2>Let`s get started!</h2>
	    <ExpenseItem
		    title={expenses[0].title}
		    amount={expenses[0].amount }
		    date = {expenses[0].date}>
	    </ExpenseItem>
	    <ExpenseItem
		    title={expenses[1].title}
		    amount={expenses[1].amount }
		    date = {expenses[1].date}>
	    </ExpenseItem>
	    <ExpenseItem
		    title={expenses[2].title}
		    amount={expenses[2].amount }
		    date = {expenses[2].date}>
	    </ExpenseItem>
	    <ExpenseItem
		    title={expenses[3].title}
		    amount={expenses[3].amount }
		    date = {expenses[3].date}>
	    </ExpenseItem>
    </div>
  );
}

export default App;

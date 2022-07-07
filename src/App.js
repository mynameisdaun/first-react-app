import './App.css';
import Expenses from "./components/Expenses/Expenses";

function App() {
	const expenses = [
		{
			id : 'e1',
			title: 'Toilet Paper',
			amount: 94.12,
			date : new Date(2022, 7, 7)
		},
		{
			id : 'e2',
			title: 'Car Insurance',
			amount: 294.67,
			date : new Date(2022, 6, 7)
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
  return (
    <div className="App">
      <Expenses expenses={expenses}/>
    </div>
  );
}
export default App;

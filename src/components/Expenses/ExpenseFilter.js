import React from 'react';

const ExpenseFilter = (props) => {

	const dropdownChangeHandler = (event) => {
		props.onChangeFilter(event.target.value);
	}

	return (
		<div className="expenses-filter">
			<div className='expenses-filter__control'>
				<label>Filter by year</label>
				<select className="expenses-filter__control" value = {props.selected} onChange={dropdownChangeHandler} name="filter">
					<option value="2019">2019</option>
					<option value="2020">2020</option>
					<option value="2021">2021</option>
					<option value="2022">2022</option>
				</select>
			</div>
		</div>
	);
}

export default ExpenseFilter
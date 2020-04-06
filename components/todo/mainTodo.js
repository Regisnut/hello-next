import React, { useState, useEffect } from 'react';
import TodoList from './todoList';
import InputTodo from './inputTodo';

export default function Search() {
	//initial TODO LIST "array of object"
	const init = [
		{
			message: 'coding from monday to sunday',
			crossed: false
		},
		{
			message: 'search a amazing job',
			crossed: true
		}
	];

	// the state with all my TODO items
	const [ state, setState ] = useState(init);
	// state from the input
	const [ value, setValue ] = useState('');

	//function to update the input state
	const handleChange = (event) => {
		setValue(event.target.value);
	};
	//submit to have a new input
	const handleSubmit = (event) => {
		event.preventDefault();
		if (value) {
			setState([ ...state, { message: value, crossed: false } ]);
			return setValue('');
		} else {
			return null;
		}
	};
	//function to toggle the cross
	const toggleCross = (index) => {
		let copyState = [ ...state ];
		let crossStatus = copyState[index].crossed;
		copyState[index].crossed = !crossStatus;
		setState(copyState);
	};
	//function to remove the input
	const deleteItem = (index) => {
		let newState = state.filter((el) => el !== state[index]);
		setState(newState);
	};
	return (
		<div>
			<h2>LIST :</h2>
			<TodoList state={state} toggleCross={toggleCross} deleteItem={deleteItem} />
			<InputTodo value={value} state={state} handleSubmit={handleSubmit} handleChange={handleChange} />
		</div>
	);
}

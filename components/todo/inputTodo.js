import React from 'react';

const InputTodo = (props) => {
	return (
		<fieldset>
			<form onSubmit={props.handleSubmit}>
				<label>
					<h4>Insert a new todo task</h4>
				</label>
				<div>
					<input
						name="todo"
						placeholder="add a new todo"
						type="text"
						value={props.value}
						onChange={props.handleChange}
					/>
					<button className="buttonTodo">ENVOYER</button>
				</div>
			</form>
		</fieldset>
	);
};

export default InputTodo;

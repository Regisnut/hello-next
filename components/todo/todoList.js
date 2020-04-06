import React from 'react';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const TodoList = (props) => {
	return (
		<div className="todoContainer">
			{props.state &&
				props.state.map((item, index) => {
					return (
						<div className="list" key={index}>
							<DeleteForeverOutlinedIcon
								onClick={() => {
									props.deleteItem(index);
								}}
								fontSize="large"
								className="iconDelete"
							/>

							<span
								onClick={() => {
									props.toggleCross(index);
								}}
								className={item.crossed ? 'crossed' : ''}
							>
								{item.message}
							</span>
						</div>
					);
				})}
		</div>
	);
};
export default TodoList;

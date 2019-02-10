import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doneItem, undoneItem } from '../actions/index';
import './TodoList.css';


const mapStateToProps = state => {
	return {
		items: state.items
	};
};

function mapDispatchToProps (dispatch) {
	return {
		doneItem: item => dispatch(doneItem(item)),
		undoneItem: item => dispatch(undoneItem(item)),
	};
}

class ConnectedTodoList extends Component {

	constructor () {
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange (event) {
		const item = this.props.items.find(item => item.id === event.target.id);
		if (item.is_done) {
			this.props.undoneItem(item.id);
		} else {
			this.props.doneItem(item.id);
		}
	}

	render () {
		return (
			<ul id="component-todo-list" className="list-group">
				{ this.props.items.map(item => (
					<div className={ (item.is_done ? 'done' : '') + " form-check list-group-item p-0"} key={item.id}>
						<input type="checkbox" id={item.id} className="ml-3" checked={item.is_done} onChange={this.handleChange} />
						<label htmlFor={item.id} className="mb-0 p-3 pl-1">{ item.text }</label>
					</div>
				)) }
			</ul>
		);
	}

}

const TodoList = connect(mapStateToProps,mapDispatchToProps)(ConnectedTodoList);

export default TodoList;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/index.js';

function mapDispatchToProps (dispatch) {
	return {
		addItem: item => dispatch(addItem(item)),
	};
}

class ConnectedCreateTodo extends Component {
	constructor () {
		super();
		this.state = {
			newItemText: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit (event) {
		event.preventDefault();
		this.props.addItem(this.state.newItemText);
		this.setState({
			newItemText: '',
		});
	}

	handleChange (event) {
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	render () {
		return (
			<form className="mb-4" onSubmit={this.handleSubmit}>
				<input className="form-control" id="newItemText" placeholder="Add new todo item.." value={this.state.newItemText} onChange={this.handleChange} />
			</form>
		);
	}

}

const CreateTodo = connect(null,mapDispatchToProps)(ConnectedCreateTodo);

export default CreateTodo;

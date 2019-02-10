import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
	  	<header className="text-center mb-4">
			<img className="App-logo" src={logo} height="150" /> <br/>
			<h3>React &amp; Redux Todo App</h3>
			<p className="lead">Demonstration by @ariadhanang</p>
		</header>
	  	<CreateTodo />
        <TodoList />
      </Provider>
    );
  }
}

export default App;

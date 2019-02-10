import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './store/index';
import { addItem, removeItem, doneItem, undoneItem } from './actions/index';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

window.store = store;
window.addItem = addItem;
window.removeItem = removeItem;
window.doneItem = doneItem;
window.undoneItem = undoneItem;

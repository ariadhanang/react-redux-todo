import { ADD_ITEM, REMOVE_ITEM, DONE_ITEM, UNDONE_ITEM } from '../constants/index';

const initialState = {
	items: []
};

function rootReducer (state = initialState, action) {

	if (action.type === ADD_ITEM) {
		return Object.assign({}, state, {
			items: state.items.concat(action.payload)
		});
	}

	else if (action.type === REMOVE_ITEM) {
		return Object.assign({}, state, {
			items: state.items.filter(item => item.id !== action.payload)
		});
	}

	else if (action.type === DONE_ITEM) {
		return Object.assign({}, state, {
			items: state.items.map(item => {
				if (item.id === action.payload) {
					return Object.assign({}, item, { is_done: true });
				}
				return item;
			})
		});
	}

	else if (action.type === UNDONE_ITEM) {
		return Object.assign({}, state, {
			items: state.items.map(item => {
				if (item.id === action.payload) {
					return Object.assign({}, item, { is_done: false });
				}
				return item;
			})
		});
	}

	return state;
}

export default rootReducer;

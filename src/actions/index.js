import { ADD_ITEM, REMOVE_ITEM, DONE_ITEM, UNDONE_ITEM } from '../constants/index';
import uuid from 'uuid';

export function addItem(payload) {
	return {
		type	: ADD_ITEM,
		payload	: {
			id		: uuid(),
			is_done	: false,
			text	: payload
		}
	};
}

export function removeItem(id) {
	return { type: REMOVE_ITEM, payload: id }
}

export function doneItem(id) {
	return { type: DONE_ITEM, payload: id }
}

export function undoneItem(id) {
	return { type: UNDONE_ITEM, payload: id }
}

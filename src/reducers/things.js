import {DO_THING} from '../actions';

export default function things(state = 1, action) {
	switch (action.type) {
		case DO_THING:
			return state + 1;
		default:
			return state;
	}
}

import {combineReducers} from 'redux';
import {routerStateReducer} from 'redux-router';

// Reducers
import things from './things';

export default combineReducers({
	router: routerStateReducer,
	things
});

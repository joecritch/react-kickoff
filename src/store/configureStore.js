import {createStore, compose, applyMiddleware} from 'redux';
import {persistState} from 'redux-devtools';
import {reduxReactRouter} from 'redux-router';
import {createHistory} from 'history';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import thunk from 'redux-thunk';

const finalCreateStore = compose(
	applyMiddleware(thunk),
	reduxReactRouter({createHistory}),
	DevTools.instrument(),
	persistState(
		window.location.href.match(
			/[?&]debug_session=([^&]+)\b/
		)
	)
)(createStore);

export default function configureStore(initialState) {
	const store = finalCreateStore(rootReducer, initialState);

	if (module.hot) {
		module.hot.accept('../reducers', () =>
			store.replaceReducer(require('../reducers/index').default)
		);
	}

	return store;
}

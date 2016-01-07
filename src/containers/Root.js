import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {ReduxRouter} from 'redux-router';
import {Route, IndexRoute} from 'react-router';
import ThingContainer from './ThingContainer';
import DevTools from './DevTools';

export default class Root extends Component {
	render() {
		const {store} = this.props;
		return (
			<Provider store={store}>
				<div>
					<ReduxRouter>
						<Route path="/">
							<IndexRoute component={ThingContainer} />
							<Route path="thing" component={ThingContainer} />
						</Route>
					</ReduxRouter>
					<DevTools />
				</div>
			</Provider>
		);
	}
}

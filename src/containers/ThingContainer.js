import {connect} from 'react-redux';
import {pushState} from 'redux-router';
import ThingUI from '../components/ThingUI';
import {doThing} from '../actions';

function mapStateToProps(state) {
	return {
		things: state.things
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onClick: (e) => {
			dispatch(doThing());
			dispatch(pushState(null, `/thing`));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ThingUI);

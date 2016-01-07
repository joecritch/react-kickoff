export const DO_THING = 'DO_THING';

export function doThing() {
	return {
		type: DO_THING
	};
}

/*
(ASYNC ACTION EXAMPLE)
export function doMultipleThings() {
	return dispatch => {
		for (let i = 0; i < 3; i++) {
			dispatch(doThing());
		}
	};
}
*/

import React from 'react';

export default class ThingUI extends React.Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}
	onClick(e) {
		e.preventDefault();
		this.props.onClick();
	}
	render() {
		return (
			<div>
				<a href="#" onClick={this.onClick} style={{
					fontSize: Number(this.props.things) * 10
				}}>
					Do the thing
				</a>
			</div>
		);
	}
}

import React from 'react';
import * as rmd from 'react-mdl';

class CarMakers extends React.Component {
	constructor(props) {
    	super(props);
    	this.handleClick = this.handleClick.bind(this);
	};
	state = {};
	handleClick() {};
	render() {
		let {title, handler} = this.props;
    	return (
    	<rmd.Button ripple onClick={handler}> 
			{ title }
    	</rmd.Button>
    	);
	}
};

export default CarMakers;
import React from 'react';
import './App.css';
import CarMakers from './CarMakersComponent';
import Country from './CountryComponent';
import * as rmd from 'react-mdl';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.menuHandleClick = this.menuHandleClick.bind(this);
	};
	state = {
		active_country: '',
		active_maker: ''
	};
	handleClick(name) {
		this.setState({
			active_country: name
		})
	};
	menuHandleClick(maker) {
		this.setState({
			active_maker: maker
		})
	};
	render() {
		let {countries, info} = this.props;
		let {active_country, active_maker} = this.state;
		let activeCountry = active_country;
		let activeCountryObject = countries.filter(maker => maker.name === activeCountry)[0];
		let activeCountryMakers = activeCountryObject ? activeCountryObject.makers : [];
		let activeCarMaker = active_maker;
		let activeMakers = activeCarMaker ? info[activeCarMaker] : [];
		return (
			<div>
				<div style={{height: '300px', position: 'relative'}}>
					<rmd.Layout fixedHeader>
						<rmd.Header title={<span><span style={{ color: '#ddd' }}>All about</span><strong> Car</strong></span>}>
							<rmd.Navigation>
									{countries.map(country =>
										(
											<Country handler={this.handleClick.bind(this, country.name)} title={country.name} />
										)
									)}
							</rmd.Navigation>	
						</rmd.Header>
						<rmd.Drawer title="Menu">
							<rmd.Navigation>
									{activeCountryMakers.map(active =>
			   							(
											<CarMakers handler={this.menuHandleClick.bind(this, active)} title={active} />
										)
									)}
							</rmd.Navigation>
						</rmd.Drawer>
						<rmd.Content style={{margin: '10px'}}>
								{activeMakers.map(active =>
									(
										<div>
											{active}
										</div>
									)
								)}
						</rmd.Content>
					</rmd.Layout>
				</div>
			</div>
		)
	  }
};

export default App;

import React from 'react';
import CarMakers from './CarMakersComponent';
import Country from './CountryComponent';
import * as rmd from 'react-mdl';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active_country: '',
			active_maker: ''
		}
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
		let makerInfo = activeCarMaker ? info[activeCarMaker] : {};
		return (
			<div>
				<div>
					<rmd.Layout fixedHeader>
						<rmd.Header title={<span><span style={{ color: '#ddd' }}>All about</span><strong> Cars</strong></span>}>
							<rmd.Navigation>
									{countries.map(country =>
										(
											<Country handler={this.handleClick.bind(this, country.name)} title={country.name} key={country.name} />
										)
									)}
							</rmd.Navigation>	
						</rmd.Header>
						<rmd.Drawer title="Menu">
							<rmd.Navigation>
									{activeCountryMakers.map(maker =>
			   							(
											<CarMakers handler={this.menuHandleClick.bind(this, maker)} title={maker} key={maker} />
										)
									)}
							</rmd.Navigation>
						</rmd.Drawer>
						<rmd.Content style={{margin: '10px'}}>
								<div>
									<img src={makerInfo.imgUrl} />
									<div>{makerInfo.text}</div>
								</div>
						</rmd.Content>
					</rmd.Layout>
				</div>
			</div>
		)
	  }
};

export default App;

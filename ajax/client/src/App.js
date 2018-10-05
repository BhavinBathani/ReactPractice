import './index.css';
import React, { Component } from 'react';
import './App.css';
import CountryCombo from './AddressComponent/CountryCombo.js';
import StateCombo from './AddressComponent/StateCombo.js';
import CityCombo from './AddressComponent/CityCombo.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: '',
      states: '',
      cities: '',
      selectedCountry: '',
      selectedState:'',
      selectedCity:''
    };

    this.callApi = this.callApi.bind(this);
    this.handleCountrySelectionChange = this.handleCountrySelectionChange.bind(this);
    this.handleStateSelectionChange = this.handleStateSelectionChange.bind(this);
    this.handleCitySelectionChange = this.handleCitySelectionChange.bind(this);
  }

  handleCountrySelectionChange(value) {
    this.setState({selectedCountry : value}, this.callApi.bind(this, 'state'));
  }

  handleStateSelectionChange(value) {
    this.setState({selectedState : value}, this.callApi.bind(this, 'city'));
  }

  handleCitySelectionChange(value) {
    this.setState({selectedCity : value}, this.displayOutput);
  }

  displayOutput(){
    
  }

  componentWillMount() {
    this.callApi();
  }

  callApi(requestFor, selectedCountry, selectedState) {
    requestFor = requestFor || '';
    if (this.state.countries === '' && requestFor === '' ) {
      fetch('/api/country').then(response => response.json().then(parsedResponse => this.setState({countries : parsedResponse}))).catch(err => console.log(err));
    } else if (requestFor === 'state') {
      let url = '/api/' + this.state.selectedCountry + '/state';
      fetch(url).then(response => response.json().then(parsedResponse => this.setState({states : parsedResponse}))).catch(err => console.log(err));
    } else if (requestFor === 'city') {
      let url = '/api/' + this.state.selectedCountry + '/' + this.state.selectedState + '/city';
      fetch(url).then(response => response.json().then(parsedResponse => this.setState({cities : parsedResponse}))).catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="main-container">
        <h1>Select your address</h1>
        <CountryCombo countryDetails = {this.state.countries} callApi = {this.callApi} handleCountrySelectionChange = {this.handleCountrySelectionChange}/>
        <StateCombo stateDetails = {this.state.states} callApi = {this.callApi} handleStateSelectionChange = {this.handleStateSelectionChange}/>
        <CityCombo cityDetails = {this.state.cities} handleCitySelectionChange = {this.handleCitySelectionChange}/>
      </div>
    );
  }
}

export default App;

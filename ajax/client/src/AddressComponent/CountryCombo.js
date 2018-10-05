import React, { Component } from 'react';

class CountryCombo extends Component {
    constructor(props) {
      super(props);
      this.onSelectChange = this.onSelectChange.bind(this);
    }

    onSelectChange(event) {
        this.props.handleCountrySelectionChange(event.target.value);
      }
  
    render() {
      const liValue = Object.keys(this.props.countryDetails).map(key => <option>{this.props.countryDetails[key]}</option>);
      return (<div><select onChange = {this.onSelectChange}><option selected="selected">Select country</option>{liValue}</select></div>);
    }
  }

  export default CountryCombo;
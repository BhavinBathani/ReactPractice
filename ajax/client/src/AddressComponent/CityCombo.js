import React, { Component } from 'react';

class CityCombo extends Component {
    constructor(props) {
      super(props);
      this.onSelectChange = this.onSelectChange.bind(this);
    }
  
    onSelectChange(event) {
        this.props.handleCitySelectionChange(event.target.value);
    }
  
    render() {
      const liValue = Object.keys(this.props.cityDetails).map(key => <option>{this.props.cityDetails[key]}</option>);
      return (<div><select onChange = {this.onSelectChange}><option selected="selected">Select city</option>{liValue}</select></div>);
    }
  }
  export default CityCombo;
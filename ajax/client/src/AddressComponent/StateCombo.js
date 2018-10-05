import React, { Component } from 'react';

class StateCombo extends Component {
    constructor(props) {
      super(props);
      this.onSelectChange = this.onSelectChange.bind(this);
    }
  
    onSelectChange(event) {
      this.props.handleStateSelectionChange(event.target.value);
    }
  
    render() {
      const liValue = Object.keys(this.props.stateDetails).map(key => <option>{this.props.stateDetails[key]}</option>);
      return (<div><select onChange = {this.onSelectChange}><option selected="selected">Select state</option>{liValue}</select></div>);
    }
  }

  export default StateCombo;
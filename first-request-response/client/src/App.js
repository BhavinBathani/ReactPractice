import React, { Component } from 'react';
import './App.css';

class ItemList extends Component {
  render() {
    const liValue = Object.keys(this.props.userDetails).map(key => <li>{this.props.userDetails[key]}</li>);
    return (<ul>{liValue}</ul>);
  }
}

class App extends Component {
  state = {
    user: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ user: res.user }))
      .catch(err => console.log(err));
  }

  callApi() {
    /*const response = await fetch('/api/hello');
    const body = await response.json();
    */

    const response = fetch('/api/hello').then(response => response.json());

    return response;
  };

  render() {
    return (
      <div>
        <ItemList userDetails = {this.state.user}/>
      </div>
    );
  }
}

export default App;

/** 

import React, { Component } from 'react'
import './App.css'
class App extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.state = {user : "no user data"};
  }

  handleClick () {
    fetch('https://api.github.com/users/BhavinBathani').then(response => response.json().then(data => this.setState({user : data.name})));
  }

  render () {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>Click Me</button>
        <p>{this.state.user}</p>
      </div>
    )
  }
}


*/
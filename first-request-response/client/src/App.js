import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    /*const response = await fetch('/api/hello');
    const body = await response.json();
     if (response.status !== 200) throw Error(body.message);
    */

    const response = fetch('/api/hello').then(response => response.json());
    const body = response.then(response => response);

    return body;
  };

  render() {
    return (
      <div className="App">
        <p className="App-intro">{this.state.response}</p>
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
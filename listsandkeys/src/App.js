import React, { Component } from 'react';
import './App.css';

const numbers = [1, 2, 3, 4, 5];

function ListItem(props) {
  return (
    <li>{props.value}</li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem id={number.toString()} value={number}/>
  );
  return (
    <ul>{listItems}</ul>
  );
}

class App extends Component {
  render() {
    return(<NumberList numbers={numbers} />)
  }
}

export default App;

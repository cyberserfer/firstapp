import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  const Card = (props) => {
  	return (
    	<div style={{margin: '1em'}}>
      	<img width="75" src={props.avatar_url} />
        <div style={{display: 'inline-block', marginleft: 10}}>
        	<div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
          {props.name}
          </div>
        	<div>{props.company}</div>
        </div>
      </div>
    );
  }

let data = [
	{	name: "Paul Buss",
  	avatar_url: "https://avatars2.githubusercontent.com/u/22548275?v=4",
    company: "NM" },
  {	name: "Cary Wolff",
  	avatar_url: "https://avatars3.githubusercontent.com/u/9284960?v=4",
    company: "NotHere" },
];

  const CardList = (props) => {
    return (
        	   {props.cards.map(card => <Card {...card} />)};
    );
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <div>
            <CardList card={data} />
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* var MyInfo = React.createClass({
  getDefaultProps : function() {
    return {
      "name" : "Paul Buss",
      "avatar_url" : "https://avatars2.githubusercontent.com/u/22548275?v=4",
      "company" : "NM"
    }
  }
});
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {name: "Paul Buss"};
    this.state = {avatar_url: 'https://avatars2.githubusercontent.com/u/22548275?v=4'};
    this.state = {company: 'NM'};
  };

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
          <div style={{margin: '1em'}}>
        	  <img width="75" src= {this.props.avatar_url} alt=""/>
            <div style={{display: 'inline-block', marginleft: 10}}>
            	<div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
              {this.props.name}
              </div>
            	<div>{this.props.company}</div>
            </div>
          </div>
      </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// moved the Card outside
const Card = props => {
    return (
        <div style={{ margin: '1em' }}>
            <img width="75px" alt={props.name} src={props.avatar_url} />
            <div style={{ display: 'inline-block', marginleft: 10 }}>
                <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>{props.name}</div>
                <div>{props.company}</div>
            </div>
        </div>
    );
};

//No components inside class
export default class App extends Component {
    state = {
        data: [
            {
                name: 'Paul Buss',
                avatar_url: 'https://avatars2.githubusercontent.com/u/22548275?v=4',
                company: 'Northwestern Mutual'
            },
            {
                name: 'Cary Wolff',
                avatar_url: 'https://avatars3.githubusercontent.com/u/9284960?v=4',
                company: 'Swarming Technology'
            }
        ]
    };
    // CardList is a method on the class
    // moved data to state
    // return calls Card component and then maps the data in
    CardList() {
        const { data } = this.state;
        return data.map(item => <Card avatar_url={item.avatar_url} name={item.name} company={item.company} />);
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
                <div>{this.CardList()}</div>
            </div>
        );
    }
}

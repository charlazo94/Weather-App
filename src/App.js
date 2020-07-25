import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weathers from './codebase/weathers';

const list = [{
    day: 'sun',
    icon: 'png',
    maxTemp: 87,
    minTemp: 62
},
    {
        day: 'mon',
        icon: 'png',
        maxTemp: 128,
        minTemp: 98
    }];

function App() {
    return (
        <div className="App">
            {/*<header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>*/}

                <Weathers list={list}> </Weathers>
        </div>
    );
}

export default App;

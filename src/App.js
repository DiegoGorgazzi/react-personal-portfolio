import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Portfolio from './containers/Portfolio/Portfolio';

class App extends Component {
    render() {
    return (
      <div className="App">

        <Portfolio />

      </div>
    );
  }
}

export default App;

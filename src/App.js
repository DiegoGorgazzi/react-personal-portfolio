import React, { Component } from 'react';
import logo from './logo.svg';
import appStyles from './App.module.css';
import Portfolio from './containers/Portfolio/Portfolio';

class App extends Component {
    render() {
    return (
      <div className={appStyles.App}>

        <Portfolio />

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './components/header';
import Calculator from './components/calculator';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <Header/>
        </div>
        <div className="calculator">
        <Calculator/>
        </div>
      </div>
    );
  }
}

export default App;

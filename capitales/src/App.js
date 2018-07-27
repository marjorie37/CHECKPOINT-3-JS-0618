import React, { Component } from 'react';
import CapitalesList from "./components/CapitalesList"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CapitalesList />
        </header>

      </div>
    );
  }
}

export default App;

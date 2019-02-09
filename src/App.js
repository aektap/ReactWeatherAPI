import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navigation from '../src/Navigation'


class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
      <Navigation />
      <div className="container">
      </div>
      </div>
      <div className="jumbotron">
        <header className="App-header">
          <h1 id="location">Where to?</h1>
          <p id="cloud">Whats the cloud cover like?</p>
          <p id="kp"> Whats the KP index?</p>
          <p id="message">To go, or not go outside? That is the question.</p>
          </header>
          </div>
       
  
        
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navigation from '../src/Navigation'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  getWeather = (lat, long) => {
    let urlYellowknife = 'https://api.auroras.live/v1/?type=all&lat=62.4484&long=-114.42&forecast=false&threeday=false';     
    fetch(urlYellowknife)
      .then(res => res.json()) 
      .then((data) => { 
      auroraData.nameLoc = data.weather.location.name;
      auroraData.kpIndex = data.ace.kp;
      auroraData.cloudCover = data.weather.cloud;
      auroraData.fogCover = data.weather.fog;
      auroraData.probabilityView = data.probability.value;
      console.log(`'Results' ${counter} ${auroraData.nameLoc}
      'kp' ${auroraData.kpIndex}
      'Cloud' ${auroraData.cloudCover}
        'Fog' ${auroraData.fogCover}
        'Probability' ${auroraData.probabilityView}`);
    })
  };

  render() {
    return (
      <div className="App">
      <div>
      <Navigation getWeather={this.getWeather} />
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

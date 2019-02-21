import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navigation from '../src/Navigation'
import backgroundImage from './northernlights.jpg'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //this will be the initial state passed down
      auroraData: {  
        nameLoc: "No Location Selected",
        kpIndex: 'No Data',
        cloudCover: 'No Data',
        fogCover: 'No Data',
        probabilityView: 'No Data',
      
      }
    };
  }

  getWeather = (lat, long) => {
    let url = `https://api.auroras.live/v1/?type=all&lat=${lat}&long=${long}&forecast=false&threeday=false`;   
    let auroraData = {  }

    //let counter = 0;
    fetch(url)
      .then(res => res.json()) 
      .then((data) => { 
      auroraData.nameLoc = data.weather.location.name;
      auroraData.kpIndex = data.ace.kp;
      auroraData.cloudCover = data.weather.cloud;
      auroraData.fogCover = data.weather.fog;
      auroraData.probabilityView = data.probability.value;
     this.setState({
       auroraData
     })
    })
    .catch((error) => {
      console.log("========error", error)
    })
  };

  render() {
    const { auroraData } = this.state
    console.log(backgroundImage)
    return (
      <div style={{backgroundImage: `url(${backgroundImage})`, backgroundPosition: "center", backgroundSize: "cover" }}>
      
      <div>
      <Navigation getWeather={this.getWeather} />
      <div className="container">
      </div>
      </div>
      <div className="jumbotron">
        <header className="App-header">
          <h2>Aurora Weather data for: <b>{auroraData.nameLoc}</b></h2>
          <br></br>
          <p>The cloud cover is currently: <b>  {auroraData.cloudCover} </b>%</p>
          <p> The KP Index is: <b>{auroraData.kpIndex} </b></p>
          <p>The probability of seeing the Aurora is: <b>{auroraData.probabilityView}</b>%</p>
          </header>
          </div>
       
  
        
      </div>
    );
  }
}

export default App;

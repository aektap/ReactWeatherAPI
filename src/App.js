import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap\dist\js\bootstrap.bundle.min.js';
import Navigation from '../src/Navigation'
//import statements above - importing components navigation, react and bootstrap


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //this will be the initial state passed down where there is no data yet available
      
        nameLoc: "No Location Selected",
        kpIndex: 'No Data',
        cloudCover: 'No Data',
        fogCover: 'No Data',
        probabilityView: 'No Data',
      
      
    };
  }
//below we are fetching the data for each location from auroraslive using the latitude and 
//longitude parameters on click in the navigation.js component

  getWeather = (lat, long) => {
    let url = `https://api.auroras.live/v1/?type=all&lat=${lat}&long=${long}&forecast=false&threeday=false`;   

    
    fetch(url)
      .then(res => res.json()) 
      .then((data) => { 
      this.setState.kpIndex = data.ace.kp;
      this.setState.cloudCover = data.weather.cloud;
      this.setState.probabilityView = data.probability.value;
      //we replace our initial state data with the appropriate data from the auroras live api
     this.setState({
     })
     //now we set the state 

    })
    .catch((error) => {
      console.log("error", error)
    })
  };

  render() {

    return (
      
    <div>
      <Navigation getWeather={this.getWeather} />
      <div className="container">
  
      </div>
      <div>
        <header className="App-header">
          <h1>Select a location for the most current Aurora weather data:</h1>
          <h2>The cloud cover is currently: <b>  {this.setState.cloudCover}</b>%</h2> 
          <h2> The KP Index is: <b>{this.setState.kpIndex} </b></h2>
          <h2>The probability of seeing the Aurora is: <b>{this.setState.probabilityView}</b>%</h2>
        </header>
        </div>     
      </div>
    );
  }
}
//we are setting the values from the json file in the appropriate areas
      //ex. the cloud cover is being set to the current weather value for that location
      //the kp index is being set to the value
      // and the probability as a percentage is being set 


export default App;

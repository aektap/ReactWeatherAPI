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
      auroraData: {  
        nameLoc: "No Location Selected",
        kpIndex: 'No Data',
        cloudCover: 'No Data',
        fogCover: 'No Data',
        probabilityView: 'No Data',
      
      }
    };
  }
//below we are fetching the data for each location from auroraslive using the latitude and 
//longitude parameters on click in the navigation.js component

  getWeather = (lat, long) => {
    let url = `https://api.auroras.live/v1/?type=all&lat=${lat}&long=${long}&forecast=false&threeday=false`;   
    let auroraData = {  }
    
    fetch(url)
      .then(res => res.json()) 
      .then((data) => { 
      auroraData.kpIndex = data.ace.kp;
      auroraData.cloudCover = data.weather.cloud;
      auroraData.probabilityView = data.probability.value;
      //we replace our initial state data with the appropriate data from the auroras live api
     this.setState({
       auroraData
     })
     //now we set the state 

    })
    .catch((error) => {
      console.log("error", error)
    })
  };

  render() {
    const { auroraData } = this.state
    //render using the state fetched 

    return (
      
    <div>
      <Navigation getWeather={this.getWeather} />
      <div className="container">
  
      </div>
      <div>
        <header className="App-header">
          <h1>Select a location for the most current Aurora weather data:</h1>
          <h2>The cloud cover is currently: <b>  {auroraData.cloudCover}</b>%</h2> 
          <h2> The KP Index is: <b>{auroraData.kpIndex} </b></h2>
          <h2>The probability of seeing the Aurora is: <b>{auroraData.probabilityView}</b>%</h2>
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

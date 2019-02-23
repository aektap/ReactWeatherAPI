import React from 'react';


class Navigation extends React.Component {
    render() {
        return(
          
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar brand" href="/"><strong>Northern Lights Scanner</strong></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                          <button classname ="nav-link"  onClick={() => this.props.getWeather(69.6492,18.9553)}>
                            Tromso 
                          </button>
                        </li>
                        <li>
                          <button classname ="nav-link" onClick={() => this.props.getWeather(54.7214,-113.286)}>
                          Athabasca </button>
                        </li>
                        <li>
                          <button classname ="nav-link" onClick={() => this.props.getWeather(63.7467,-68.517)}>
                          Iqualuit </button>
                        </li>
                        <li>
                          <button classname ="nav-link"  onClick={() => this.props.getWeather(62.4484,-114.42)}>
                          Yellowknife</button>
                        </li>
                        <li>
                          <button classname ="nav-link"onClick={() => this.props.getWeather(64.8378,-147.716)}>
                          Fairbanks </button>
                        </li>
                      </ul>
                        <p> Powered by  <img src={require('./auroraslogo.jpg')} alt ="Powered by Auroras Live"/></p>


            </div>
          </nav>
          
        )
    }
}
export default Navigation;

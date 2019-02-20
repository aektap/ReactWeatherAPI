import React from 'react';

class Navigation extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Northern Lights Scanner</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
    
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                          <button className="nav-link" onClick={() => this.props.getWeather(69.6492,18.9553)}>
                            Tromso <span className="sr-only">(current)</span>
                          </button>
                        </li>
                        <li>
                          <button className="nav-link" onClick={() => this.props.getWeather(54.7214,-113.286)}>
                          Athabasca <span className="sr-only">(current)</span></button>
                        </li>
                        <li>
                          <button className="nav-link" onClick={() => this.props.getWeather(63.7467,-68.517)}>
                          Iqualuit <span className="sr-only">(current)</span></button>
                        </li>
                        <li>
                          <button className="nav-link" onClick={() => this.props.getWeather(62.4484,-114.42)}>
                          Yellowknife<span className="sr-only">(current)</span></button>
                        </li>
                        <li>
                          <button className="nav-link" onClick={() => this.props.getWeather(64.8378,-147.716)}>
                          Fairbanks <span className="sr-only">(current)</span></button>
                        </li>
                      </ul>
                        <p className = "nav-link" />Powered by <br></br> <img src={require('./auroraslogo.jpg')}/>
            </div>
          </nav>
        )
    }
}
export default Navigation;

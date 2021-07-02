import React from 'react';
import { BrowserRouter as Router, withRouter, Link } from 'react-router-dom';

// import BrownBearImage from './media/bears/brownBear.png';
import BlueBearImage from './components/media/bears/blueBear.png';
import RedBearImage from './components/media/bears/redBear.png';
import './index.css';


class App extends React.Component {

  nextPath(path) { 
    this.props.history.push(path);
  }

  render() {
    return (
      <Router>
        <main>
          <header>
            <nav>
              <div id="navbar">
                <ul>
                  <li className="links">
                    <Link onClick={() => this.nextPath("/")} to="/">Home</Link>
                  </li>

                  <li className="links blue">
                    <Link onClick={() => this.nextPath("/bluebear")} to="/bluebear">Blue Bear</Link>
                  </li>

                  <li className="links brown">
                    <Link onClick={() => this.nextPath("/bluebear")} to="/brownbear">Brown Bear</Link>
                  </li>

                  <li className="links red">
                    <Link onClick={() => this.nextPath("/bluebear")} to="/redbear">Red Bear</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>

          <div className="App">
            <p>
              <button onClick={() => this.nextPath("/bluebear")}>
                    <img src={ BlueBearImage } className="bear blue" alt="A Brave Blue Bear"/>
              </button>

              <button onClick={() => this.nextPath("/redbear")}>
                    <img src={ RedBearImage } className="bear red" alt="A Brave Red Bear"/>
              </button>
            </p>
          </div>
        </main>
      </Router>
    )
  }
};

export default withRouter(App);
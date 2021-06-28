import React from 'react';
import { withRouter, Link } from 'react-router-dom';

// import brownBearImage from './media/bears/brownBear.png';
// import redBearImage from './media/bears/redBear.png';
import blueBearImage from './media/bears/blueBear.png';
import './index.css';
import './blueBear-template/blue.css';


export class BlueBearTemplate extends React.Component {
  render() {
    return (
      <main>
        <header>
          <nav>
            <div id="navbar">
              <ul>
                <li class="link 1"><Link to="/">Home</Link></li>
                <li class="link 2"><Link to="bluebear">Blue Bear</Link></li>
                <li class="link 3"><a href="#brownbear">Brown Bear</a></li>
                <li class="link 4"><a href="#redbear">Red Bear</a></li>
              </ul>
              </div>
          </nav>
        </header> 

        <div class="wrapper">
          <div class="grid-container">
            <div class="item1">
              <p id="bunchabears">
                <img class="bear-logo" id="rb" src="/src/media/bears/redBear.png" alt="A Brave Red Bear"/>
                <img class="bear-logo" src="/src/media/bears/brownBear.png" alt="A Brave Brown Bear"/>
                <img class="bear-logo" src="/src/media/bears/blueBear.png" alt="A Brave Blue Bear"/>
              </p>
            </div>


            <div class="item2">
              <div class="content-title"><h3>Brave Bear Blue</h3></div>

              <div class="content-container">
                  <div class="box 1">
                    <p>App Development</p>
                      <div class="icon-container">
                        <img class="icons" src="/src/media/icons/appDev.svg" alt="Application Development"/>
                      </div>
                  </div>

                  <div class="box 2">
                    <p>Cloud Storage</p>
                      <div class="icon-container">
                        <img class="icons" src="/src/media/icons/cloud.svg" alt="Cloud Storage"/>
                      </div>
                  </div>

                  <div class="box 3">
                    <p>CMS Software</p>
                      <div class="icon-container">
                        <img class="icons" src="/src/media/icons/cms.svg" alt="CMS Software"/>
                      </div>
                  </div>

                  <div class="box 4">
                    <p>E-Commerce</p>
                      <div class="icon-container">
                        <img class="icons" src="/src/media/icons/ecommerce.svg" alt="E-Commerce Builds"/>
                      </div>
                  </div>

                  <div class="box 5">
                    <p>Server Hosting</p>
                      <div class="icon-container">
                        <img class="icons" src="/src/media/icons/database.svg" alt="Server Hosting"/>
                      </div>
                  </div>

                  <div class="box 6">
                    <p>Site Maintenance</p>
                      <div class="icon-container">
                        <img class="icons" src="/src/media/icons/maintenance.svg" alt="Site Maintenance"/>
                      </div>
                  </div>
                </div>
            </div>

            <div class="item3">
              <img class="polar" src="/src/media/bears/polar-beige.png" alt="Peeking Polar Bear"/>
            </div>

            <div class="item4">
              <p>
                <a href="https://facebook.com" target="_blank" rel="noreferrer"><img class ="footer-logo" src="/src/media/icons/facebook.svg" alt="Facebook"/></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer"><img class="footer-logo" src="/src/media/icons/instagram.svg" alt="Instagram"/></a>
                <a href="https://github.com" target="_blank" rel="noreferrer"><img class="footer-logo" src="/src/media/icons/github-bw.svg" alt="Github"/></a>
                <a href="https://stackoverflow.com" target="_blank" rel="noreferrer"><img class="footer-logo" src="/src/media/icons/stack-overflow.svg" alt="Stack Overflow"/></a>
              </p>
            </div>
          </div>
        </div>

      </main>
    )
  }
}

class App extends React.Component {
  nextPath(path) { 
    this.props.history.push(path);
  }

  render() {
    return (
      <main>
        <div className="App">
          <button onClick={() => this.nextPath("bluebear") }>
                <img src={ blueBearImage } className="bear blue" alt="A Brave Blue Bear"/>
          </button>
        </div>
      </main>
    )
  }
};

export default withRouter(App);
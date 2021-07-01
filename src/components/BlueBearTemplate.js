import React from 'react';
import { BrowserRouter as Router, withRouter, Link } from 'react-router-dom';

// import brownBearImage from './media/bears/brownBear.png';
// import redBearImage from './media/bears/redBear.png';
import './blueBear-template/blue.css'

class BlueBearTemplate extends React.Component {
  render() {
    return (
      <Router>
        <header>
          <nav>
            <div className="navbar">
              <ul>
                <li className="link 1"><Link to="/">Home</Link></li>
                <li className="link 2"><Link to="bluebear">Blue Bear</Link></li>
                <li className="link 3"><a href="#brownbear">Brown Bear</a></li>
                <li className="link 4"><a href="#redbear">Red Bear</a></li>
              </ul>
              </div>
          </nav>
        </header>

        <main>
          <div className="wrapper">
            <div className="grid-container">
              <div className="item1">
                <span className="bunchabears">
                  <img className="bear-logo" id="rb" src="/src/media/bears/redBear.png" alt="A Brave Red Bear"/>
                  <img className="bear-logo" src="/src/media/bears/brownBear.png" alt="A Brave Brown Bear"/>
                  <img className="bear-logo" src="/src/media/bears/blueBear.png" alt="A Brave Blue Bear"/>
                </span>
              </div>


              <div className="item2">
                <div className="content-title"><h3>Brave Bear Blue</h3></div>

                <div className="content-container">
                    <div className="box 1">
                      <p>App Development</p>
                        <div className="icon-container">
                          <img className="icons" src="/src/media/icons/appDev.svg" alt="Application Development"/>
                        </div>
                    </div>

                    <div className="box 2">
                      <p>Cloud Storage</p>
                        <div className="icon-container">
                          <img className="icons" src="/src/media/icons/cloud.svg" alt="Cloud Storage"/>
                        </div>
                    </div>

                    <div className="box 3">
                      <p>CMS Software</p>
                        <div className="icon-container">
                          <img className="icons" src="/src/media/icons/cms.svg" alt="CMS Software"/>
                        </div>
                    </div>

                    <div className="box 4">
                      <p>E-Commerce</p>
                        <div className="icon-container">
                          <img className="icons" src="/src/media/icons/ecommerce.svg" alt="E-Commerce Builds"/>
                        </div>
                    </div>

                    <div className="box 5">
                      <p>Server Hosting</p>
                        <div className="icon-container">
                          <img className="icons" src="/src/media/icons/database.svg" alt="Server Hosting"/>
                        </div>
                    </div>

                    <div className="box 6">
                      <p>Site Maintenance</p>
                        <div className="icon-container">
                          <img className="icons" src="/src/media/icons/maintenance.svg" alt="Site Maintenance"/>
                        </div>
                    </div>
                  </div>
              </div>

              <div className="item3">
                <img className="polar" src="/src/media/bears/polar-beige.png" alt="Peeking Polar Bear"/>
              </div>

              <div className="item4">
                <p>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer"><img class ="footer-logo" src="/src/media/icons/facebook.svg" alt="Facebook"/></a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer"><img className="footer-logo" src="/src/media/icons/instagram.svg" alt="Instagram"/></a>
                  <a href="https://github.com" target="_blank" rel="noreferrer"><img className="footer-logo" src="/src/media/icons/github-bw.svg" alt="Github"/></a>
                  <a href="https://stackoverflow.com" target="_blank" rel="noreferrer"><img className="footer-logo" src="/src/media/icons/stack-overflow.svg" alt="Stack Overflow"/></a>
                </p>
              </div>
            </div>
          </div>

        </main>

      </Router>
    )
  }
}

export default withRouter(BlueBearTemplate);
import React from 'react';
import { BrowserRouter as Router, withRouter, Link } from 'react-router-dom';

import BlueBearImage from './media/bears/blueBear.png'
import BrownBearImage from './media/bears/brownBear.png';
import RedBearImage from './media/bears/redBear.png';
import PeekingBear from './media/bears/polar-green.png';

import AppDev from './media/icons/appDev.svg';
import Cloud from './media/icons/cloud.svg';
import CMS from './media/icons/cms.svg';
import Database from './media/icons/database.svg';
import Maintenance from './media/icons/maintenance.svg';
import ECommerce from './media/icons/ecommerce.svg';

import Facebook from './media/icons/facebook.svg';
import Github from './media/icons/github.svg';
import Instagram from './media/icons/instagram.svg';
import StackOverflow from './media/icons/stack-overflow.svg';

import styles from './Red.module.css'

class RedBearTemplate extends React.Component {

  render() {
    return (
      <Router>
        <header>
          <nav>
            <div className={styles.navbar}>
              <ul>
                <li className={styles.link-1}><Link to="/">Home</Link></li>
                <li className={styles.link-2}><Link to="bluebear">Blue Bear</Link></li>
                <li className={styles.link-3}><Link to="brownbear">Brown Bear</Link></li>
                <li className={styles.link-4}><Link to="redbear">Red Bear</Link></li>
              </ul>
            </div>
          </nav>
        </header>

        <main>
          <div className={styles.wrapper}>
            <div className={styles.gridContainer}>
              <div className={styles.item1}>
                <span className={styles.bunchabears}>
                  <img className={styles.bearLogo} id="rb" src={ RedBearImage } alt="A Brave Red Bear"/>
                  <img className={styles.bearLogo} src={ BrownBearImage } alt="A Brave Brown Bear"/>
                  <img className={styles.bearLogo} src={ BlueBearImage} alt="A Brave Blue Bear"/>
                </span>
              </div>


              <div className={styles.item2}>
                <div className={styles.contentTitle}><h3>Brave Bear Red</h3></div>

                <div className="content-container">
                    <div className="box 1">
                      <p>App Development</p>
                        <div className={styles.iconContainer}>
                          <img className={styles.icons} src={ AppDev } alt="Application Development"/>
                        </div>
                    </div>

                    <div className={styles.box2}>
                      <p>Cloud Storage</p>
                        <div className={styles.iconContainer}>
                          <img className={styles.icons} src={ Cloud } alt="Cloud Storage"/>
                        </div>
                    </div>

                    <div className="box 3">
                      <p>CMS Software</p>
                        <div className={styles.iconContainer}>
                          <img className={styles.icons} src={ CMS } alt="CMS Software"/>
                        </div>
                    </div>

                    <div className="box 4">
                      <p>E-Commerce</p>
                        <div className={styles.iconContainer}>
                          <img className={styles.icons} src={ ECommerce } alt="E-Commerce Builds"/>
                        </div>
                    </div>

                    <div className="box 5">
                      <p>Server Hosting</p>
                        <div className={styles.iconContainer}>
                          <img className={styles.icons} src={ Database } alt="Server Hosting"/>
                        </div>
                    </div>

                    <div className="box 6">
                      <p>Site Maintenance</p>
                        <div className={styles.iconContainer}>
                          <img className={styles.icons} src={ Maintenance } alt="Site Maintenance"/>
                        </div>
                    </div>
                  </div>
              </div>

              <div className="item3">
                <img className={styles.polar} src={ PeekingBear } alt="Peeking Polar Bear"/>
              </div>

              <div className="item4">
                <p>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer"><img className ={styles.footerLogo} src={ Facebook } alt="Facebook"/></a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer"><img className={styles.footerLogo} src={ Instagram } alt="Instagram"/></a>
                  <a href="https://github.com" target="_blank" rel="noreferrer"><img className={styles.footerLogo} src={ Github } alt="Github"/></a>
                  <a href="https://stackoverflow.com" target="_blank" rel="noreferrer"><img className={styles.footerLogo} src={ StackOverflow } alt="Stack Overflow"/></a>
                </p>
              </div>
            </div>
          </div>

        </main>
      </Router>
    )
  }
};

export default withRouter(RedBearTemplate);
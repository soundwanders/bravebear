import React from 'react';
import { BrowserRouter as Router, withRouter, Link } from 'react-router-dom';

import BlueBearImage from './media/bears/blueBear.png'
import BrownBearImage from './media/bears/brownBear.png';
import RedBearImage from './media/bears/redBear.png';
import PeekingBear from './media/bears/polar-beige.png';

import AppDev from './media/icons/tech/appDev.svg';
import Cloud from './media/icons/tech/cloud.svg';
import CMS from './media/icons/tech/cms.svg';
import Database from './media/icons/tech/database.svg';
import Maintenance from './media/icons/tech/maintenance.svg';
import ECommerce from './media/icons/tech/ecommerce.svg';

import Facebook from './media/icons/facebook.svg';
import Github from './media/icons/github-bluebear.svg';
import Instagram from './media/icons/instagram.svg';
import StackOverflow from './media/icons/stack-overflow.svg';

import styles from './styles/Blue.module.css';


class BlueBearTemplate extends React.Component {
  nextPath(path) { 
    this.props.history.push(path);
  }

  render() {
    return (
      <Router>
        <header>
          <nav>
            <div className={styles.navbar}>
              <ul>
                <li className={styles.links}>
                  <Link onClick={() => this.nextPath("/")} to="/">Home</Link>
                </li>
                
                <li className={styles.links}>
                  <Link onClick={() => this.nextPath("/bluebear")} to="/bluebear">Blue Bear</Link>
                </li>

                <li className={styles.links}>
                  <Link onClick={() => this.nextPath("/brownbear")} to="/brownbear">Brown Bear</Link>
                </li>

                <li className={styles.links}>
                  <Link onClick={() => this.nextPath("/redbear")} to="/redbear">Red Bear</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <main>
          <div className={styles.wrapper}>
            <div className={styles.gridContainer}>
              <div className={styles.item1}>
                <p className={styles.bunchabears}>
                  <img onClick={() => this.nextPath("/bluebear")} className={styles.bearLogo} src={ BlueBearImage} alt="A Brave Blue Bear"/>
                  <img onClick={() => this.nextPath("/brownbear")} className={styles.bearLogo} src={ BrownBearImage } alt="A Brave Brown Bear"/>
                  <img onClick={() => this.nextPath("/redbear")} className={styles.bearLogo} id="rb" src={ RedBearImage } alt="A Brave Red Bear"/>
                </p>
              </div>

              <div className={styles.item2}>
                <div className={styles.contentTitle}><h3>Brave Blue Bear</h3></div>

                <div className={styles.contentContainer}>
                    <div className={styles.box}>
                      <p>App Development</p>
                        <div className={styles.iconContainer}>
                          <img className={styles.icons} src={ AppDev } alt="Application Development"/>
                        </div>
                    </div>

                    <div className={styles.box}>
                      <p>Cloud Storage</p>
                        <div className={styles.iconContainer}>
                          <img className={styles.icons} src={ Cloud } alt="Cloud Storage"/>
                        </div>
                    </div>

                    <div className={styles.box}>
                      <p>CMS Software</p>
                        <div className={styles.iconContainer}>
                          <img className={styles.icons} src={ CMS } alt="CMS Software"/>
                        </div>
                    </div>

                    <div className={styles.box}>
                      <p>E-Commerce</p>
                        <div className={styles.iconContainer}>
                          <img className={styles.icons} src={ ECommerce } alt="E-Commerce Builds"/>
                        </div>
                    </div>

                    <div className={styles.box}>
                      <p>Server Hosting</p>
                        <div className={styles.iconContainer}>
                          <img className={styles.icons} src={ Database } alt="Server Hosting"/>
                        </div>
                    </div>

                    <div className={styles.box}>
                      <p>Site Maintenance</p>
                        <div className={styles.iconContainer}>
                          <img className={styles.icons} src={ Maintenance } alt="Site Maintenance"/>
                        </div>
                    </div>
                  </div>
              </div>

              <div className={styles.item3}>
                <img className={styles.polar} src={ PeekingBear } alt="Peekaboo Bear"/>
              </div>

              <div className={styles.item4}>
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

export default withRouter(BlueBearTemplate);
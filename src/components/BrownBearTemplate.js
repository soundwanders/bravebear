import React from 'react';
import { BrowserRouter as Router, withRouter, Link } from 'react-router-dom';

import BlueBearImage from './media/bears/blueBear.png'
import BrownBearImage from './media/bears/brownBear.png';
import RedBearImage from './media/bears/redBear.png';
import PeekingBear from './media/bears/polar-blue.png';

import Grooming from './media/icons/pet/groom.svg';
import Kennel from './media/icons/pet/kennel.svg';
import Food from './media/icons/pet/food.svg';
import Training from './media/icons/pet/training.svg';
import Report from './media/icons/pet/report.svg';
import Vet from './media/icons/pet/vet.svg';

import Facebook from './media/icons/facebook.svg';
import Github from './media/icons/github-bluebear.svg';
import Instagram from './media/icons/instagram.svg';
import StackOverflow from './media/icons/stack-overflow.svg';

import styles from './styles/Brown.module.css';


class BrownBearTemplate extends React.Component {
  nextPath(path) { 
    this.props.history.push(path);
  }

  render() {
    return (
      <Router>
        <header>
          <nav>
            <div className={styles.navbar}>
              <ul classname={styles.ul}>
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
                <div className={styles.contentTitle}><h3>Brave Brown Bear</h3></div>
                  <div className={styles.contentContainer}>

                    <div className={styles.box}>
                      <p>Grooming Services</p>
                        <div className={styles.iconContainer}>
                          <img className={styles.icons} src={ Grooming } alt="Pet Grooming"/>
                        </div>
                    </div>

                    <div className={styles.box}>
                      <p>Medical Diagnosis</p>
                        <div className={styles.iconContainer}>
                          <img className={styles.icons} src={ Report } alt="Full Medical Diagnosis"/>
                        </div>
                    </div>

                    <div className={styles.box}>
                      <p>Nutrition Plans</p>
                        <div className={styles.iconContainer}>
                          <img className={styles.icons} src={ Food } alt="Nutrition Plans"/>
                        </div>
                    </div>

                    <div className={styles.box}>
                      <p>Overnight Kennel</p>
                        <div className={styles.iconContainer}>
                          <img className={styles.icons} src={ Kennel } alt="Overnight Kennel"/>
                        </div>
                    </div>

                    <div className={styles.box}>
                      <p>Our Vets &#10084;&#65039; Pets!</p>
                        <div className={styles.iconContainer}>
                          <img className={styles.icons} src={ Vet } alt="One-to-one Veterinarian Care"/>
                        </div>
                    </div>

                    <div className={styles.box}>
                      <p>Training School</p>
                        <div className={styles.iconContainer}>
                          <img className={styles.icons} src={ Training } alt="Training School"/>
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

export default withRouter(BrownBearTemplate);
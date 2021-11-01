import React from 'react';
import { BrowserRouter as Router, withRouter, Link } from 'react-router-dom';

import BlueBearImage from './media/bears/blueBear.png'
import BrownBearImage from './media/bears/brownBear.png';
import RedBearImage from './media/bears/redBear.png';
import PeekingBear from './media/bears/polar-green.png';

import Books from './media/icons/education/books.svg';
import Class from './media/icons/education/class.svg';
import Dorm from './media/icons/education/dorm.svg';
import Graduate from './media/icons/education/graduate.svg';
import Remote from './media/icons/education/remote.svg';
import Library from './media/icons/education/library.svg';

import Facebook from './media/icons/facebook.svg';
import Github from './media/icons/github.svg';
import Instagram from './media/icons/instagram.svg';
import StackOverflow from './media/icons/stack-overflow.svg';

import styles from './styles/Red.module.css';


class RedBearTemplate extends React.Component {
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
                  <img onClick={() => this.nextPath("/redbear")} className={styles.bearLogo} id="rb" src={ RedBearImage } alt="A Brave Red Bear"/>
                  <img onClick={() => this.nextPath("/brownbear")} className={styles.bearLogo} src={ BrownBearImage } alt="A Brave Brown Bear"/>
                </p>
              </div>

              <div className={styles.item2}>
                <div className={styles.contentTitle}><h1>Brave Red Bear</h1></div>
                  <div className={styles.contentContainer}>
                    
                    <div className={styles.box}>
                      <p>Campus Store</p>
                        <div className={styles.iconContainer}>
                          <img className={styles.icons} src={ Books } alt="On-Campus Store"/>
                        </div>
                    </div>

                    <div className={styles.box}>
                      <p>Graduate Programs</p>
                        <div className={styles.iconContainer}>
                          <img className={styles.icons} src={ Graduate } alt="Graduate Programs"/>
                        </div>
                    </div>

                    <div className={styles.box}>
                      <p>In-Person Classes</p>
                        <div className={styles.iconContainer}>
                          <img className={styles.icons} src={ Class } alt="In-Person Classes"/>
                        </div>
                    </div>

                    <div className={styles.box}>
                      <p>New Library!</p>
                        <div className={styles.iconContainer}>
                          <img className={styles.icons} src={ Library } alt="Brand New Library"/>
                        </div>
                    </div>

                    <div className={styles.box}>
                      <p>Remote Learning</p>
                        <div className={styles.iconContainer}>
                          <img className={styles.icons} src={ Remote } alt="Remote Learning"/>
                        </div>
                    </div>

                    <div className={styles.box}>
                      <p>Student Housing</p>
                        <div className={styles.iconContainer}>
                          <img className={styles.icons} src={ Dorm } alt="Campus Housing"/>
                        </div>
                    </div>
                  </div>
              </div>

              <div className={styles.item3}>
                <img className={styles.polar} src={ PeekingBear } alt="Peekaboo Bear"/>
              </div>

              <div className={styles.item4}>
                <footer>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer"><img className ={styles.footerLogo} src={ Facebook } alt="Facebook"/></a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer"><img className={styles.footerLogo} src={ Instagram } alt="Instagram"/></a>
                  <a href="https://github.com" target="_blank" rel="noreferrer"><img className={styles.footerLogo} src={ Github } alt="Github"/></a>
                  <a href="https://stackoverflow.com" target="_blank" rel="noreferrer"><img className={styles.footerLogo} src={ StackOverflow } alt="Stack Overflow"/></a>
                </footer>
              </div>
            </div>
          </div>
        </main>
      </Router>
    )
  }
};

export default withRouter(RedBearTemplate);

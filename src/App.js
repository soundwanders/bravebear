import React from 'react';
import { BrowserRouter as Router, withRouter, Link } from 'react-router-dom';

// import brownBearImage from './media/bears/brownBear.png';
// import redBearImage from './media/bears/redBear.png';
import blueBearImage from './media/bears/blueBear.png';
import './index.css';


// 
// class App extends React.Component {
//   
//   nextPath(path) { 
//     this.props.history.push(path);
//   }
// 
//   render() {
//     return (
//       <Router>
//         <main>
//           <header>
//               <nav>
//                 <div id="navbar">
//                   <ul>
//                     <li className="link 1"><Link to="/">Home</Link></li>
//                     <li className="link 2"><Link to="bluebear">Blue Bear</Link></li>
//                     <li className="link 3"><a href="#brownbear">Brown Bear</a></li>
//                     <li className="link 4"><a href="#redbear">Red Bear</a></li>
//                   </ul>
//                   </div>
//               </nav>
//             </header>
// 
//           <div className="App">
//             <button onClick={() => this.nextPath("bluebear")}>
//                   <img src={ blueBearImage } className="bear blue" alt="A Brave Blue Bear"/>
//             </button>
//           </div>
//         </main>
//       </Router>
//     )
//   }
// };
// 
// export default withRouter(App);
// 


class App extends React.Component {
    
  nextPath(path) { 
    this.props.history.push(path);
  }

  constructor(props) {
    super(props);
    this.switchTemplate = this.switchTemplate.bind(this);
    this.state = {showTemplate: false};
  }

  switchTemplate() {
    this.setState({showTemplate: true});
  }

  render() {
    const toggleUI = this.state.toggleUI;
    let button;

    if (toggleUI) { button = <button onClick={this.switchTemplate} /> };

    return (
      <Router>
        <main>
          <header>
              <nav>
                <div id="navbar">
                  <ul>
                    <li className="link 1"><Link to="/">Home</Link></li>
                    <li className="link 2"><Link to="bluebear">Blue Bear</Link></li>
                    <li className="link 3"><a href="#brownbear">Brown Bear</a></li>
                    <li className="link 4"><a href="#redbear">Red Bear</a></li>
                  </ul>
                  </div>
              </nav>
            </header>

          <div className="App">
            <button onClick={() => this.nextPath("bluebear")}>
                  <img src={ blueBearImage } className="bear blue" alt="A Brave Blue Bear"/>
            </button>
          </div>
        </main>
      </Router>
    )
  }
};

export default withRouter(App);

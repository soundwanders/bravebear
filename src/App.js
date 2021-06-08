import React from 'react'

import overallBear from './bears/overallBear.png';
import redBear from './bears/redBear.png';
import swimBear from './bears/swimBear.png';
import vestBear from './bears/vestBear.png';

import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h3>Brave Bear</h3>
    </header>
      <body>
        <p>
            <span>
              <img src={swimBear} className="App-bears" alt="Swim Bear"/>
            </span>

            <span>
              <img src={vestBear} className="App-bears" alt="Vest Bear"/>
            </span>

            <span>
              <img src={overallBear} className="App-bears" alt="Overalls Bear"/>
            </span>
            
            <span>
              <img src={redBear} className="App-bears" alt="Red Bear"/>
            </span>
          </p>
        </body>
  </div>
);

export default App;

import React from 'react'

import overallBear from './media/bears/overallBear.png';
import redBear from './media/bears/redBear.png';
import swimBear from './media/bears/swimBear.png';
import blueBear from './media/bears/blueBear.png';

import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h3>Brave Bear</h3>
    </header>
      <body>
        <p>
            <span>
              <img src={swimBear} className="bear swim" alt="Swim Bear"/>
            </span>

            <span>
              <img src={blueBear} className="bear blue" alt="Blue Bear"/>
            </span>

            <span>
              <img src={overallBear} className="bear overalls" alt="Overalls Bear"/>
            </span>
            
            <span>
              <img src={redBear} className="bear red" alt="Red Bear"/>
            </span>
          </p>
        </body>
  </div>
);

export default App;

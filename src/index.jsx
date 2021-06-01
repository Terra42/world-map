import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import WorldMap from 'react-world-map';

const App = () => {
  const [selected, onSelect] = useState(null);
  return (
    <div className="container">
      <h2>{selected === 'eu' ? 'Vyhrála jsem' : 'Zkoušej znovu'}</h2>
      <WorldMap selected={selected} onSelect={onSelect} />
    </div>
  );
};

render(<App />, document.querySelector('#app'));

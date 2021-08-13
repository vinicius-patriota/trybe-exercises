import React, { Component } from 'react';
import ButtonClicks from './components/ButtonClicks';
import NumberClicks from './components/NumberClicks';

class App extends Component {
  render() {
    return (
      <div>
        <ButtonClicks />
        <NumberClicks />
      </div>
    );
  }
}

export default App;

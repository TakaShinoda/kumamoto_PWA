import React, { Component } from 'react';
import 'typeface-roboto';
import Menu from './Menu';

class App extends Component {
  backgroundstyle = {
    background: 'linear-gradient(to right bottom, #ffefba, #ffffff)'
  }
  render() {
    return (
      <div style={this.backgroundstyle}>
        <div style={{height: '100vh',display:'flex',flexDirection:'column', justifyContent:'space-evenly', alignItems:'center'}}>
          <div style={{height: '95vh'}}><Menu /></div>
        </div>
      </div>
    );
  }
}

export default App;
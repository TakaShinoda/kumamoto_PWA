import React, { Component } from 'react';
import 'typeface-roboto';
import Menu from './Menu';


class App extends Component {
  render() {
    return (
      <div style={{
        background: 'linear-gradient(to right bottom, #ffefba, #ffffff)'
      }}>
        <div 
          style={{height: '100vh',display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}
        >
          <div style={{height: '95vh'}}><Menu /></div>
          
        </div>
      </div>
    );
  }
}

export default App;
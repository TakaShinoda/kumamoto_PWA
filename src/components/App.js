import React, { Component } from 'react';
import 'typeface-roboto';
//import Fab from '@material-ui/core/Fab';
//import Typography from '@material-ui/core/Typography';
//import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
//import PauseOutlinedIcon from '@material-ui/icons/PauseOutlined';
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
          <Menu />

          
        </div>
      </div>
    );
  }
}

export default App;
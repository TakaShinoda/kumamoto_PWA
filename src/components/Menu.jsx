import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Home from './Home';
import About from './About';


class Menu extends Component {
    liStyle = {
        display: 'inline',
        width: '100px'
    }

    render() {
        return (
            <Router>
                <div style={{width: '500px', textAlign: 'center'}}>
                    <ul style={{display: 'relative'}}>
                    <li style={this.liStyle}>
                            <Fab style={{
                                width: 100,
                                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                                border: 0,
                                boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                                color: 'white',
                            }} color='secondary' size="large" variant="extended">
                                <Link to='./'>Home</Link>
                            </Fab>
                        </li>
                        &ensp;
                        <li style={this.liStyle}>
                            <Fab style={{
                                width: 100,
                                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                                border: 0,
                                boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                                color: 'white',
                            }} color='secondary' size="large" variant="extended">
                                <Link to='./About'>About</Link>
                            </Fab>
                        </li>
                    </ul>
                    <hr />

                    <div style={{marginLeft: '50px'}}>
                        <Route path='/' exact component={Home}/>
                        <Route path='/About' exact component={About}/>
                    </div>

                </div>
            </Router>
        );
    }
}

export default Menu;
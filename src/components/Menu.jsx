import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, /*Switch*/} from "react-router-dom";
import About from './About';


class Menu extends Component {
    liStyle = {
        display: 'inline',
        width: '100px'
    }

    render() {
        return (
            <div>
            <Router>
                <div style={{width: '500px', textAlign: 'left'}}>
                    <ul style={{display: 'flex'}}>
                        <li style={this.liStyle}><Link to='./'>top</Link></li>
                        <li style={this.liStyle}><Link to ='./About'>About</Link></li>
                    </ul>
                    <hr />
                    <Route exact path='/' component={Menu} />
                    <Route path='./About' component={About} />
                </div>
            </Router>

            

            
            </div>
        
        );
    }
}

export default Menu;
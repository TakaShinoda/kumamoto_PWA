import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Home from './Home';
import About from './About';
import page404 from './page404';


class Menu extends Component {
    liStyle = {
        display: 'inline',
        width: '100px'
    }

    render() {
        return (
            <Router>
                <div style={{width: '500px', textAlign: 'center'}}>
                    
                 

                    <div style={{marginLeft: '50px'}}>
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/About' exact component={About}/>
                            <Route exact component={page404}/>
                        </Switch>
                    </div>
            
                    <ul style={{position: "fixed", bottom: 0, marginLeft: '130px'}}>
                    
                    <li style={this.liStyle}>
                            <Fab style={{
                                width: 100,
                                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                                border: 0,
                                boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                                color: 'white',
                            }} color='secondary' size="large" variant="extended">
                                <Link to='/'>Home</Link>
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

                </div>
            </Router>
        );
    }
}

export default Menu;
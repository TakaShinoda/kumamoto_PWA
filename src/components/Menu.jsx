import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Home from './Home';
import About from './About';
import page404 from './page404';

class Menu extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <div style={{textAlign: 'center'}}>
                            <Switch>
                                <Route path='/' exact component={Home}/>
                                <Route path='/About' exact component={About}/>
                                <Route exact component={page404}/>
                            </Switch>
                        </div>
                        <div style={{bottom: 0, textAlign: 'center', position: "absolute"}}>
                            <ul>
                                <li style={{display: 'inline'}}>
                                    <Link to='/'　style={{ textDecoration: 'none'}}>
                                        <Fab style={{
                                            width: 100,
                                            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                                            border: 0,
                                            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                                            color: 'white',
                                            }} color='secondary' size="large" variant="extended">
                                                <i class="fas fa-home"></i>&thinsp;Home
                                        </Fab>
                                    </Link>
                                </li>
                                &ensp;
                                <li style={{display: 'inline'}}>
                                    <Link to='./About' style={{ textDecoration: 'none'}}>
                                        <Fab style={{
                                            width: 100,
                                            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                                            border: 0,
                                            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                                            color: 'white',
                                            }} color='secondary' size="large" variant="extended" >
                                        About
                                        </Fab>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Menu;
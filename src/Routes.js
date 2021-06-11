import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './page/Homepage';
import Undangan from './page/Undangan';

export class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/undangan" component={Homepage}></Route>
                        <Route path="/andita-ridwan" exact component={Undangan}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Routes

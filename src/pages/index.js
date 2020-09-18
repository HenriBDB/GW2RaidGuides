import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DruidGuide from './DruidGuide';

const HomePage = (props) => {
    return (
        <Router>
            <div className="row mx-5">
                <a href="druid-guide">Druid</a>
            </div>
            <Switch>
                <Route exact path="/druid-guide"><DruidGuide/></Route>
            </Switch>
        </Router>
    );
}

export default HomePage;
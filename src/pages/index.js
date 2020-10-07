import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DruidGuide from './DruidGuide';
import WarriorGuide from './WarriorGuide';
import DragonhunterGuide from './DragonhunterGuide';

const HomePage = () => {
    return (
        <Router>
            <div className="row mx-5">
                <a href="druid-guide">Druid</a>
                <a href="warrior-guide">Warrior</a>
                <a href="dragonhunter-guide">Dragonhunter</a>
            </div>
            <Switch>
                <Route exact path="/druid-guide"><DruidGuide/></Route>
                <Route exact path="/warrior-guide"><WarriorGuide/></Route>
                <Route exact path="/dragonhunter-guide"><DragonhunterGuide/></Route>
            </Switch>
        </Router>
    );
}

export default HomePage;
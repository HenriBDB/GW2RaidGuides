import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from '../components/NavBar';
// import Footer from './components/footer'; TODO
// import Home from './pages/home'; TODO
import DruidGuide from './DruidGuide';
import WarriorGuide from './WarriorGuide';
import DragonhunterGuide from './DragonhunterGuide';

const HomePage = () => {
    return (
        <Router>
        <Navbar />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/druid-guide/" component={DruidGuide} />
          <Route exact path="/warrior-guide/" component={WarriorGuide} />
          <Route exact path="/dragonhunter-guide/" component={DragonhunterGuide} />
          {/* <Route component={Error} /> */}
        </Switch>
        {/* <Footer /> */}
        </Router>
    );
}

export default HomePage;
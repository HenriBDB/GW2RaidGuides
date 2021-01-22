import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/NavBar';
// import Footer from './components/footer'; TODO
import Home from './Home';
import DragonhunterGuide from './DragonhunterGuide';
import DruidGuide from './DruidGuide';
import WarriorGuide from './WarriorGuide';


const HomePage = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dragonhunter-guide/" component={DragonhunterGuide} />
          <Route exact path="/druid-guide/" component={DruidGuide} />
          <Route exact path="/warrior-guide/" component={WarriorGuide} />
          {/* <Route component={Error} /> */}
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default HomePage;
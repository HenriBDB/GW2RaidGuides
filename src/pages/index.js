import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Home from './Home';
import Guides from './Guides';
import Squadmaking from './Squadmaking';
import Authors from './Authors';
import Error from './Error';
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
          <Route exact path="/commander-guide/" component={Squadmaking} />
          <Route exact path="/class-guides/" component={Guides} />
          <Route exact path="/creators/" component={Authors} />
          <Route exact path="/dragonhunter-guide/" component={DragonhunterGuide} />
          <Route exact path="/druid-guide/" component={DruidGuide} />
          <Route exact path="/warrior-guide/" component={WarriorGuide} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default HomePage;

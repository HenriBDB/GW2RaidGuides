import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CookieConsent from "react-cookie-consent";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Changelog from './Changelog';
import PrivacyPolicy from './PrivacyPolicy';
import Home from './Home';
import Guides from './Guides';
import Squadmaking from './Squadmaking';
import Authors from './Authors';
import NotFound from './NotFound';
import DragonhunterGuide from './DragonhunterGuide';
import DruidGuide from './DruidGuide';
import WarriorGuide from './WarriorGuide';


const HomePage = () => {
  return (
    <>
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Navbar />
        <CookieConsent
          location="top"
          buttonText="Continue to the site"
          cookieName="GW2RaidGuidesCookie"
          style={{ background: "rgb(37,39,37)", fontSize: "16px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: 'center'
          , paddingLeft: 50, paddingRight: 50 }}
          buttonStyle={{ color: "white", fontSize: "16px", background: "#008000", padding: "15px" }}
          expires={365}
        >
          This website uses cookies to enhance the user experience. By continuing to browse this website, you declare to accept the use of cookies.
        </CookieConsent>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/commander-guide/" component={Squadmaking} />
          <Route exact path="/class-guides/" component={Guides} />
          <Route exact path="/creators/" component={Authors} />
          <Route exact path="/dragonhunter-guide/" component={DragonhunterGuide} />
          <Route exact path="/druid-guide/" component={DruidGuide} />
          <Route exact path="/warrior-guide/" component={WarriorGuide} />
          <Route exact path="/changelog/" component={Changelog} />
          <Route exact path="/privacy-policy/" component={PrivacyPolicy} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default HomePage;

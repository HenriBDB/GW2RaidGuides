import React from "react";
import HomeView from '../components/Home/HomeView';
import Seo from "../components/seo"

const Home = () => {
    return (
        <>
            <Seo title="Home" />
            <HomeView />
        </>
    )
}
export default Home;
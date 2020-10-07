import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar" id="navbar">
            <div className="nav-center">
                <ul className="nav-row">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/druid-guide/">Druid</Link>
                    </li>
                    <li>
                        <Link to="/warrior-guide/">Warrior</Link>
                    </li>
                    <li>
                        <Link to="/dragonhunter-guide/">Dragonhunter</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar
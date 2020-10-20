import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar" id="navbar">
            <div className="nav-center">
                <ul className="nav-row">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="dragonhunter-guide">Dragonhunter</a>
                    </li>
                    <li>
                        <a href="druid-guide">Druid</a>
                    </li>
                    <li>
                        <a href="warrior-guide">Warrior</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar
import React from 'react';
import PageLogo from '../assets/logo.png'

const NavBar = () => {
    return (
        <nav className="navbar" id="navbar">
            <div className="nav-container">
                <ul className="nav-row">
                    <li>
                        <a href="/">
                            <img src={PageLogo} width="60" height="60" alt="page-logo" />
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="class-guides">Class guides</a>
                    </li>
                    <li className="menu-item">
                        <a href="commander-guide">Commander guide</a>
                    </li>
                    <li className="menu-item">
                        <a href="authors">Authors</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar
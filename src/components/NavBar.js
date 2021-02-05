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
                        <a href="guides">Guides</a>
                    </li>
                    <li>
                        <a href="squadmaking">Squadmaking</a>
                    </li>
                    <li>
                        <a href="authors">Authors</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar
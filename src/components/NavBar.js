import React, { useState, useEffect, useCallback } from 'react'
import PageLogo from '../assets/logo.png'
import { HamburgerSpring } from 'react-animated-burgers'

const NavBar = () => {
    const [isActive, setIsActive] = useState(false)
    const [burgerVisible, setBurgerVisible] = useState(false)
    const toggleButton = useCallback(
        () => setIsActive(prevState => !prevState),
        [],
    );
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
        if (width < 780) {
            setBurgerVisible(true)
        }
        else {
            setBurgerVisible(false)
        }
    }, [width]);

    return (
        <nav className="navbar" id="navbar">
            <div className="nav-container">
                <ul className="nav-row">
                    <li>
                        <a href="/">
                            <img src={PageLogo} width="60" height="60" alt="page-logo" />
                        </a>
                    </li>
                    <ul className="menu-items">
                        <li className="menu-item" style={{ paddingRight: 40 }}>
                            <a href="class-guides">Class guides</a>
                        </li>
                        <li className="menu-item" style={{ paddingRight: 40 }}>
                            <a href="commander-guide">Commander guide</a>
                        </li>
                        <li className="menu-item">
                            <a href="authors">Authors</a>
                        </li>
                    </ul>
                    {burgerVisible && (
                        <li>
                            <HamburgerSpring
                                buttonColor="transparent"
                                barColor="white"
                                {...{ isActive, toggleButton }}
                            />
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    )
}
export default NavBar
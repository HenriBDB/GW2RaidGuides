import React, { useState, useEffect } from 'react'
import PageLogo from '../assets/logo.png'
import { HamburgerSpring } from 'react-animated-burgers'
import { AnimatePresence } from "framer-motion"

const NavBar = () => {
    const [isActive, setIsActive] = useState(false);
    const [burgerVisible, setBurgerVisible] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const toggleButton = () => {
        setIsActive(!isActive)
    }

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
                        <a href="/" onClick={() => setIsActive(false)}>
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
                            <a href="Creators">Creators</a>
                        </li>
                    </ul>
                    {burgerVisible && (
                        <li>
                            <HamburgerSpring
                                buttonColor="transparent"
                                barColor="white"
                                style={{outline: "none"}}
                                {...{ isActive, toggleButton }}
                            />
                        </li>
                    )}
                    {/* <AnimatePresence> */}
                        {isActive && (
                            <div class="mobile-nav"
                                // isActive={isActive}
                                // initial={{ transform: "translate3d(100%, 0, 0)" }}
                                // animate={{ transform: "translate3d(0%, 0, 0" }}
                                // exit={{ transform: "translate3d(100%, 0, 0)" }}
                                // transition={{
                                //     duration: 0.5,
                                //     ease: [0.82, 0.0, 0.195, 1.0],
                                // }}
                            >
                                <ul className="mobile-menu-items">
                                    <li className="mobile-menu-item">
                                        <a href="class-guides" onClick={() => setIsActive(false)}>Class guides</a>
                                    </li>
                                    <li className="mobile-menu-item">
                                        <a href="commander-guide" onClick={() => setIsActive(false)}>Commander guide</a>
                                    </li>
                                    <li className="mobile-menu-item">
                                        <a href="creators" onClick={() => setIsActive(false)}>Creators</a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    {/* </AnimatePresence> */}
                </ul>
            </div>
        </nav>
    )
}
export default NavBar
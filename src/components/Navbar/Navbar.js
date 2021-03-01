import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import PageLogo from '../../assets/logo.png'
import { HamburgerSpring } from 'react-animated-burgers'
import { AnimatePresence } from "framer-motion"
import {
    MobileNavWrapper,
    NavContainer,
    NavWrapper,
    NavRow,
    NavLi,
    Logo,
    MenuItem,
    MenuItems,
    MobileMenuItems,
    MobileMenuItem
} from './styles'

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [burgerVisible, setBurgerVisible] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const toggleButton = () => {
        setIsActive(!isActive)
    }
    const closeMenu = () => {
        setIsActive(false)
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
            setBurgerVisible(true);
        }
        else {
            setBurgerVisible(false);
        }
    }, [width]);

    return (
        <NavContainer>
            <NavWrapper>
                <NavRow>
                    <NavLi>
                        <NavLink to="/" onClick={closeMenu}>
                            <Logo src={PageLogo} width="60" height="60" alt="page-logo" />
                        </NavLink>
                    </NavLi>
                    <MenuItems>
                        <MenuItem style={{ paddingRight: 40 }}>
                            <NavLink to="/class-guides"
                                onClick={closeMenu}
                                activeStyle={{
                                    borderBottom: "2px solid white"
                                }}>
                                Class guides
                                            </NavLink>
                        </MenuItem>
                        <MenuItem style={{ paddingRight: 40 }}>
                            <NavLink to="/commander-guide"
                                onClick={closeMenu}
                                activeStyle={{
                                    borderBottom: "2px solid white"
                                }}>
                                Commander guide
                                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="/creators"
                                onClick={closeMenu}
                                activeStyle={{
                                    borderBottom: "2px solid white"
                                }}>
                                Creators
                                            </NavLink>
                        </MenuItem>
                    </MenuItems>
                    {burgerVisible && (
                        <NavLi>
                            <HamburgerSpring
                                buttonColor="transparent"
                                barColor="white"
                                style={{ outline: "none" }}
                                {...{ isActive, toggleButton }}
                            />
                        </NavLi>
                    )}
                    <AnimatePresence>
                        {isActive && (
                            <MobileNavWrapper
                                isActive={isActive}
                                initial={{ transform: "translate(100%, 0)" }}
                                animate={{ transform: "translate(0%, 0)" }}
                                exit={{ transform: "translate(100%, 0)" }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.82, 0.0, 0.195, 1.0],
                                }}
                            >
                                <MobileMenuItems>
                                    <MobileMenuItem>
                                        <NavLink to="/class-guides"
                                            onClick={closeMenu}
                                            activeStyle={{
                                                color: "rgb(27,29,27)",
                                                background: "white"
                                            }}>
                                            Class guides
                                            </NavLink>
                                    </MobileMenuItem>
                                    <MobileMenuItem>
                                        <NavLink to="/commander-guide"
                                            onClick={closeMenu}
                                            activeStyle={{
                                                color: "rgb(27,29,27)",
                                                background: "white"
                                            }}>
                                            Commander guide
                                            </NavLink>
                                    </MobileMenuItem>
                                    <MobileMenuItem>
                                        <NavLink to="/creators"
                                            onClick={closeMenu}
                                            activeStyle={{
                                                color: "rgb(27,29,27)",
                                                background: "white"
                                            }}>
                                            Creators
                                            </NavLink>
                                    </MobileMenuItem>
                                </MobileMenuItems>
                            </MobileNavWrapper>
                        )}
                    </AnimatePresence>
                </NavRow>
            </NavWrapper>
        </NavContainer>
    )
}
export default Navbar
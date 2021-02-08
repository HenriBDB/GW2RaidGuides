import React, { useState, useEffect } from 'react'
import PageLogo from '../../assets/logo.png'
import { HamburgerSpring } from 'react-animated-burgers'
import { AnimatePresence } from "framer-motion"
import {
    MobileNavWrapper,
    NavContainer,
    NavWrapper,
    NavRow,
    NavLi,
    Link,
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
                        <Link href="/" onClick={toggleButton}>
                            <Logo src={PageLogo} width="60" height="60" alt="page-logo" />
                        </Link>
                    </NavLi>
                    {!burgerVisible && (
                        <MenuItems>
                            <MenuItem style={{ paddingRight: 40 }}>
                                <Link href="class-guides">Class guides</Link>
                            </MenuItem>
                            <MenuItem style={{ paddingRight: 40 }}>
                                <Link href="commander-guide">Commander guide</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link href="creators">Creators</Link>
                            </MenuItem>
                        </MenuItems>
                    )}
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
                                        <Link href="class-guides" onClick={toggleButton}>Class guides</Link>
                                    </MobileMenuItem>
                                    <MobileMenuItem>
                                        <Link href="commander-guide" onClick={toggleButton}>Commander guide</Link>
                                    </MobileMenuItem>
                                    <MobileMenuItem>
                                        <Link href="creators" onClick={toggleButton}>Creators</Link>
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
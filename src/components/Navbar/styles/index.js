import styled from "styled-components";
import { motion } from 'framer-motion';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(28,30,27,0.8);
  color: white;
  height: 75px;
  position: absolute;
  width: 100%;
  padding: 0;
  a {
    font-family: "Noto Serif";
    color: white;
    text-decoration: none;
    font-size: 20px;
    letter-spacing: 0.4px;
    text-transform: uppercase;
  }
`
export const NavWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  @media (min-width:992px) {
      max-width:960px
  }
  @media (min-width:1200px) {
      max-width: 1600px;
  }
`
export const NavRow = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
`
export const NavLi = styled.li`

`
export const Logo = styled.img`

`
export const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
  justify-content: flex-end;
  @media (max-width:780px) {
    display: none;
}
`
export const MenuItem = styled.li`
  a {
    padding-bottom: 2px;
  }
  a:after {
    content: '';
    display: block;
    border-bottom: 2px solid white;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
  }
  a:hover::after {
    transform: scaleX(1); 
  }
`
export const MobileNavWrapper = styled(motion.div)`
  position: absolute;
  top: 65px;
  right: 0%;
  width: 100%;
  z-index: 1;
  background-color:rgba(27,29,27,1);
`
export const MobileMenuItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0 20px 0;
`
export const MobileMenuItem = styled.li`
  width: 100%;
  text-align: center;
  a {
    padding: 15px 0; 
    width: 100%;
    display: block;
  }
  a:hover {
    color: rgba(27,29,27,1) !important;
    background: white;
  }
`


import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaLink } from "react-icons/fa";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(27,29,27,1);
  color: white;
  height: 200px;
  padding-top: 30px;
`
export const FooterContent = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`
export const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
`
export const FooterTitle = styled.p`
  font-size: 20px;
  letter-spacing: 0.4px;
`
export const FooterLink = styled(Link)`
  font-size: 20px;
  color: white;
  :hover {
    color: white;
    opacity: 0.7;
    text-decoration: none;
  }
`
export const ExternalLink = styled.a`
  font-size: 16px;
  padding-bottom: 5px;
  color: white;
  :hover {
    color: white;
    opacity: 0.7;
    text-decoration: none;
  }
`
export const FooterIcon = styled.img`
`
export const LinkIcon = styled(FaLink)`
  font-size: 10px;
  fill: white;
`
export const Copyright = styled.p`
  font-size: 12px;
`
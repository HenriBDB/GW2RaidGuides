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
  padding-top: 30px;
  min-height: 200px;
`
export const FooterContent = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-bottom: 25px;
  @media(max-width: 650px) {
    flex-direction: column;
  }
`
export const MobileWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media(max-width: 650px) {
    margin-bottom: 20px;
  }
  @media(max-width: 350px) {
    flex-direction: column;
  }
`
export const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
  @media(max-width: 650px) {
    align-items: center;
  }
  @media(max-width: 350px) {
    margin-bottom: 20px;
  }
`
export const FooterTitle = styled.p`
  font-family: "Noto serif";
  font-size: 20px;
  letter-spacing: 0.4px;
  @media(max-width: 870px) {
    font-size: 16px;
  }
`
export const FooterLink = styled(Link)`
  font-family: "Noto serif";
  font-size: 20px;
  color: white;
  :hover {
    color: white;
    opacity: 0.7;
    text-decoration: none;
  }
  @media(max-width: 870px) {
    font-size: 16px;
  }
`
export const ExternalLink = styled.a`
  font-family: "Noto serif";
  font-size: 16px;
  padding-bottom: 5px;
  color: white;
  :hover {
    color: white;
    opacity: 0.7;
    text-decoration: none;
  }
  @media(max-width: 870px) {
    font-size: 14px;
  }
`
export const FooterIcon = styled.img`
@media(max-width: 870px) {
  height: 25px;
}
`
export const LinkIcon = styled(FaLink)`
  font-size: 10px;
  fill: white;
`
export const Copyright = styled.p`
  font-family: 'Noto Serif';
  font-size: 12px;
  text-align: center;
`
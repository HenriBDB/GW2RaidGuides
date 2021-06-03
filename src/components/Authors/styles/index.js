import styled from "styled-components";
import { FaLaptopCode, FaYoutube, FaDiscord, FaGamepad } from "react-icons/fa";

const bgDark = "rgba(0, 0, 0, 0.9)"

export const AuthorsWrapper = styled.div`
  width: 100%;
  background: ${bgDark};
  padding-top: 75px;
  color: white;
  min-height: 100vh;
  height: 100%;
`
export const AuthorsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`
export const Title = styled.h2`
  margin-top: 5rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  text-align: center;
`
export const AuthorsRow = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
export const AuthorsCol = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 50px 20px;
`
export const AuthorsImg = styled.img`
  border: 1px solid white;
`
export const AuthorsName = styled.h3`
  text-align: center;
  margin-bottom: 15px;
  letter-spacing: 1.5px;
  font-size: 1.5rem;
  width: 100%;
  border-bottom: 1px solid white;
  border-left: 1px solid white;
  border-right: 1px solid white;
  background: ${bgDark};
`
export const AuthorsRole = styled.h5`
`
export const CoderIcon = styled(FaLaptopCode)`
  font-size: 25px;
  fill: white;
  margin-right: 8px;
`
export const ContentIcon = styled.img`
  margin-right: 8px;
`
export const Socials = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`
export const YtIcon = styled(FaYoutube)`
  font-size: 25px;
  fill: white;
  margin-right: 25px;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    fill: red;
  }
`
export const DiscordIcon = styled(FaDiscord)`
  font-size: 25px;
  fill: white;
  margin-right: 25px;
  transition: 0.3s;
  :hover {
    fill: #7289DA;
  }
`
export const GameIcon = styled(FaGamepad)`
  font-size: 25px;
  fill: white;
  transition: 0.3s;
  :hover {
    fill: #8C0061;
  }
`
export const Link = styled.a`
`
export const TooltipText = styled.p`
  position: absolute;
  visibility: hidden;
  color: #fff;
  padding: 5px 8px;
  font-size: 12px;
  top: 26px;
  width: 130px;
  text-align: center;
`
export const Tooltip = styled.div`
  position: relative;
  & ${DiscordIcon}:hover + ${TooltipText} {
     visibility: visible;
     background-color: #7289da;
     left: -100%;
  }
  & ${GameIcon}:hover + ${TooltipText} {
    visibility: visible;
    background-color: #8C0061;
    left: -200%;
 }
`
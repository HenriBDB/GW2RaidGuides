import styled, {keyframes} from "styled-components";

const bgDark = "rgba(0, 0, 0, 0.9)"

const slideInLeft = keyframes`
  0% {
    transform: translate(-100%, 0);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
`
const slideInRight = keyframes`
  0% {
    transform: translate(100%, 0);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
`
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
export const HomeContainer = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    background: ${bgDark};
    padding-top: 4rem;
    display: flex;
    overflow: hidden;
    @media (max-width: 870px) {
        flex-direction: column;
    }
`
export const RightContainer = styled.div`
    display: flex;
    position: relative;
    width: 50%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: luminosity;
    background-color: rgba(108, 57, 83, 0.9);
    transition: 0.6s;
    transform: translate(100%, 0);
    animation: ${slideInRight} 2s ease-out 1s;
    animation-fill-mode: forwards;
    :hover {
        background-color: rgba(0, 0, 0, 0.3);
    }
    @media (max-width: 870px) {
        width: 100%;
    }
`
export const LeftContainer = styled.div`
    display: flex;
    position: relative;
    width: 50%;
    height: 100%;
    transform: translate(-100%, 0);
    animation: ${slideInLeft} 2s ease-out 1s;
    animation-fill-mode: forwards;
    :hover {
        div:nth-child(1) {
            background-color: #69CCE7;
        }
        div:nth-child(2) {
            background-color: #8ea53a;
        }
        div:nth-child(3) {
            background-color: #CF8D21;
        }
    }
    @media (max-width: 870px) {
        width: 100%;
    }
`
export const PanelTitle = styled.a`
    color: white;
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    margin: 0;
    width: 50%;
    padding: 50px 20px;
    border: 4px solid white;
    transition: 0.2s;
    background: rgba(0,0,0,0.8);
    font-size: 24px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    opacity: 0;
    animation: ${fadeIn} 1s 3s;
    animation-fill-mode: forwards;
    :hover {
        text-decoration: none;
        background: rgba(0,0,0,1);
        color: inherit;
    }
    @media (max-width: 1400px) {
        width: 80%;
    }
    @media (max-width: 870px) {
        width: 50%;
        padding: 25px 10px;
        font-size: 18px;
    }
    @media (max-width: 640px) {
        width: 80%;
        font-size: 16px;
    }
    @media (max-width: 430px) {
        width: 60%;
        span {
            display: block
        }
    }
`
export const Panel = styled.div`
    flex: 1;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
    background-blend-mode: luminosity;
    background-color: #80BFAB;
    transition: 0.6s;
`
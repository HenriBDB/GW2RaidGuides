import styled from "styled-components";

const bgDark = "rgba(0, 0, 0, 0.9)"

export const HomeContainer = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    background: ${bgDark};
    padding-top: 4rem;
`
export const PanelContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    @media (max-width: 1800px) {
       
    }
`
export const Panel = styled.div`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: calc(100vh - 65px - 70px);
    color: #fff;
    position: relative;
    -webkit-transition: all 500ms ease-in;
    background-blend-mode: luminosity;
`
export const PanelTitle = styled.div`
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    width: 100%;
    background: rgba(0,0,0,0.7);
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Link = styled.a`
    position: absolute;
    bottom: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 20px 50px;
    background: rgba(0,0,0,0.8);
    font-size: 24px;
    cursor: pointer;
    min-width: 200px;
    text-decoration: none;
    :hover {
        text-decoration: none;
    }
`

import styled from "styled-components";

const bgDark = "rgba(0, 0, 0, 0.9)"

export const HomeContainer = styled.div`
    width: 100%;
    height: calc(100vh - 65px - 70px);
    background: ${bgDark};
`

export const PanelContainer = styled.div`
    display: flex;
    width: 90vw;
    margin: 0 auto;
    @media (max-width: 480px) {
          width: 100vw;
    }
`
export const Panel = styled.div`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: calc(100vh - 65px - 70px);
    color: #fff;
    cursor: pointer;
    position: relative;
    -webkit-transition: all 500ms ease-in;
`
export const PanelTitle = styled.h3`
    font-size: 24px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
`

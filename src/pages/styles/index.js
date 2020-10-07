import styled from "styled-components"
import dhBackground from '../../assets/backgrounds/dragohunter.jpg';

const dhPrimary = "#47b8e0"
const bgDark = "rgba(28,30,27,0.9)"

export const Wrapper = styled.div`
  background-image: url(${dhBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  padding-top: 3rem;
`
export const Container = styled.div`
  width: 60%;
  padding-right: 15px;
  padding-left: 15px;
  margin: 0 auto;
  background-color: ${bgDark};
  border-top: 4px solid ${dhPrimary};
  @media (max-width:1300px) {
    width: 80%;
  }
  @media (max-width:768px) {
    width: 90%;
  }
  @media (max-width:585px) {
    width: 100%;
  }
`

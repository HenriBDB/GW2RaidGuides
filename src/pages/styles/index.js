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
export const SectionHeader = styled.button`
  outline: none;
  background: none;
  border: none;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.25rem 0 0.25rem 0;
  background-color: rgba(0, 0, 0, 0.8);
  border-top: 2px solid ${dhPrimary};
  border-bottom: 2px solid ${dhPrimary};
  font-weight: 500;
  line-height: 1.2;
  font-size: 1.75rem;
`

export const SectionContent = styled.div`

`
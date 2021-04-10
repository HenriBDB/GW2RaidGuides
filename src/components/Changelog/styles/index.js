import styled from "styled-components";

const bgDark = "rgba(0, 0, 0, 0.9)"

export const ChangelogWrapper = styled.div`
  width: 100%;
  background: ${bgDark};
  padding-top: 75px;
  color: white;
  min-height: 100vh;
  height: 100%;
  padding-bottom: 5rem;
`
export const ChangelogContainer = styled.div`
  width: 60%;
  margin: 0 auto;
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
export const Title = styled.h2`
  margin-top: 5rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  text-align: center;
`
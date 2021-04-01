import styled from "styled-components";

const bgDark = "rgba(0, 0, 0, 0.9)"
const color = "#69CCE7"

export const ErrorContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${bgDark};
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ErrorHeader = styled.p`
  font-size: 3rem;
`
export const ErrorMessage = styled.p`
  font-size: 1.5rem;
  text-align: center;
`
export const BackHome = styled.a`
  margin-top: 2rem;
  font-size: 1.5rem;
  padding: 20px 50px;
  color: ${bgDark};
  background: ${color};
  border: 2px solid transparent;
  cursor: pointer;
  min-width: 250px;
  text-decoration: none;
  text-align: center;
  transition: 0.4s;
  :hover {
      color: ${color};
      text-decoration: none;
      background: transparent;
        border: 2px solid ${color};
  }
`

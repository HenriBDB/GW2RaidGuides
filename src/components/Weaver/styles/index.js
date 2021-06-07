import styled from "styled-components"
import eleBackground from '../../../assets/backgrounds/elementalist.jpg'

const elePrimary = "#f04646"
const bgDark = "rgba(28,30,27,0.9)"

export const Wrapper = styled.div`
  background-image: url(${eleBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  padding-top: 7rem;
  padding-bottom: 4rem;
`
export const Container = styled.div`
  width: 60%;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 3rem;
  margin: 0 auto;
  background-color: ${bgDark};
  border-top: 4px solid ${elePrimary};
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
export const GuideDescription = styled.div`

`
export const SectionContainer = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  .gw2a--M9jBV :first-child{
    color: ${elePrimary};
  }
  .gw2a--M9jBV a:hover {
    text-decoration-color: ${elePrimary};
  }
`
export const SectionContent = styled.div`

`
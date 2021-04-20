import styled from "styled-components"
import commBackground from '../../../assets/backgrounds/commander.jpg'

const commPrimary = "#B125D3"
const bgDark = "rgba(28,30,27,0.9)"

export const Wrapper = styled.div`
  background-image: url(${commBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom;
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
  border-top: 4px solid ${commPrimary};
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
    color: ${commPrimary};
  }
  .gw2a--M9jBV a:hover {
    text-decoration-color: ${commPrimary};
  }
`
export const SectionContent = styled.div`
`
export const BoonRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  width: 100%;
  @media (max-width:720px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const BoonColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  @media (max-width:720px) {
    width: 100%;
    margin-bottom: 0.8rem;
  }
`
export const BoonColumnDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  width: 60%;
  @media (max-width:920px) {
    width: 50%;
  }
  @media (max-width:720px) {
    width: 100%;
    text-align: center;
  }
`
export const BoonOnDemand = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 3rem;
  @media (max-width:607px) {
    margin-left: 1.5rem;
  }
  @media (max-width:584px) {
    margin-left: 2rem;
  }
  @media (max-width:530px) {
    margin-right: 2rem;
  }
  @media (max-width:402px) {
    margin-right: 0;
  }
`
export const CondiRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width:720px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const CondiColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  @media (max-width:720px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 0.7rem;
  }
  @media (max-width:420px) {
    justify-content: space-between;
  }
  @media (max-width:381px) {
    flex-direction: column;
    justify-content: center;
    > div {
      margin-top: 10px !important;
      margin-bottom: 10px !important;
    }
  }
`
export const CondiColumnDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  width: 70%;
  @media (max-width:720px) {
    width: 100%;
  }
`
export const SquadTemplatesContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const SquadRole = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > p {
    margin-top: 5px;
    font-weight: normal;
    text-transform: uppercase;
    font-size: 0.6rem;
    font-style: italic;
    text-align: center;
  }
`
export const RoleSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`
export const RoleSectionRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 260px;
  width: 550px;
  justify-content: center;
  @media (max-width:560px) {
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
`
export const ProviderSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 40%;
  @media (max-width:858px) {
    width: 35%;
  }
  @media (max-width:560px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`
export const ProviderImg = styled.img`
  width: 200px;
  height: 200px;
  @media (max-width:858px) {
    width: 150px;
    height: 150px;
  }
  @media (max-width:560px) {
    width: 100px;
    height: 100px;
  }
`
export const ProviderName = styled.div`
`
export const BoonsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 60%;
  @media (max-width:858px) {
    width: 65%;
  }
  @media (max-width:560px) {
    width: 100%;
  }
`
export const DescriptionSection = styled.div`
  margin-top: 2rem;
  max-width: 900px;
`

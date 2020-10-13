import styled from "styled-components"
import { motion } from "framer-motion"
import dhBackground from '../../../assets/backgrounds/dragohunter.jpg'
import { FaYoutube } from 'react-icons/fa';

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
  padding-bottom: 3rem;
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
export const GuideDescription = styled.div`

`
export const SectionHeader = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.25rem 0 0.25rem 0;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-top: 2px solid ${dhPrimary};
  border-bottom: 2px solid ${dhPrimary};
  font-weight: 500;
  line-height: 1.2;
  font-size: 1.75rem;
  position: relative;
  cursor: pointer;
  > p {
    margin: 0;
  }
`
export const SectionContainer = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
`

export const ArrowMoreButton = styled(motion.img)`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 2%;
  top: 23%;
`
export const SectionContent = styled.div`

`
export const VideoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`
export const VideoPreviewWrapper = styled.div`
  width: 65%;
  cursor: pointer;
  position: relative;
    :hover :nth-child(2) {
    transform: translate(-50%, -50%) scale(1.5)
  }
`
export const VideoPreview = styled.img`
  width: 100%;
  cursor: pointer;
`
export const YoutubePlay = styled(FaYoutube)`
  font-size: 90px;
  fill: red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: transform .2s;
`
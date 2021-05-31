import styled from "styled-components";
import { motion } from "framer-motion"
import { ArrowUpS } from '@styled-icons/remix-line/ArrowUpS';
import { FaYoutube } from 'react-icons/fa';

export const ArrowUp = styled(ArrowUpS)`
  height: 3rem;
  font-size: 4rem;
  position: fixed; 
  right: 2rem;
  bottom: 1rem;
  z-index: 99999;
  cursor: pointer;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  opacity: 1;
    :hover{
        opacity: 0.5
    }
    @keyframes fadeIn {
        0% {
         opacity: 0;
    }
    100% {
        opacity: 1;
        }
    }
`
export const ArrowMoreButton = styled(motion.img)`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 2%;
  top: 23%;
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
export const VideoWrapperMultiple = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap
`
export const VideoPreviewWrapperMultiple = styled.div`
  width: 30%;
  cursor: pointer;
  margin: 1%;
  position: relative;
    :hover :nth-child(2) {
    transform: translate(-50%, -50%) scale(1.5)
  }
  @media (max-width:991px) {
    width: 40%;
    margin: 2%
  }
  @media (max-width:585px) {
    width: 80%;
    margin: 4%
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
export const YoutubePlaySmall = styled(FaYoutube)`
  font-size: 50px;
  fill: red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: transform .2s;
`
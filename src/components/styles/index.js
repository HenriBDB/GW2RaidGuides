import styled from "styled-components";
import { motion } from "framer-motion"
import { ArrowUpS } from '@styled-icons/remix-line/ArrowUpS';

export const ArrowUp = styled(ArrowUpS)`
  height: 3rem;
  font-size: 4rem;
  position: fixed; 
  right: 2rem;
  bottom: 1rem;
  z-index: 999;
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

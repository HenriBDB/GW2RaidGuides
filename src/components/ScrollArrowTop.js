import React, { useState } from 'react';
import styled from "styled-components"
import { ArrowUpS } from '@styled-icons/remix-line/ArrowUpS'

const ScrollArrow = () => {

    const ArrowUp = styled(ArrowUpS)`
        height: 3rem;
        font-size: 4rem;
        position: fixed; 
        right: 2rem;
        bottom: 1rem;
        z-index: 999;
        cursor: pointer;
        animation: fadeIn 0.3s;
        transition: opacity 0.4s;
        background: #6DBF52;
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
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <ArrowUp
            onClick={scrollTop}
            style={{ display: showScroll ? 'flex' : 'none'}}
        />
    )
}

export default ScrollArrow;
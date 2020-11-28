import React, { useState } from 'react';
import { ArrowUp } from './styles'

const ScrollArrow = () => {
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
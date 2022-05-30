import React, { useState } from 'react';
import './scroll.css'
const ScrollDown = () => {
    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300 && scrolled <= 2000) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);
    return (
        <button
            onClick={scrollToTop}
            id="myBtn"
            style={{ display: visible ? 'inline' : 'none' }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
        </button>
    );
}

export default ScrollDown;

import React from 'react';
import './home.css'
import ParticlesFun from './Particles';
const Home = () => {
    const scrollToDown = () => {
        window.scrollTo({
            top: 700,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };
    return (
        <>
            <ParticlesFun />
            <div className='home'>
                <div className="home-text">
                    <p>Hey there !</p>
                    <h1>I am <span>Amine Ichou</span></h1>
                    <h3>Web Developer</h3>
                    <div className="home-btn">
                        <button
                        onClick={scrollToDown}
                        >
                            See more
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="home-image">
                    <img
                        src="./images/homeimg.png"
                        alt=""
                    />
                </div>
            </div>
        </>
    );
}

export default Home;

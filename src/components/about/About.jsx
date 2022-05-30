import React from 'react';
import './about.css'
const About = () => {
    return (
        <div className='about'>
            <div className="about-image">
                <img
                    src='./images/aboutimg.jpg'
                    alt=''
                />
            </div>
            <div className="about-text">
                <h3 style={{ textAlign: 'center',padding: "10px"}}><span>About Me</span></h3>
                <p>
                    My name is Amine Ichou, i am 20 years
                    old and i am a Web developer .
                    I've been coding since 2017,
                    In 2018 i studied Data structures and
                    algo in C and Python languages,
                    in 2019 i started front-end web
                    development with Html, Css and JavaScript
                    then React in 2020, i started Back-end in 2021.
                </p>
            </div>
        </div>
    );
}

export default About;

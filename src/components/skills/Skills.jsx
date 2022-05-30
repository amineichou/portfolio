import React from 'react';
import './skills.css';
const Skills = () => {

    return (
        <div className="skills-container">
            <h3 style={{ textAlign: 'center', padding:'10px' }}><span>My Skills</span></h3>
            <div className='skills'>
                <div className="skill">
                    <label htmlFor='file'>HTML</label>
                    <progress id="file" value="95" max="100"></progress>
                </div>
                <div className="skill">
                    <label htmlFor='file'>CSS</label>
                    <progress id="file" value="80" max="100"></progress>
                </div>
                <div className="skill">
                    <label htmlFor='file'>Bootstrap</label>
                    <progress id="file" value="65" max="100"></progress>
                </div>
                <div className="skill">
                    <label htmlFor='file'>JavaScript</label>
                    <progress id="file" value="85" max="100"></progress>
                </div>
                <div className="skill">
                    <label htmlFor='file'>React</label>
                    <progress id="file" value="75" max="100"></progress>
                </div>
                <div className="skill">
                    <label htmlFor='file'>Node</label>
                    <progress id="file" value="60" max="100"></progress>
                </div>
                <div className="skill">
                    <label htmlFor='file'>Python</label>
                    <progress id="file" value="60" max="100"></progress>
                </div>
                <div className="skill">
                    <label htmlFor='file'>Adobe XD</label>
                    <progress id="file" value="75" max="100"></progress>
                </div>
            </div>
        </div>
    );
}

export default Skills;

import React from 'react';
import './projects.css'
const Projects = () => {
    return (
        <div className='projects-container'>
            <h3 style={{ textAlign: 'center' }}><span>Some Of My Projects</span></h3>
            <div className='projects'>
                <div className="project-elemnets">
                    <a
                        href="https://amineichou.github.io/WeatherApp-reactJs/"
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        <img
                            src="./images/google.jpg"
                            alt=""
                        />
                        <p>Google Clone</p>
                    </a>
                </div>
                <div className="project-elemnets">
                    <a
                        href="https://amineichou.github.io/WeatherApp-reactJs/"
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        <img
                            src="./images/weatherApp.png"
                            alt=""
                        />
                        <p>Current Weather App</p>
                    </a>
                </div>
                <div className="project-elemnets">
                    <a
                        href="https://amineichou.github.io/WeatherApp-reactJs/"
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        <img
                            src="./images/movies.jpg"
                            alt=""
                        />
                        <p>MoviesApp</p>
                    </a>
                </div>
            </div>
            <div className="SeeAllProjects">
                <div>
                    <a
                        href="https://github.com/amineichou">
                        See All Projects
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;

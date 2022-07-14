import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const ParticlesFun = () => {
    const particlesInit = async (main) => {
        //console.log(main);
        console.log('loading...');
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };
        const particlesLoaded = (container) => {
            //console.log(container);
            console.log('Loaded!');
        };
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            style={{}}
            options={
                {
                    background: {
                        color: {
                            value: "",
                        },
                    },
                    style: {
                        position:'absolute',
                        top: "60px",
                        left: 0,
                        width: "100%",
                        height: "450px",
                        fullScreen: false
                    },
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: false,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#376EBC",
                        },
                        links: {
                            color: "#376EBC",
                            distance: 150,
                            enable: true,
                            opacity: 0.4,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.4,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }
            }
        />
    );
}

export default ParticlesFun;

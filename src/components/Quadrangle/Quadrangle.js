import React, { Component } from 'react'
import Particles from 'react-particles-js';
import ReactTypingEffect from 'react-typing-effect';

const Quadrangle = () => {
    return (
        <div>
             <div className='particle-container'>
                    <Particles id="particlejs"
                        params={{
                            particles: {
                                number: {
                                    value: 180,
                                    density: {
                                        enable: true,
                                        value_area: 800
                                    }
                                },
                                color: {
                                    value: ['#00f5ff', '#ff1616', '#fffc00'],
                                },
                                shape: {
                                    type: 'circle',
                                    stroke: {
                                        width: 0,
                                        color: '#fff'
                                    },
                                    polygon: {
                                        nb_sides: 6
                                    },
                                    image: {
                                        src: 'https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png',
                                        width: 10,
                                        height: 10
                                    }
                                },

                                opacity: {
                                    value: 1,
                                    random: false,
                                    anim: {
                                        enable: false,
                                        speed: 100,
                                        opacity_min: 0.1,
                                        sync: false
                                    }
                                },
                                size: {
                                    value: 3,
                                    random: true,
                                    anim: {
                                        enable: false,
                                        speed: 1500,
                                        size_min: 10,
                                        sync: false
                                    }
                                },
                                line_linked: {
                                    enable: true,
                                    distance: 100,
                                    color: {
                                        value: '#fff',
                                    },
                                    opacity: 0.5,
                                    width: .8
                                },
                                move: {
                                    enable: true,
                                    speed: 3,
                                    direction: 'none',
                                    random: false,
                                    straight: false,
                                    out_mode: 'out',
                                    bounce: false,
                                    attract: {
                                        enable: false,
                                        rotateX: 600,
                                        rotateY: 1200
                                    }
                                }
                            },
                            interactivity: {
                                detect_on: 'window',
                                events: {
                                    onhover: {
                                        enable: true,
                                        mode: 'repulse'
                                    },
                                },
                                modes: {
                                    'repulse': {
                                        distance: 70,
                                        duration: 0.4
                                    },
                                    'push': {
                                        particles_nb: 4
                                    }
                                }
                            },
                            retina_detect: true
                        }}
                    />
                    <div className='main'>
                        <div className='typing' style={{fontSize: '1rem;'}}>
                            <h1 style={{fontSize: '1rem;'}}>Coming Soon</h1>
                            <ReactTypingEffect 
                                style={{fontSize: '3rem'}}
                                className='typingEffect'
                                text={[' . . . ', ' . . . . . ', '. . . . . .']}
                                speed={100}
                                eraseSpeed={100}
                                typingDelay={100}
                                eraseDelay={100}
                            />
                        </div>
                    </div>
                </div>
               
        </div>
    );
}

export default Quadrangle;

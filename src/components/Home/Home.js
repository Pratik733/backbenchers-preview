import React, { Component } from 'react'
import '../Header/Header.css'
import './Home.css'
import Particles from 'react-particles-js';
import Display from './Display';
import Uniqueness from './Uniqueness'

export default class Home extends Component {
    render() {
        return (
            <div className='home-container'>
                <div className='particle-container'>
                    <Particles
                        className='particles'
                        params={{
                            "particles": {
                                "number": {
                                    "value": 90,
                                },
                                "size": {
                                    "value": 3
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                    }
                                }
                            }
                        }} />
                    <div className='main'>
                        <div>
                            <h1>Introduction</h1>
                            <p>
                                BackBenchers Edtech is an alternative online education platform, that teaches you skill relevant to the present-day world, to help  you develop the tools, and mindset you need for building great careers.
                            </p>
                            {/* <p>
                                Peer Experts acrosss various disciplines help  you learn, mentor you and transform your career prospects
                            </p> */}
                            <button>
                                Whats more?
                            </button>
                            <p>BackBenchers Edtech is not all - work - and - no - play. It is desgin to make sure you enjoy the process, by giving you a gamified learning experience.</p>
                        </div>
                    </div>
                    {/*
                    <div class="outer-wrapper">
                        <div class="wrapper">
                            <img src={Bb1} class="slide one" />
                            <img src={Bb2} class="slide two" />
                            <img src={Bb3} class="slide three" />
                            <img src={Bb4} class="slide four" />
                        </div>
                    </div> */}
                </div>
                <div className="uniqueness py-24">
                    <div class="flex flex-wrap w-full mb-16 flex-col items-center text-center">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Uniqueness</h1>
                        <div class="h-1 w-20 bg-yellow-500 rounded"></div>
                    </div>
                    <Uniqueness />
                </div>

                <div className="features">
                    <section class="text-gray-600 body-font">
                        <div class="feature-container px-5 py-24 mx-auto">
                            <div class="feature-header flex flex-wrap w-full mb-16 flex-col items-center text-center">
                                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Features</h1>
                                <div class="h-1 w-20 bg-yellow-500 rounded"></div>
                            </div>
                            <Display />
                        </div>
                    </section>
                </div>
                {/* <div className="careers">
                    <div>
                        <h3>Careers</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid assumenda ducimus nisi nemo quos consequuntur iste velit qui beatae error non soluta cum quidem magnam odit laudantium fuga, veritatis dignissimos.</p>
                    </div>
                </div> */}
                <div className="aboutUs">
                    <section class="text-gray-600 body-font mx-auto">
                    <div class="about-header flex flex-wrap w-full mb-16 flex-col items-center text-center">
                                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">About Us</h1>
                                <div class="h-1 w-20 bg-yellow-500 rounded"></div>
                            </div>
                        <div class="about-container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                            </div>
                            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                                    <br class="hidden lg:inline-block" />readymade gluten
                                </h1>
                                <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                                <div class="flex justify-center">
                                    {/* <button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
                                </div>
                            </div>
                        </div>
                    </section>                </div>
                {/* <div className="blogs">
                    <div>
                        <h3>Blogs</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, inventore ratione! Sunt illo adipisci dolore mollitia est ut aliquid, sequi delectus velit ex obcaecati, molestiae quis eius? Ullam, quos assumenda.</p>
                    </div>
                </div> */}
                <div className="bvc">
                    <div>
                        <h3>Euphoria</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim consequuntur quasi consequatur, rem est possimus voluptatum velit voluptas, soluta officiis saepe, laudantium eveniet odio consectetur fugit natus alias deserunt obcaecati!</p>
                    </div>
                </div>
            </div>
        )
    }
}


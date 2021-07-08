import React, { Component } from 'react'
import '../Header/Header.css'
import './Home.css'
import Particles from 'react-particles-js';
import Display from './Display';

export default class Home extends Component {
    render() {

        return (
            <div>
                <div className='container'>
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
                                For the students,By the students interaction model ,we break the main communication barrier between teachers and students.
                                We focus and assure you to not only shape your childs coding skills but also academic and softskills too,
                                with <span>INDIA'S 1st VIRTUAL CAMPUS</span> we ensure that your child chooses the best and appropriate carrer option to pursue on.ss
                            </p>
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
                <div className="uniqueness">
                    <section class="text-gray-600 body-font">
                        <div class="container px-5 py-24 mx-auto">
                        <   div class="flex flex-wrap w-full mb-16 flex-col items-center text-center">
                                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Uniqueness</h1>
                                <div class="h-1 w-20 bg-blue-900 rounded"></div>
                            </div>
                            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                                <div class="p-2 sm:w-1/2 w-full">
                                    <div class="bg-gray-100  rounded flex p-4 h-full items-center scale-50 hover:scale-95 shadow-md ">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-blue-900 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span class="title-font font-medium">Real-world relevance</span>
                                    </div>
                                </div>
                                <div class="p-2 sm:w-1/2 w-full">
                                    <div class="bg-gray-100  rounded flex p-4 h-full items-center scale-50 hover:scale-95 shadow-md ">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-blue-900 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span class="title-font font-medium">Learning Methods</span>
                                    </div>
                                </div>
                                <div class="p-2 sm:w-1/2 w-full">
                                    <div class="bg-gray-100  rounded flex p-4 h-full items-center scale-50 hover:scale-95 shadow-md ">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-blue-900 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span class="title-font font-medium">Credibility of Teachers</span>
                                    </div>
                                </div>
                                <div class="p-2 sm:w-1/2 w-full">
                                    <div class="bg-gray-100  rounded flex p-4 h-full items-center scale-50 hover:scale-95 shadow-md ">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-blue-900 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span class="title-font font-medium">Relevance of Curriculum</span>
                                    </div>
                                </div>
                                <div class="p-2 sm:w-1/2 w-full">
                                    <div class="bg-gray-100  rounded flex p-4 h-full items-center scale-50 hover:scale-95 shadow-md ">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-blue-900 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span class="title-font font-medium">Interaction and Guidance</span>
                                    </div>
                                </div>
                                <div class="p-2 sm:w-1/2 w-full">
                                    <div class="bg-gray-100  rounded flex p-4 h-full items-center scale-50 hover:scale-95 shadow-md ">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-blue-900 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span class="title-font font-medium">Flexibility of Schedules</span>
                                    </div>
                                </div>
                                <div class="p-2 sm:w-1/2 w-full">
                                    <div class="bg-gray-100  rounded flex p-4 h-full items-center scale-50 hover:scale-95 shadow-md ">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-blue-900 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span class="title-font font-medium">Learning environment</span>
                                    </div>
                                </div>
                                <div class="p-2 sm:w-1/2 w-full">
                                    <div class="bg-gray-100  rounded flex p-4 h-full items-center scale-50 hover:scale-95 shadow-md ">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-blue-900 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span class="title-font font-medium">Time Investment</span>
                                    </div>
                                </div>
                                <div class="p-2 sm:w-1/2 w-full">
                                    <div class="bg-gray-100  rounded flex p-4 h-full items-center scale-50 hover:scale-95 shadow-md ">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-blue-900 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span class="title-font font-medium">Cost and Affordability</span>
                                    </div>
                                </div>
                                <div class="p-2 sm:w-1/2 w-full">
                                    <div class="bg-gray-100  rounded flex p-4 h-full items-center scale-50 hover:scale-95 shadow-md ">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-blue-900 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span class="title-font font-medium">Unique Refun Policy</span>
                                    </div>
                                </div>
                                <div class="p-2 sm:w-1/2 w-full">
                                    <div class="bg-gray-100  rounded flex p-4 h-full items-center scale-50 hover:scale-95 shadow-md ">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-blue-900 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span class="title-font font-medium">Unique Refund Policy</span>
                                    </div>
                                </div>
                                <div class="p-2 sm:w-1/2 w-full">
                                    <div class="bg-gray-100  rounded flex p-4 h-full items-center scale-50 hover:scale-95 shadow-md ">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-blue-900 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span class="title-font font-medium">Placement and Career Oppurtunities</span>
                                    </div>
                                </div>
                                <div class="p-2 sm:w-1/2 w-full">
                                    <div class="bg-gray-100  rounded flex p-4 h-full items-center scale-50 hover:scale-95 shadow-md ">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-blue-900 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span class="title-font font-medium">Community and Networking</span>
                                    </div>
                                </div>
                                <div class="p-2 sm:w-1/2 w-full">
                                    <div class="bg-gray-100  rounded flex p-4 h-full items-center scale-50 hover:scale-95 shadow-md ">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-blue-900 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span class="title-font font-medium">Interlinked Services</span>
                                    </div>
                                </div>
                                </div>

                           {/* <button class="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Button</button> */}
                        </div>
                    </section>
                </div>
                <div className="features">
                    <section class="text-gray-600 body-font">
                        <div class="container px-5 py-24 mx-auto">
                            <div class="flex flex-wrap w-full mb-16 flex-col items-center text-center">
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
                <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br class="hidden lg:inline-block"/>readymade gluten
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


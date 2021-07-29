import React from 'react';
import './Demo.css'

const Demo = () => {
    return (
        <div>
            <div className="demo ">
                <div class="demo-container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                    <div class="demo-contents lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
                        <h1 class="title-font sm:text-4xl text-3xl  font-medium text-gray-100">Beta Testing Phase 2
                        </h1>
                        <p class=" leading-relaxed text-gray-300 w-4/5 pt-2">We are back with our exclusive beta testing 2 along with  some exciting offers
                            Moreover, we have added one more option with : </p>
                        <div className="">
                            <ul className="list-disc text-gray-300 ml-5">
                                <li >CODING</li>
                                <li>MATHEMATICS TIPS & TRICKS</li>
                            </ul>
                            <div className="py-5">
                                <h1 className="text-2xl font-bold text-yellow-500">Course Contents</h1>
                                <ul className="list-disc px-10 text-gray-300">
                                    <li>1:1 Live classes</li>
                                    <li>Recorded Sessions</li>
                                    <li>Conceptual Test</li>
                                    <li>Doubt & difficulty</li>
                                    <li>Mentorship</li>
                                    <li>4+ types of notes</li>
                                    <li>Meme based Learning</li>
                                    <li>Boundless Library</li>
                                    <li>Projects & certifications</li>
                                    <li>Alumni Network</li>
                                    <li>India's First Gamified Virtual Campus</li>
                                    <li>Seminars/webinars/Fests/Events</li>
                                    <li>& many more...</li>
                                </ul>
                            </div>
                            <h1 className="text-2xl font-bold text-yellow-500">Subscription Fees</h1>
                            <div className="py-2">
                                <ul className="price-list text-gray-300">
                                    <li>For CODING<span className="subs-price text-red-400"> ₹99/Student</span></li>
                                    <li>For MATHEMATICS TIPS & TRICKS<span className="subs-price text-red-400">₹99/Student</span></li>
                                    <li>For COMBO COURSE REGISTRATION<br/>[ CODING + MATHEMATICS TIPS & TRICKS ] <span className="subs-price text-red-400">₹149/Student</span></li>
                                    <h1 className="py-5 pt-16 font-medium text-lg text-white">Special Discount For Group Registration[Only valid for Combo Course Registration]</h1>
                                    <li>Registration of 3 Students<span className="subs-price text-red-400">₹125/student</span></li>
                                    <li>Registration of 4 Students <span className="subs-price text-red-400">₹99/student</span></li>
                                    <li>Registration of 5+ students<span className="subs-price text-red-400">₹75/student</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="flex justify-center w-4/5">
                            <a target='_blank' href="https://backbenchers-edtech.typeform.com/single-course">
                                <button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg">Single Course</button>
                            </a>
                            <a target='_blank' href="https://backbenchers-edtech.typeform.com/combo-course">
                                <button class="ml-4 inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg">Combo Courses</button>
                            </a>
                        </div>
                        <div className="w-3/4 py-5 pt-10">
                            <h1 className="text-2xl text-white">What’s more?</h1>
                            <p className="text-gray-400">All the proceedings[Subscription Fees] will be donated for a social cause which will either be for flood relief  or Orphanage or both</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Demo;

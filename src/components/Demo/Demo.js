import React from 'react';
import './Demo.css'

const Demo = () => {
    return (
        <div>
            <div className="demo px-24 py-24">
                <div class="demo-container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="demo-contents lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-400">Beta Testing Phase 2
                        </h1>
                        <p class="mb-8 leading-relaxed text-gray-200">We are back with our exclusive beta testing 2 along with  some exciting offers
Moreover, we have added one more option with : </p>
                        <div class="flex justify-center">
                            <a target='_blank' href="https://backbenchers-edtech.typeform.com/single-course">
                                <button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg">Single Course</button>
                            </a>
                            <a target='_blank' href="https://backbenchers-edtech.typeform.com/combo-course">
                                <button class="ml-4 inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg">Combo Courses</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Demo;

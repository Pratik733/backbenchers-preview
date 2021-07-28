import React from 'react';
import Logo from '../assets/images/Logo.png'
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer class="text-gray-400 bg-gray-800 body-font">
                <div class="footer-container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
                            <img src={Logo} alt="" className='img-header' />
                        </a>
                    </div>
                    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div class="lg:w-1/3 md:w-1/2 w-full px-5">
                            <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">COMPANY</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-400 hover:text-white" href='#'>Discord Server</a>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white" href='#'>Whatsapp</a>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white" href='#'>Euphoria</a>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white" href='#'>Work with us</a>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white" href='#'>Gamified Learning</a>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white" href='#'>Apply for Students Developer Program</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 w-full px-5">
                            <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Products</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-400 hover:text-white" href='#'>Meme Cheatsheets</a>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white" href='#'>Interactive Classes</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 w-full px-5">
                            <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">About</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <Link
                                        exact
                                        to='/privacy'
                                        className="text-gray-400 hover:text-white cursor-pointer"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        exact
                                        to='/services'
                                        className="text-gray-400 hover:text-white cursor-pointer"
                                    >
                                        Live Mentorship T&C
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        exact
                                        to='/guidelines'
                                        className="text-gray-400 hover:text-white cursor-pointer"
                                    >
                                        Guidelines
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        exact
                                        to='/refund'
                                        className="text-gray-400 hover:text-white cursor-pointer"
                                    >
                                        Refund Policy
                                    </Link>

                                </li>
                                <li>
                                    <Link
                                        exact
                                        to='/code'
                                        className="text-gray-400 hover:text-white cursor-pointer"
                                    >
                                        Code of Conduct
                                    </Link>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-800 bg-opacity-75">
                    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p class="text-gray-400 text-sm text-center sm:text-left">© Copyrights 2021 —
                            <a href="#" rel="noopener noreferrer" class="text-gray-500 ml-1" target="_blank">@BackBenchers Edtech</a>
                        </p>
                        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a class="text-gray-400 hover:text-white" href="#">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a class="ml-3 text-gray-400 hover:text-white" href="#">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a class="ml-3 text-gray-400 hover:text-white" href="#">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a class="ml-3 text-gray-400 hover:text-white" href="#">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;

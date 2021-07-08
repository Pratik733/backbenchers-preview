import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Logo from '../assets/images/Logo.png'

const Header = () => {
  return (
    <div>
      <nav className="header">
        <img src={Logo} alt="" className='img-header' />
        <ul className='nav-items'>
          <li>
            <Link exact className='nav-link link' to='/'>Home</Link>
          </li>
          <li>
            <Link exact className='nav-link link' to='/feature'>Feature</Link>
          </li>
          <li>
            <Link exact className='nav-link link' to='/pricing'>Pricing</Link>
          </li>
          <li>
            <Link exact className='nav-link link' to='/demo'>Demo</Link>
          </li>
          <li>
            <Link exact className='nav-link link' to='/courses'>Courses</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

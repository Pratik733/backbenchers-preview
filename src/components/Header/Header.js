import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Logo from '../assets/images/Logo.png'

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
          <img src={Logo} alt="" className='img-header' />
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/feature"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Feature
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/pricing"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/demo"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Demo
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/courses"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Courses
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
      {/* <nav className="header">
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
      </nav> */}
    </div>
  );
}

export default Header;

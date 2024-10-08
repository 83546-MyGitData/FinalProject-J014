import { Link } from 'react-router-dom';
import './Navbar.css';  // Import the CSS file
import { FaUserAlt } from "react-icons/fa";
import logo from './logo.png';
import React, { useState, useEffect } from 'react';



const Navbar = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for token in session storage
    const token = sessionStorage.getItem('jwt');
    setIsAuthenticated(!!token);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Clear the token from session storage and update state
    sessionStorage.removeItem('jwt');
    setIsAuthenticated(false);
    console.log('Logged out');
  };

  return (
    
    <nav className='navbar navbar-expand-lg bg-body-tertiary' data-bs-theme='dark'>
      <div className='container-fluid'>
        <a className="navbar-brand" href="#">
          <img src={logo} alt=''className='navbar_logo' style={{width:'50px', height:'50px'}}/>
          ᗷᗝᗝᛕᒪƳ.Ꭵᗝ      </a>

        <div className='collapse navbar-collapse' style={{marginTop:'5px'}} id='navbarSupportedContent'>
          <ul className='nav navbar-nav d-lg-inline-flex  mx-lg-5'>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Shop By Category
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Science Fiction</a></li>
                <li><a className="dropdown-item" href="#">Mystery</a></li>
                <li><a className="dropdown-item" href="#">Religion & Philosophy</a></li>
                <li><a className="dropdown-item" href="#">Horror</a></li>
                <li><a className="dropdown-item" href="#">Adventure Fiction</a></li>
                <li><a className="dropdown-item" href="#">Historical Fiction</a></li>
                <li><a className="dropdown-item" href="#">Literacy Fiction</a></li>
                <li><a className="dropdown-item" href="#">Autobiography</a></li>
                <li><a className="dropdown-item" href="#">Romance Novel</a></li>
                <li><a className="dropdown-item" href="#">CookBook</a></li>
              </ul>
            </li> */}

            <li className='nav-item mx-lg-4'>
              <Link to='/home' className='nav-link' aria-current='page'>Home</Link>
            </li>

            <li className='nav-item mx-lg-4'>
              <Link to='/allBooks' className='nav-link' aria-current='page'>All Books</Link>
            </li>

            <li className='nav-item mx-lg-4'>
              <Link to='/aboutus' className='nav-link' aria-current='page'>About Us</Link>
            </li>

            <li className='nav-item mx-lg-4' >
              <Link to='/contactus' className='nav-link' aria-current='page'>Contact Us</Link>
            </li>

            <li className='nav-item mx-lg-4'>
              <form className="form-inline">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Search</span>
                  </div>
                  <input type="text" className="form-control" aria-label="Search" aria-describedby="basic-addon1" />
                </div>
              </form>
            </li>

            <li className='nav-item' style={{marginLeft:'250px'}}>
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <FaUserAlt/>
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/profile">Profile</a></li>
                <li><a className="dropdown-item" href="/login">Logout</a></li>
              </ul>
              </li>
            </li>

          </ul>
        </div>
        </div>
    </nav>
    
  );
}

export default Navbar;

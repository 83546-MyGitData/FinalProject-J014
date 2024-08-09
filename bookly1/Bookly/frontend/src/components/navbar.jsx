import { Link } from 'react-router-dom';
import './Navbar.css';  // Import the CSS file
import Logo from './Logo.jpeg';
import User from "../user/user";

function Navbar({user , setUser}) {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary bg-blue' data-bs-theme='blue'>
      <div className='container-fluid'>
        <a className="navbar-brand" href="#">
          <img src={Logo} alt='' width="30" height="24" />
          Bookly.io
        </a>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
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

            <li className='nav-item '>
              <form className="form-inline">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Search</span>
                  </div>
                  <input type="text" className="form-control" aria-label="Search" aria-describedby="basic-addon1" />
                </div>
              </form>
            </li>

            <div className="d-inline-flex">
              {user ?
                <User user={user} setUser={setUser} />
                :
                <Link className="nav-icon position-relative text-decoration-none mx-5" to={'./signin'}>
                  <i className="fa fa-fw fa-user text-dark mr-3" />
                </Link>
              }
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import { Link } from 'react-router-dom'
import './Logo.jpeg'

function Navbar() {
  return (
    <nav
      className='navbar navbar-expand-lg bg-body-tertiary bg-dark'
      data-bs-theme='dark'
    >
      <div className='container-fluid'>
      <a className="navbar-brand" href="#" >
        <img src="Logo.jpeg"
        alt='' width="30" height="24" />
            Bookly.io
        </a>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
           
            <li className="nav-item dropdown">
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
            </li>

            <li className='nav-item'>
              <Link
                to='/home'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/allBooks'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                All Books
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/aboutus'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                About Us
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/contactus'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                Contact Us
              </Link>
            </li>

            

            <li className='nav-item ml-auto'>
            <form className="form-inline">
                <div className="input-group">
                <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Search</span>
                </div>
                <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
            </form>

            </li>

           
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

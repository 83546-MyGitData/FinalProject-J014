import React from "react";
import './footer.css'
import { FaArrowRight,FaLinkedin, FaTwitter  } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="container-fluid ">
        <div className="text-center" style={{ backgroundColor: '#333333' }} >
          <div className="row footer-area">
            <div className="col-lg-4 col-md-6 col-sm-6 mb-5 mt-10">
              <h6>About Us</h6>
              <p>We’re passionate about making books accessible to everyone, offering a vast selection of titles from bestsellers to hidden gems. 
                Our user-friendly platform ensures a seamless shopping experience with competitive prices, fast shipping, and excellent customer service.</p>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 mb-5 mt-10">
              <h6>Newsletter</h6>
              <p>Stay update with our latest</p>
              <div className="d-inline-flex align-items-center">
                <input className="form-control" name="EMAIL" placeholder="Enter Email " type="email">
                </input>
                <button className="click-btn btn btn-default bg-warning">
                <FaArrowRight />
                </button>
             
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 mb-5 mt-10">
              <h6>Follow Me on</h6>
              <FaLinkedin style={{color:'white'}}/>
              <div></div>
              <FaTwitter style={{color:'white'}}/>
            </div>
          </div>
        </div>
        <div className="text-center text-white bg-dark p-4">
          © 2022 Copyright:
          <a className="text-white" href="https://github.com/PeterRizek009">Peter Rezik</a>
        </div>
      </footer>
    </div>
  );
}



export default Footer;

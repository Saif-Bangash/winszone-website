import React from 'react';
import { FaNewspaper, FaTv } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import "./footer.css"
const Footer = () => {
  return (
    <footer className="bg-dark">
    <div className="container pt-5">
      <div className="row">
        {/* First Column */}
        <div className="col-12 col-lg-3 mt-3">
          <div>
            <a href="/">
              <img
                src="https://www.winzmedia.org/static/assets/img/white_logo.png"
                className="w-75"
                alt="not-found"
              />
            </a>
            <p className="text-white fw-600" style={{ lineHeight: "1.6" }}>
              Winzone delivers reliable, unbiased news from across the globe, prioritizing truth, thorough
              reporting, and unwavering commitment to excellence.
            </p>
          </div>
          <div className="footer-weight">
            <ul className="d-flex gap-2 list-unstyled">
              <li>
                <a href="https://www.facebook.com/winszone" target="_blank" rel="noreferrer">
                  <img
                    src="https://www.winzmedia.org/static/assets/img/icons/facebook-blue.svg"
                    alt="Facebook"
                    className="rounded-circle bg-white p-1"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/winzoneusa" target="_blank" rel="noreferrer">
                  <img
                    src="https://www.winzmedia.org/static/assets/img/icons/instagram-blue.svg"
                    alt="Instagram"
                    className="rounded-circle bg-white p-1"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@winzoneusa" target="_blank" rel="noreferrer">
                  <img
                    src="https://www.svgrepo.com/show/306856/tiktok.svg"
                    alt="not-found"
                    className="white-icon"
                    width="25px"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Second Column */}
        <div className="col-12 col-lg-3 mt-3">
          <h5 className="text-white">Foundational Principles</h5>
          <div className="footer-weight">
            <ul className="footer-menu list-unstyled mx-3 mt-3">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  <FaNewspaper /> Honest
                </a>
              </li>
              <li>
                <a href="/" className="text-white text-decoration-none">
                  <FaNewspaper /> Journalism
                </a>
              </li>
              <li>
                <a href="/" className="text-white text-decoration-none">
                  <FaNewspaper /> Bravery
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Third Column */}
        <div className="col-12 col-lg-3 mt-3">
          <h5 className="text-white">Pages</h5>
          <div className="footer-weight">
            <ul className="footer-menu list-unstyled fs-6 mt-3 d-sm-start">
              <li className=''>
                <a href="/" className="text-white text-decoration-none">
                  <FaTv /> Terms And Conditions
                </a>
              </li>
              <li>
                <a href="/" className="text-white text-decoration-none">
                  <FaTv /> About
                </a>
              </li>
              <li>
                <a href="/" className="text-white text-decoration-none">
                  <FaTv /> Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Fourth Column */}
        <div className="col-12 col-lg-3 mt-3">
          <h5 className="text-white">Contact us</h5>
          <div className="footer-contact">
            <span className="text-white line-1" style={{ lineHeight: "1.6" }}>
              <FaLocationDot /> 123 University Avenue, Bufflow State University
            </span>
          </div>
        </div>
      </div>
  
      <div className="divider-line mt-3" style={{ border: "1px solid white", width: "100%" }}></div>
  
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="row align-items-center">
          <div className="col-12">
            <p className="text-white text-center fs-15 mb-5 pt-3">
              <span className="text-white">Note:</span> This project is for educational purposes only, intended for <strong className="text-white">Bufflow State University students.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;

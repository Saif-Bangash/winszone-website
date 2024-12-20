/* eslint-disable react/jsx-no-target-blank */
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="bg-light">
        <div className="container-fluid py-3 bg-white">
          <div className="row d-flex justify-content-between align-items-center ">
            <div className="col-lg-2 col-md-4 d-flex justify-content-center">
              <ul className="social-profile style-one list-unstyled d-flex gap-3">
                <li>
                  <a href="https://www.facebook.com/winszone" target="_blank" rel="noreferrer">
                    <img src="https://www.winzmedia.org/static/assets/img/icons/facebook-blue.svg" alt="Facebook" className="dark-icon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/winzoneusa" target="_blank" rel="noreferrer">
                    <img src="https://www.winzmedia.org/static/assets/img/icons/instagram-blue.svg" alt="Instagram" className="dark-icon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@winzoneusa" target="_blank">
                    <img src="https://www.svgrepo.com/show/306856/tiktok.svg" alt="not-found" width="25px" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 col-md-6 me-md-5 me-lg-5 d-flex justify-content-end align-items-center">
              <Navbar expand="lg" className="d-none d-md-none d-lg-block">
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav className="my-0" navbarScroll>
                    <Nav.Link href="/" className="text-dark fw-medium">Home</Nav.Link>
                    <Nav.Link href="sources" className="text-dark fw-medium">Sources</Nav.Link>
                    <Nav.Link href="#action2" className="text-dark fw-medium">Authors</Nav.Link>
                    <Nav.Link href="#action2" className="text-dark fw-medium">Countries</Nav.Link>
                    <Nav.Link href="#action2" className="text-dark fw-medium">Categories</Nav.Link>
                    <NavDropdown title="Pages" id="navbarScrollingDropdown" className="fw-medium">
                      <NavDropdown.Item href="#action3">Terms and Conditions</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">About</NavDropdown.Item>
                      <NavDropdown.Item href="#action5">Privacy and Policy</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#action2" className="text-dark fw-medium">Contact <span className="mx-2">//</span></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <Button className="btn style-three fw-semibold bg-warning border-0 rounded-5 text-dark d-md-block h-25" data-bs-toggle="modal" data-bs-target="#newsletter-popup">
                Subscribe Now
                <img src="https://www.winzmedia.org/static/assets/img/icons/long-arrow-black.svg" className="px-2" alt="Arrow" />
              </Button>
            </div>
          </div>
          {/* <hr className="hrline" /> */}
          <div className="navbar-bottom">
            <div className="row">
              <div className="col-lg-2 col-4">
                <a href="/">
                  <img src="https://www.winzmedia.org/static/assets/img/winzone.png" alt="not-found" className="w-100 mt-3 mx-5" />
                </a>
              </div>
              <div className="col-lg-8">
                <div className="d-flex justify-content-center align-items-center mt-xl-3">
                  <div className="d-none d-lg-block text-center">
                    <p className="fw-medium text-primary mb-0 ls-0 fw-bold">
                      This project is for educational purposes only, intended for Bufflow State University students.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="d-flex justify-content-end align-items-center me-lg-5 mt-2">
                  <ul className="list-unstyled d-flex flex-row gap-3">
                    <li>
                      <button type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarOffcanvas" aria-controls="sidebarOffcanvas" className="sidebar-btn border-0 bg-transparent transition">
                        <img src="https://www.winzmedia.org/static/assets/img/icons/sidebar-menu.svg" alt="Sidebar Icon" />
                      </button>
                    </li>
                    <li>
                      <button type="button" data-bs-toggle="offcanvas" data-bs-target="#sideOffcanvas" aria-controls="sideOffcanvas" className="sidebar-btn border-0 bg-transparent transition d-lg-none">
                        <img src="https://www.winzmedia.org/static/assets/img/icons/sidebar-menu.svg" alt="Sidebar Icon" />
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="offcanvas offcanvas-end text-white" tabIndex="-1" style={{ width: "33rem" }} id="sidebarOffcanvas" aria-labelledby="sidebarOffcanvasLabel">
                  <div className="offcanvas-header mt-5 px-5">
                    <a href="/">
                      <img src="https://www.winzmedia.org/static/assets/img/winzone.png" alt="not-found" className="w-50 img-white" style={{ filter: "invert(1)" }} />
                    </a>
                    <button type="button" className="btn-close text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body mx-3">
                    <p className="text-offwhite mb-0 fw-light custom-letter-spacing">
                      This year has been a whirlwind of drama and controversy in the world of celebrities. From unexpected breakups to shocking revelations.
                    </p>
                    <hr />
                    <div className="footer">
                      <h3>Contact us</h3>
                      <p className="mt-4 fw-light fw-normal">5792 Main Street, Willamsville, NY 14221</p>
                      <ul className="social-profile list-unstyled d-flex gap-3">
                        <li>
                          <a href="https://www.facebook.com/winszone" target="_blank">
                            <img src="https://www.winzmedia.org/static/assets/img/icons/facebook-blue.svg" alt="Facebook" className="rounded-circle bg-white p-2" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/winzoneusa" target="_blank">
                            <img src="https://www.winzmedia.org/static/assets/img/icons/instagram-blue.svg" alt="Instagram" className="rounded-circle bg-white p-2" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.tiktok.com/@winzoneusa" target="_blank">
                            <img src="https://www.svgrepo.com/show/306856/tiktok.svg" alt="not-found" className="white-icon" width="35px" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="sideOffcanvas" aria-labelledby="sideOffcanvasLabel">
                  <div className="offcanvas-header sticky-top">
                    <a href="/">
                      <img src="https://www.winzmedia.org/static/assets/img/winzone.png" alt="not-found" className="w-75 mt-2 mx-4" />
                    </a>
                    <button type="button" className="btn-close text-reset me-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="list-unstyled p-2">
                      <li><a href="/" className="fw-medium">Home</a></li>
                      <hr className="text-white" />
                      <li><a href="/" className="fw-medium">Categories</a></li>
                      <hr className="text-white" />
                      <li><a href="/" className="fw-medium">Contact</a></li>
                      <hr className="text-white" />
                    </ul>
                    <p className="text-white text-offwhite m-auto fw-normal">
                      From pop culture to weird history, your votes rank the lists.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

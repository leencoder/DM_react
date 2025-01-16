import './../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-white sticky-top">
            <div className="bg-blue text-white py-1">
                <div className="container p-0">
                    <div className="d-lg-flex justify-content-between">
                        <div className="d-flex">
                            <div className="me-3">Welcome to Digital Marketing</div>
                            <Link to="tel:+1 454-4545-5454" className="text-white text-decoration-none border-start">
                                <FontAwesomeIcon icon={faPhone} className="me-2 ms-3" />+1 454-4545-5454
                            </Link>
                        </div>
                        <div className="d-none d-md-block"><span className="me-3">Follow Us:</span>
                            <FontAwesomeIcon icon={faFacebookF} className="me-2" /><FontAwesomeIcon icon={faInstagram} className="me-2" />
                            <FontAwesomeIcon icon={faTwitter} className="me-2" />
                            <FontAwesomeIcon icon={faLinkedinIn} className="me-2" />
                            <FontAwesomeIcon icon={faPinterestP} /></div>
                    </div>
                </div>
            </div>
            <div className="container px-md-0 pb-0">
                <nav className="navbar navbar-expand-lg navbar-light align-items-lg-end px-0 pb-0">
                    <Link to="/" className="navbar-brand py-3" >
                        <img src='./images/logo-2.png' alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link" role="button">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button">
                                    Design
                                </Link>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="#">Action</Link>
                                    <Link className="dropdown-item" to="#">Another action</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown"
                                    aria-expanded="false">
                                    Development
                                </Link>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="#">Action</Link>
                                    <Link className="dropdown-item" to="#">Another action</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown"
                                    aria-expanded="false">
                                    Digital Marketing
                                </Link>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="#">Action</Link>
                                    <Link className="dropdown-item" to="#">Another action</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Case Studies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
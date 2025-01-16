import './../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn, faPinterestP } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer-section section-space pb-3">
            <div className="container ">
                <div className="row row-cols-lg-4 mb-5">
                    <div className="col-12 col-lg-3">
                        <div><img src="./images/white-logo.png" alt="" /></div>
                        <div className="my-4 footer-contact">
                            <div className="align-items-start d-flex mb-3"><img src="./images/location.png" alt=""
                                className="me-3 mt-1" />
                                <div>
                                    <p className="mb-0">India</p>
                                </div>

                            </div>
                            <div className="align-items-start d-flex mb-3"><img src="./images/phone.png" alt=""
                                className="me-3 mt-1" />
                                <div className="phone-num">
                                    <p className="mb-0">+1 454-5454-5453 (USA)</p>
                                    <p className="mb-0"> +91 99999-78787 (INDIA)</p>
                                </div>
                            </div>
                            <div className="align-items-start d-flex"><img src="./images/email.png" alt=""
                                className="me-3 mt-1" />
                                <div>
                                    <p className="mb-0">info@leencoder</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="footer-heading">Stay Connected</h4>
                            <div className="social-icons">
                                <FontAwesomeIcon icon={faFacebookF} className="me-2" /><FontAwesomeIcon icon={faInstagram} className="me-2" />
                                <FontAwesomeIcon icon={faTwitter} className="me-2" />
                                <FontAwesomeIcon icon={faLinkedinIn} className="me-2" />
                                <FontAwesomeIcon icon={faPinterestP} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div>
                            <h4 className="footer-heading text-uppercase fw-bold mt-4">Design</h4>
                            <div className="footer-menu-links"><Link to="#">Web Design Packages</Link>
                                <Link to="#">eCcommerce Website Design</Link>
                                <Link to="#">Graphic Design</Link>
                                <Link to="#">Landing Page Design Service</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="footer-heading text-uppercase fw-bold mt-4">Development</h4>
                            <div className="footer-menu-links"><Link to="#">Web Development Services</Link>
                                <Link to="#">CMS Website Packages</Link>
                                <Link to="#">eCcommerce Solutions</Link>
                                <Link to="#">Magento Packages</Link>
                                <Link to="#">Mobile Application Development</Link>
                                <Link to="#">Node.Js Development</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div>
                            <h4 className="footer-heading text-uppercase fw-bold mt-4">Digital Marketing</h4>
                            <div className="footer-menu-links"><Link to="#">SEO Services</Link>
                                <Link to="#">eLocal SEO</Link>
                                <Link to="#">Ecommerce SEO</Link>
                                <Link to="#">SEO Packages</Link>
                                <Link to="#">SMM Packages</Link>
                                <Link to="#">Content Marketing Services</Link>
                                <Link to="#">Link Building Services</Link>
                                <Link to="#">Social Media Optimization</Link>
                                <Link to="#">PPC Management Services</Link>
                                <Link to="#">Online Reputation Management</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div>
                            <h4 className="footer-heading text-uppercase fw-bold mt-4">Company</h4>
                            <div className="footer-menu-links"><Link to="#">Home</Link>
                                <Link to="#">About</Link>
                                <Link to="#">Careers</Link>
                                <Link to="#">Case Studies</Link>
                                <Link to="#">Blog</Link>
                                <Link to="#">Contact Us</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="footer-heading text-uppercase fw-bold mt-4">Help</h4>
                            <div className="footer-menu-links"><Link to="#">FAQs</Link>
                                <Link to="#">Cookies</Link>
                                <Link to="#">Terms & Conditions</Link>
                                <Link to="#">Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer-copyright">© Copyright 2024 – All Rights Reserved</div>
            </div>
        </footer>
    );
}

export default Footer;
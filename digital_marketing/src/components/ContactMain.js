import './../App.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn, faPinterestP } from '@fortawesome/free-brands-svg-icons';

function ContactMain() {
    return (
        <div>
            <main>
                <section className="about-banner section-space">
                    <div className="container">
                        <div className="text-center">
                            <h1 className="fw-bold text-uppercase">Contact us
                            </h1>
                            <p>Initiate a conversation with us. Please Complete the form below. We will respond as soon as
                                possible.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="contact-consultation section-space">
                    <div className="container">
                        <div className="row flex-column-reverse flex-lg-row">
                            <div className="col-12 col-lg-8">
                                <div className="left-side">
                                    <h2 className="heading">Request A Consultation
                                    </h2>
                                    <p className="paragraph mt-0">We are working with a mission to build high-performance solutions
                                        for
                                        our
                                        clients to fulfil the goals of their business while sustaining values, promises and
                                        processes at all events. We will help you
                                        measure, understand, and maximise your online potential.</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="right-side">
                                    <div className="p-3 bg-blue">
                                        <div>
                                            <h5 className="text-orange fw-bold">Let’s Talk Business –
                                            </h5>
                                            <Link className="text-white text-decoration-none"
                                                to="mailto:sales@engagecoders.com">sales@engagecoders.com</Link>
                                        </div>
                                        <hr className="border-dashed opacity-25 border-white" />
                                        <div>
                                            <h5 className="text-orange fw-bold">General Enquiries –
                                            </h5>
                                            <Link className="text-white text-decoration-none"
                                                to="mailto:contact@engagecoders.com">contact@engagecoders.com</Link>
                                        </div>
                                        <hr className="border-dashed opacity-25 border-white" />
                                        <div>
                                            <h5 className="text-orange fw-bold">We Are Hiring –
                                            </h5>
                                            <Link className="text-white text-decoration-none"
                                                to="mailto:jobs@engagecoders.com">jobs@engagecoders.com</Link>
                                        </div>
                                    </div>
                                    <div className="pt-3">
                                        <h4 className="text-blue fw-bold text-center pb-1">Follow Us On</h4>
                                        <div className="social-icons">
                                            <FontAwesomeIcon icon={faFacebookF} className="me-2" /><FontAwesomeIcon icon={faInstagram} className="me-2" />
                                            <FontAwesomeIcon icon={faTwitter} className="me-2" />
                                            <FontAwesomeIcon icon={faLinkedinIn} className="me-2" />
                                            <FontAwesomeIcon icon={faPinterestP} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default ContactMain;

import './../App.css';
import { Link } from "react-router-dom";
import CountUpAnimation from './Count';
import TestimonialSlider from './Testimonial';
import ServicesGrid from './ServiceGrid';
import AboutGrid from './AboutGrid';
import WhyChooseGrid from './WhyChooseGrid';
import BlogGrid from './BlogGrid';

function Main() {
    return (
        <div>
            <main>
                <section className="hero-section">
                    <div className="hero-bg"><img src="./images/hero-vector.png" alt="" className="d-lg-block d-none" />
                        <div className="container h-100">
                            <div className="h-100 p-0 d-flex flex-column justify-content-center px-3">
                                <h1 className="fw-bold">#1 Ranked<br />
                                    Web Marketing Agency<br />
                                    <span className="text-orange">Hire the best.</span>
                                </h1>
                                <p className="mt-4">Ask DMA to create a comprehensive and aggressive digital<br /> marketing plan
                                    taking
                                    your business
                                    to
                                    new heights.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-section section-space">
                    <div className="container">
                        <div className="row row-cols-lg-2 mx-0 align-items-center flex-column-reverse flex-lg-row">
                            <AboutGrid />
                            <div className="ps-lg-5">
                                <span className="subheading">About us</span>
                                <h2 className="heading">Grow your Business with Our SEO Agency</h2>
                                <p className="paragraph">We are helping companies of all sizes to achieve their
                                    financial and branding goals. Our approach to Digital Solutions for any business is uniquely
                                    built
                                    around what we know works…and what we know doesn’t work. Internet has changed and most
                                    agencies
                                    still rely on old tactics that no longer works but our strategies are based on the
                                    experience
                                    gained
                                    by the successful delivery of 500+ projects over the last 5 years.</p>
                                <div className="row row-cols-3 m-0 about-counter">
                                    <div className="col-4">
                                        <CountUpAnimation
                                            initialValue={0}
                                            targetValue={210}
                                            text="Active Clients"
                                        />
                                    </div>
                                    <div className="col-4">
                                        <CountUpAnimation
                                            initialValue={0}
                                            targetValue={530}
                                            text="Projects Done"
                                        />
                                    </div>
                                    <div className="col-4">
                                        <CountUpAnimation
                                            initialValue={0}
                                            targetValue={50}
                                            text="Team Members"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="who-we-are section-space pt-0">
                    <div className="container">
                        <div className="d-flex align-items-center flex-column-reverse flex-lg-row">
                            <div className="left-side"><span className="subheading">Who we are</span>
                                <h2 className="heading">We're on a Mission to Build high-performance solutions</h2>
                                <p className="paragraph">Over the last 5 years, we have worked with big companies and brand-new
                                    start-ups. We build a reputation as one of the best offshore IT companies for delivering
                                    tangible results and great customer service col-12 col-lg-6. We help ambitious businesses
                                    like yours
                                    generate
                                    more profits by building awareness, driving web traffic, connecting new customers, and
                                    growing
                                    overall sales. Let’s Connect.</p>
                            </div>
                            <div>
                                <div className="round-img-wrapper position-relative"><img src='./images/who-we-are.png'
                                    className="img-fluid" alt="" /><img src='./images/shape_1.png' alt=""
                                        className="who-we_shape" />
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="our-services bg-blue position-relative section-space">
                    <div className="container">
                        <div className="text-center"><span className="subheading text-white">Our Services</span>
                            <h2 className="heading text-white">Explore our Comprehensive suite of Services</h2>
                        </div>
                        <ServicesGrid />
                    </div>
                    <img src="./images/services-yellow-shape.png" alt="" className="shape-first d-none d-lg-block" />
                    <img src="./images/services-shape-2.png" alt="" className="shape-second" />
                </section>
                <section className="section-space why-choose">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="heading">Why Choose Us</h2>
                            <p className="paragraph">We are known globally for providing best-in-className end-to-end IT solutions. Our
                                vast
                                experience and innovative approach towards design, development, and digital marketing make us
                                unique
                                and stand out in the competition. We have gained a better understanding of evolving market
                                trends
                                which helps us to achieve a higher ranking on SERPs of different search engines like Google,
                                Bing
                                etc. We always value our customers and we work hard to provide the excellent service they
                                deserve.
                            </p>
                        </div>
                        <WhyChooseGrid />
                    </div>
                </section>
                <TestimonialSlider />
                <section className="blog">
                    <div className="container section-space">
                        <div className="text-center"><span className="subheading">Our Blog</span>
                            <h2 className="heading">Latest IT Industry Updates</h2>
                        </div>
                        <BlogGrid />
                        <div className="text-center">
                            <Link to="#" className="text-blue">View More<i className="fa-solid fa-arrow-right-long ms-2"></i></Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Main;

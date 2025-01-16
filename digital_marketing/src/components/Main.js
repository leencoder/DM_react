import './../App.css';
import { Link } from "react-router-dom";

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
                            <div className="row row-cols-2 mx-0 mt-4 mt-lg-0">
                                <div className="col">
                                    <div className="about-box about-one">
                                        <div className="image-wrapper"><img src="./images/web-design-icon.png" alt="" /></div>
                                        <p>Web Design</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="about-box about-two">
                                        <div className="image-wrapper"><img src='./images/web-development-icon.png' alt="" />
                                        </div>
                                        <p>Web Development</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="about-box about-three">
                                        <div className="image-wrapper"><img src='./images/content-marketing-icon.png' alt="" />
                                        </div>
                                        <p>Content Marketing</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="about-box about-four">
                                        <div className="image-wrapper"><img src='./images/mobile-app-development-icon.png'
                                            alt="" />
                                        </div>
                                        <p>Mobile App Development</p>
                                    </div>
                                </div>

                            </div>
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
                                        <h3 className="fw-bold text-orange">210+</h3>
                                        <p>Active Clients</p>
                                    </div>
                                    <div className="col-4">
                                        <h3 className="fw-bold text-orange">530+</h3>
                                        <p>Projects Done</p>
                                    </div>
                                    <div className="col-4">
                                        <h3 className="fw-bold text-orange">50+</h3>
                                        <p>Team Members</p>
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
                        <div className="row row-cols-lg-2 mt-4">
                            <div className="service col-12 col-lg-6">
                                <div className="d-flex align-items-start p-4 bg-white rounded h-100">
                                    <img src='./images/web-design-icon.png' className="me-3" alt="..." />
                                    <div>
                                        <h5 className="mt-0">Web Design</h5>
                                        <p className="m-0">We design incredible websites that gives ‘Wow Factor’ to grab your
                                            audience’s
                                            attention.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service col-12 col-lg-6">
                                <div className="d-flex align-items-start p-4 bg-white rounded h-100">
                                    <img src='./images/seo-icon.png' className="me-3" alt="..." />
                                    <div>
                                        <h5 className="mt-0">Search Engine Optimization (SEO)</h5>
                                        <p className="m-0">Building awareness, driving more traffic and get more customers.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service col-12 col-lg-6">
                                <div className="d-flex align-items-start p-4 bg-white rounded h-100">
                                    <img src='./images/web-development-icon.png' className="me-3" alt="..." />
                                    <div>
                                        <h5 className="mt-0">Web Development</h5>
                                        <p className="m-0">We built websites that will not just impress you but also loads in just a
                                            few seconds.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service col-12 col-lg-6">
                                <div className="d-flex align-items-start p-4 bg-white rounded h-100">
                                    <img src='./images/smm-icon.png' className="me-3" alt="..." />
                                    <div>
                                        <h5 className="mt-0">Social Media Marketing (SMM)</h5>
                                        <p className="m-0">We build best-performing social campaigns to develop a dedicated customer
                                            fan base.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service col-12 col-lg-6">
                                <div className="d-flex align-items-start p-4 bg-white rounded h-100">
                                    <img src='./images/mobile-app-development-icon.png' className="me-3" alt="..." />
                                    <div>
                                        <h5 className="mt-0">Mobile App Development</h5>
                                        <p className="m-0">We develop high quality mobile solutions cater to the goals and
                                            objectives of your business.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service col-12 col-lg-6">
                                <div className="d-flex align-items-start p-4 bg-white rounded h-100">
                                    <img src='./images/content-marketing-icon.png' className="me-3" alt="..." />
                                    <div>
                                        <h5 className="mt-0">Content Marketing</h5>
                                        <p className="m-0">We boost your online business by creating and sharing useful content for
                                            your target audience.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service col-12 col-lg-6">
                                <div className="d-flex align-items-start p-4 bg-white rounded h-100">
                                    <img src="./images/cms-icon.png" className="me-3" alt="..." />
                                    <div>
                                        <h5 className="mt-0">Content Management Solutions</h5>
                                        <p className="m-0">We develop high quality mobile solutions cater to the goals and
                                            objectives of your business.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service col-12 col-lg-6">
                                <div className="d-flex align-items-start p-4 bg-white rounded h-100">
                                    <img src="./images/ppc.png" className="me-3" alt="..." />
                                    <div>
                                        <h5 className="mt-0">PPC Advertising</h5>
                                        <p className="m-0">Our team covers every aspect needed to run a successful PPC Campaign.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service col-12 col-lg-6">
                                <div className="d-flex align-items-start p-4 bg-white rounded h-100">
                                    <img src="./images/ecommerce-icon.png" className="me-3" alt="..." />
                                    <div>
                                        <h5 className="mt-0">eCommerce Solutions</h5>
                                        <p className="m-0">Take your business online with our robust and next level Ecommerce
                                            Solutions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service col-12 col-lg-6">
                                <div className="d-flex align-items-start p-4 bg-white rounded h-100">
                                    <img src="./images/orm-icon.png" className="me-3" alt="..." />
                                    <div>
                                        <h5 className="mt-0">Online Reputation Management (ORM)</h5>
                                        <p className="m-0">We have result oriented ORM strategies to rebuild your damaged
                                            reputation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                etc. We always value our customers and we work hard to provide the excellent service col-12
                                col-lg-6 they
                                deserve.
                            </p>
                        </div>
                        <div className="row row-cols-lg-4 justify-content-center">
                            <div className="pb-3 p-lg-3 col-6 col-lg-3">
                                <div className="bg-white why-choose-cards">
                                    <img src="./images/trust-icon.png" alt="" />
                                    <p>5+ Years of Trust
                                        & Experience</p>
                                </div>
                            </div>
                            <div className="pb-3 p-lg-3 col-6 col-lg-3">
                                <div className="bg-white why-choose-cards">
                                    <img src="./images/trust-icon.png" alt="" />
                                    <p>5+ Years of Trust
                                        & Experience</p>
                                </div>
                            </div>
                            <div className="pb-3 p-lg-3 col-6 col-lg-3">
                                <div className="bg-white why-choose-cards">
                                    <img src="./images/trust-icon.png" alt="" />
                                    <p>5+ Years of Trust
                                        & Experience</p>
                                </div>
                            </div>
                            <div className="pb-3 p-lg-3 col-6 col-lg-3">
                                <div className="bg-white why-choose-cards">
                                    <img src="./images/trust-icon.png" alt="" />
                                    <p>5+ Years of Trust
                                        & Experience</p>
                                </div>
                            </div>
                            <div className="pb-3 p-lg-3 col-6 col-lg-3">
                                <div className="bg-white why-choose-cards">
                                    <img src="./images/trust-icon.png" alt="" />
                                    <p>5+ Years of Trust
                                        & Experience</p>
                                </div>
                            </div>
                            <div className="pb-3 p-lg-3 col-6 col-lg-3">
                                <div className="bg-white why-choose-cards">
                                    <img src="./images/trust-icon.png" alt="" />
                                    <p>5+ Years of Trust
                                        & Experience</p>
                                </div>
                            </div>
                            <div className="pb-3 p-lg-3 col-6 col-lg-3">
                                <div className="bg-white why-choose-cards">
                                    <img src="./images/trust-icon.png" alt="" />
                                    <p>5+ Years of Trust
                                        & Experience</p>
                                </div>
                            </div>
                            <div className="pb-3 p-lg-3 col-6 col-lg-3">
                                <div className="bg-white why-choose-cards">
                                    <img src="./images/trust-icon.png" alt="" />
                                    <p>5+ Years of Trust
                                        & Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="testimonial">
                    <div className="container section-space">
                        <div className="text-center">
                            <span className="subheading text-white">Testimonials</span>
                            <h2 className="heading text-white">What Our Clients Say</h2>
                            <h3
                                className="text-orange fw-bold d-flex align-items-center justify-content-center mt-3 mt-lg-5">
                                5.0
                                <img src="./images/5stars.png" alt="" className="ms-3" />
                            </h3>
                            <p className="paragraph text-white testimonial-description">"Today, I am very happy as I have completed
                                my dream project. I
                                would highly recommend this company for your project. Team is very passionate about
                                delivering high quality and creative work using innovative techniques and processes that make
                                them
                                unique from the rest. Each member of the team played an essential role and consistently met our
                                expectations."</p>
                            <div className="text-white mt-4"><img src="./images/robin-avatar.png" alt="" />
                                <h4 className="mt-4">Robin Kelly</h4>
                                <p className="text-orange">CEO</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog">
                    <div className="container section-space">
                        <div className="text-center"><span className="subheading">Our Blog</span>
                            <h2 className="heading">Latest IT Industry Updates</h2>
                        </div>
                        <div className="row row-cols-lg-3 my-4 my-lg-5">
                            <div className="card-wrapper">
                                <div className="card">
                                    <img src="./images/blog-1.png" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <small className="text-muted d-flex"><img src="./images/calendar.png" alt=""
                                            className="me-2" />Apr 9,
                                            2021</small>
                                        <h5 className="card-title mt-3">5 Secrets to Choosing a Great
                                            Business Name Your Brand Identity</h5>
                                        <p className="card-text">To make sure that you choose the best name for your brand identity,
                                            you first need to have a strong grasp...</p>
                                        <Link to="#" className="text-uppercase fw-bold text-blue">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card-wrapper">
                                <div className="card">
                                    <img src="./images/blog-2.png" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <small className="text-muted d-flex"><img src="./images/calendar.png" alt=""
                                            className="me-2" />Apr 9,
                                            2021</small>
                                        <h5 className="card-title mt-3">5 Secrets to Choosing a Great
                                            Business Name Your Brand Identity</h5>
                                        <p className="card-text">To make sure that you choose the best name for your brand identity,
                                            you first need to have a strong grasp...</p>
                                        <Link to="#" className="text-uppercase fw-bold text-blue">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card-wrapper">
                                <div className="card">
                                    <img src="./images/blog-3.png" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <small className="text-muted d-flex"><img src="./images/calendar.png" alt=""
                                            className="me-2" />Apr 9,
                                            2021</small>
                                        <h5 className="card-title mt-3">5 Secrets to Choosing a Great
                                            Business Name Your Brand Identity</h5>
                                        <p className="card-text">To make sure that you choose the best name for your brand identity,
                                            you first need to have a strong grasp...</p>
                                        <Link to="#" className="text-uppercase fw-bold text-blue">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
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

import './../App.css';
import { Link } from "react-router-dom";
import TestimonialSlider from './Testimonial';
import ValuesGrid from './ValuesGrid';
import WhyBetterGrid from './WhyBetterGrid';

function AboutMain() {
    return (
        <div>
            <main>
                <section className="about-banner">
                    <div className="container">
                        <div className="section-space text-center">
                            <h1 className="fw-bold text-uppercase">Our Commitment
                            </h1>
                            <p>We are fully committed to expand your business and reach new heights.</p>
                        </div>
                    </div>
                </section>
                <section className="about-para section-space pb-0">
                    <div className="container px-lg-0">
                        <div>
                            <p><strong>Engage Coders</strong> was established in 2016, with a vision to serve the world with the
                                best and
                                affordable digital solutions designed to deliver results. We have a team of expert designers,
                                developers, and marketing executives who combine their individual skills to form a strong and
                                successful team. Each member of our team is committed to use best practices and the latest
                                technologies. Our team has successfully scaled from a handful of people to over 100+
                                professionals working with billion-dollar companies. </p>
                            <p>We strive to bring fresh and innovative websites at a great value for our clients. We offer a
                                wide range of services including <strong>Web Design, Graphic Design, Web Development, eCommerce
                                    Solutions, CMS Development, Mobile Application Development, Search Engine Optimization,
                                    Social
                                    d-flex align-items-start p-4 Marketing, Content Marketing, PPC Management Services, and Online Reputation
                                    Management.</strong>
                                Over the last 5 years, we have worked with big companies and brand-new start-ups. We build a
                                reputation as one of the <strong>best offshore IT companies</strong> for delivering tangible
                                results and great
                                customer service.</p>
                            <p>Our base office is in India but our physical location was never a hurdle for working with clients
                                around the globe. We are always available for our clients and completely flexible for taking
                                calls or holding meetings at odd hours to serve them at their ease. We are always committed to
                                being transparent with our clients. So, our weekly reports are designed in such a way that our
                                clients have a clear understanding of the efforts that we have added to their projects.</p>
                        </div>
                    </div>
                </section>
                <section className="about-mission">
                    <div className="container">
                        <div className="align-items-center row flex-column-reverse flex-lg-row">
                            <div className="col-12 col-lg-6">
                                <div className="left-side">
                                    <h2 className="heading">Mission</h2>
                                    <p className="paragraph mt-0">We are working with a mission to build high-performance solutions
                                        for
                                        our
                                        clients to fulfil the goals of their business while sustaining values, promises and
                                        processes at all events. We will help you
                                        measure, understand, and maximise your online potential.</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="right-side text-lg-right text-center"><img src="./images/mission-img.png"
                                    className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-vision section-space pt-0">
                    <div className="container">
                        <div className="text-lg-center">
                            <h2 className="heading">Vision</h2>
                            <p className="paragraph m-0">Simplify the process to bring and built businesses online. To serve the
                                world
                                with the best and affordable digital solutions designed to deliver results.</p>
                        </div>
                    </div>
                </section>
                <section className="our-values-section bg-blue position-relative section-space">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="heading text-white">Our Values and Culture</h2>
                            <span className="text-white">Our values reflect what you should expect from us when working
                                together</span>
                        </div>
                        <ValuesGrid />
                    </div>
                </section>
                <section className="section-space why-better">
                    <div className="container">
                        <div className="row align-items-center flex-column-reverse flex-lg-row">
                            <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                                <div>
                                    <h2 className="heading">Why We Are Better?</h2>
                                    <p className="sub-head">Guaranteed Results For Our Clients</p>
                                    <p className="paragraph mt-0">In the last 5 years, <strong>Engage Coders</strong> is serving
                                        clients
                                        around the globe and
                                        helping them scale their business to new heights. We are deliver- ing incredible
                                        <strong>UI/UX
                                            design
                                            services</strong> with robust development solu- tions which help our clients to stay
                                        ahead
                                        of their
                                        competitors. We always follow best practices in design and development to offer secure
                                        and
                                        scalable solutions. Our digital marketing solutions are designed to attract new
                                        audiences
                                        and promote brand awareness which in turn
                                        empower our customers.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="text-lg-right text-center"><img src="./images/why-we-are-better.png"
                                    className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                        <WhyBetterGrid />
                        <div>
                            <p className="mt-4">We offer comprehensive and tailor-made packages of all our services that suit
                                businesses of all
                                sizes. We always keep the focus on driving results. Want to learn more about the results we've
                                driven for our clients? Check out our client testimonials who've worked with us.</p>
                        </div>
                    </div>
                </section>
                <TestimonialSlider />
                <section className="about-contact">
                    <div className="container section-space">
                        <div className="text-center">
                            <h2 className="heading text-white">Want to discuss any requirements or looking for a quote?</h2>
                            <span className="text-white sub-head">Get in touch to get started faster</span>
                        </div>
                        <div className="row row-cols-lg-3 mt-5">
                            <div className="col-md-4">
                                <div className="d-flex align-items-start p-4 align-items-lg-center">
                                    <img src="./images/email-icon.png" className="me-3" alt="..." />
                                    <div className="media-body">
                                        <h5 className="m-0 text-white">Mail Us</h5>
                                        <p><Link to="mailto:sales@engagecoders.com" className="text-white">sales@engagecoders.com</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex align-items-start p-4 align-items-lg-center">
                                    <img src="./images/email-icon.png" className="me-3" alt="..." />
                                    <div className="media-body">
                                        <h5 className="m-0 text-white">Chat with us</h5>
                                        <p className="text-white">Have a question for us?<br />
                                            We’re here to help via Live Chat</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex align-items-start p-4 align-items-lg-center">
                                    <img src="./images/email-icon.png" className="me-3" alt="..." />
                                    <div className="media-body">
                                        <h5 className="m-0 text-white">Request for Free Consultation</h5>
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

export default AboutMain;
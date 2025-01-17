import React, { useState, useEffect } from "react";
import "./../App.css";

const TestimonialSlider = () => {
    // Testimonials data
    const testimonials = [
        {
            description:
                "Today, I am very happy as I have completed my dream project. I would highly recommend this company for your project. Team is very passionate about delivering high quality and creative work using innovative techniques and processes that make them unique from the rest. Each member of the team played an essential role and consistently met our expectations.",
            name: "Robin Kelly",
            position: "CEO",
            rating: '5.0',
            avatar: "./images/robin-avatar.png",
            stars: "./images/5stars.png",
        },
        {
            description:
                "The team delivered an amazing product and showed great professionalism throughout the project. Their creativity and attention to detail were impressive. Highly recommend them for any complex projects.",
            name: "Jane Doe",
            position: "Marketing Manager",
            rating: '5.0',
            avatar: "./images/robin-avatar.png",
            stars: "./images/5stars.png",
        },
        {
            description:
                "Outstanding experience! The team consistently exceeded our expectations and delivered on time. Their dedication to high-quality work sets them apart.",
            name: "John Smith",
            position: "CTO",
            rating: 4.8,
            avatar: "./images/robin-avatar.png",
            stars: "./images/5stars.png",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState("next");
    const autoSlideDuration = 5000;

    // Handle next testimonial
    const nextSlide = () => {
        setSlideDirection("next");
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Handle previous testimonial
    const prevSlide = () => {
        setSlideDirection("prev");
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, autoSlideDuration);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="testimonial">
            <div className="container section-space">
                <div className="text-center">
                    <span className="subheading text-white">Testimonials</span>
                    <h2 className="heading text-white">What Our Clients Say</h2>
                    <div className="slider">
                        <div className={`testimonial-content slide-${slideDirection}`}>
                            <h3 className="text-orange fw-bold d-flex align-items-center justify-content-center mt-3 mt-lg-5">
                                {testimonials[currentIndex].rating}
                                <img
                                    src={testimonials[currentIndex].stars}
                                    alt="Rating stars"
                                    className="ms-3"
                                />
                            </h3>
                            <p className="paragraph text-white testimonial-description">
                                "{testimonials[currentIndex].description}"
                            </p>
                            <div className="text-white mt-4">
                                <img
                                    src={testimonials[currentIndex].avatar}
                                    alt={`${testimonials[currentIndex].name} avatar`}
                                />
                                <h4 className="mt-4">{testimonials[currentIndex].name}</h4>
                                <p className="text-orange">{testimonials[currentIndex].position}</p>
                            </div>
                        </div>
                        <div className="slider-dots">
                            {testimonials.map((_, index) => (
                                <span
                                    key={index}
                                    className={`dot ${index === currentIndex ? "active" : ""
                                        }`}
                                    onClick={() => goToSlide(index)}
                                ></span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;

import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesGrid = () => {
    const services = [
        {
            icon: "./images/web-design-icon.png",
            title: "Web Design",
            description:
                "We design incredible websites that gives ‘Wow Factor’ to grab your audience’s attention.",
        },
        {
            icon: "./images/seo-icon.png",
            title: "Search Engine Optimization (SEO)",
            description:
                "Building awareness, driving more traffic and getting more customers.",
        },
        {
            icon: "./images/web-development-icon.png",
            title: "Web Development",
            description:
                "We build websites that will not just impress you but also load in just a few seconds.",
        },
        {
            icon: "./images/smm-icon.png",
            title: "Social Media Marketing (SMM)",
            description:
                "We build best-performing social campaigns to develop a dedicated customer fan base.",
        },
        {
            icon: "./images/mobile-app-development-icon.png",
            title: "Mobile App Development",
            description:
                "We develop high-quality mobile solutions that cater to the goals and objectives of your business.",
        },
        {
            icon: "./images/content-marketing-icon.png",
            title: "Content Marketing",
            description:
                "We boost your online business by creating and sharing useful content for your target audience.",
        },
        {
            icon: "./images/cms-icon.png",
            title: "Content Management Solutions",
            description:
                "We develop high-quality CMS solutions catered to the goals and objectives of your business.",
        },
        {
            icon: "./images/ppc.png",
            title: "PPC Advertising",
            description:
                "Our team covers every aspect needed to run a successful PPC Campaign.",
        },
        {
            icon: "./images/ecommerce-icon.png",
            title: "eCommerce Solutions",
            description:
                "Take your business online with our robust and next-level Ecommerce Solutions.",
        },
        {
            icon: "./images/orm-icon.png",
            title: "Online Reputation Management (ORM)",
            description:
                "We have result-oriented ORM strategies to rebuild your damaged reputation.",
        },
    ];

    return (
        <div className="row row-cols-lg-2 mt-4">
            {services.map((service, index) => (
                <ServiceCard
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                />
            ))}
        </div>
    );
};

export default ServicesGrid;

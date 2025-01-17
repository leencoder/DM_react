import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChooseGrid = () => {
    const cards = [
        { icon: "./images/trust-icon.png", text: "5+ Years of Trust & Experience" },
        { icon: "./images/trust-icon.png", text: "5+ Trust & Experience" },
        { icon: "./images/trust-icon.png", text: "5+ Years Trust & Experience" },
        { icon: "./images/trust-icon.png", text: "5+ Years of Trust &" },
        { icon: "./images/trust-icon.png", text: "5+ Years of Trust Experience" },
        { icon: "./images/trust-icon.png", text: "5+ YearsTrust & Experience" },
        { icon: "./images/trust-icon.png", text: "5+ of Trust & Experience" },
        { icon: "./images/trust-icon.png", text: "5+ Years of Experience" },
    ];

    return (
        <div className="row row-cols-lg-4 justify-content-center">
            {cards.map((card, index) => (
                <WhyChooseCard key={index} icon={card.icon} text={card.text} />
            ))}
        </div>
    );
};

export default WhyChooseGrid;

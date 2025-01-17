import React from "react";

const WhyChooseCard = ({ icon, text }) => {
    return (
        <div className="pb-3 p-lg-3 col-6 col-lg-3">
            <div className="bg-white why-choose-cards">
                <img src={icon} alt="Why Choose Icon" />
                <p>{text}</p>
            </div>
        </div>
    );
};

export default WhyChooseCard;

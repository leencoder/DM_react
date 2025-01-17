import React from "react";

const WhyBetterCard = ({ icon, description }) => {
    return (
        <div className="pb-3 p-lg-3 col-md-6 col-lg-4">
            <div className="bg-white d-flex align-items-center why-better-cards">
                <div className="why-better-img">
                    <img src={icon} alt={description} />
                </div>
                <p className="mb-0">{description}</p>
            </div>
        </div>
    );
};

export default WhyBetterCard;

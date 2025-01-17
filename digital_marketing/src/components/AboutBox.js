import React from "react";

const AboutBox = ({ icon, label, className }) => {
    return (
        <div className={`col`}>
            <div className={`about-box ${className}`}>
                <div className="image-wrapper">
                    <img src={icon} alt={label} />
                </div>
                <p>{label}</p>
            </div>
        </div>
    );
};

export default AboutBox;

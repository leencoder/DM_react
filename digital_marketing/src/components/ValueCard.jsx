import React from "react";

const ValueCard = ({ icon, title, description }) => {
    return (
        <div className="our-values col-md-6 col-lg-3">
            <div className="d-flex align-items-start p-4 bg-white h-100 flex-column align-items-center text-center">
                <img src={icon} className="mb-4" alt={title} />
                <div className="media-body">
                    <h5 className="mt-0 text-uppercase">{title}</h5>
                    <p className="m-0">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ValueCard;

import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service col-12 col-lg-6">
      <div className="d-flex align-items-start p-4 bg-white rounded h-100">
        <img src={icon} className="me-3" alt={title} />
        <div>
          <h5 className="mt-0">{title}</h5>
          <p className="m-0">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

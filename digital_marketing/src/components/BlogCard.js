import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ image, date, title, description, link }) => {
    return (
        <div className="card-wrapper">
            <div className="card">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <small className="text-muted d-flex">
                        <img src="./images/calendar.png" alt="Calendar Icon" className="me-2" />
                        {date}
                    </small>
                    <h5 className="card-title mt-3">{title}</h5>
                    <p className="card-text">{description}</p>
                    <Link to={link} className="text-uppercase fw-bold text-blue">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;

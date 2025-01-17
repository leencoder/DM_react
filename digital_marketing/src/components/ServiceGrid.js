import React, { useEffect, useState } from 'react';
import ServiceCard from "./ServiceCard";

const ServicesGrid = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/data.json");
            const data = await response.json();
            setServices(data.services);
        };

        fetchData();
    }, []);


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

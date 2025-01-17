import AboutBox from "./AboutBox";
import React, { useEffect, useState } from 'react';

const AboutGrid = () => {
    const [aboutItems, setAboutItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/data.json");
            const data = await response.json();
            setAboutItems(data.aboutItems);
        };

        fetchData();
    }, []);

    return (
        <div className="row row-cols-2 mx-0 mt-4 mt-lg-0">
            {aboutItems.map((item, index) => (
                <AboutBox
                    key={index}
                    icon={item.icon}
                    label={item.label}
                    className={item.className}
                />
            ))}
        </div>
    );
};

export default AboutGrid;

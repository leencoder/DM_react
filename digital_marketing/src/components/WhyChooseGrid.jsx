import React, { useEffect, useState } from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChooseGrid = () => {
    const [whyChooseCards, setWhyChooseCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/data.json");
            const data = await response.json();
            setWhyChooseCards(data.whyChooseCards);
        };

        fetchData();
    }, []);

    return (
        <div className="row row-cols-lg-4 justify-content-center">
            {whyChooseCards.map((card) => (
                <WhyChooseCard key={card.id} icon={card.icon} text={card.text} />
            ))}
        </div>
    );
};

export default WhyChooseGrid;

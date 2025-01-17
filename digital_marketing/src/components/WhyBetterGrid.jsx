import React, { useEffect, useState } from "react";
import WhyBetterCard from "./WhyBetterCard";

const WhyBetterGrid = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/data.json");
            const data = await response.json();
            setCards(data.cards);
        };

        fetchData();
    }, []);

    return (
        <div className="row row-cols-lg-3 justify-content-center">
            {cards.map((card) => (
                <WhyBetterCard key={card.id} icon={card.icon} description={card.description} />
            ))}
        </div>
    );
};

export default WhyBetterGrid;

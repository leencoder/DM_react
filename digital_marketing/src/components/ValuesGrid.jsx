import React, { useEffect, useState } from "react";
import ValueCard from "./ValueCard";

const ValuesGrid = () => {
    const [values, setValues] = useState([]);

    useEffect(() => {
        const fetchValues = async () => {
            const response = await fetch("/data.json");
            const data = await response.json();
            setValues(data.values);
        };

        fetchValues();
    }, []);

    return (
        <div className="row row-cols-lg-4 mt-4">
            {values.map((value) => (
                <ValueCard
                    key={value.id}
                    icon={value.icon}
                    title={value.title}
                    description={value.description}
                />
            ))}
        </div>
    );
};

export default ValuesGrid;

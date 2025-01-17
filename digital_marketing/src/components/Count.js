import React, { useEffect, useState } from 'react';
import './../App.css';

const CountUpAnimation = ({
    initialValue,
    targetValue,
    text,
}) => {
    const [count, setCount] = useState(initialValue);
    const duration = 4000;

    useEffect(() => {
        let startValue = initialValue;
        const interval = Math.floor(
            duration / (targetValue - initialValue));

        const counter = setInterval(() => {
            startValue += 1;
            setCount(startValue);
            if (startValue >= targetValue) {
                clearInterval(counter);
            }
        }, interval);

        return () => {
            clearInterval(counter);
        };
    }, [targetValue, initialValue]);

    return (
        <div>
            <h3 className="num fw-bold text-orange">{count}+</h3>
            <p className="text">{text}</p>
        </div>
    );
}

export default CountUpAnimation;
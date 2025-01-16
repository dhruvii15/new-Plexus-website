import React, { useEffect, useState, useRef } from 'react';

const Counter = ({ end, duration }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 } // Adjust the threshold as needed
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        
        let start = 0;
        let endValue
        if (end >= 1000000) {
             endValue = parseInt(end) / 1000000;
        }else{
             endValue = parseInt(end) ;
        }
        const incrementTime = duration / endValue;

        if (start === endValue) return;

        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === endValue) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [isVisible, end, duration]);

    return <span ref={ref}>{count}</span>;
};

export default Counter;

import React, { useState, useEffect } from 'react';
import { GeistMono } from 'geist/font/mono';

const Clock: React.FC = () => {
    const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <p className={GeistMono.className}>{time}</p>
        </div>
    );
};

export default Clock;

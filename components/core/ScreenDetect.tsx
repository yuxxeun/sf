"use client"

import React, { useState, useEffect } from 'react';

const ScreenSizeDetector: React.FC = () => {
    const [screenSize, setScreenSize] = useState<string>('');

    const handleResize = () => {
        setScreenSize(`${window.innerWidth} x ${window.innerHeight}`);
    };

    useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <p>{screenSize}</p>
        </div>
    );
};

export default ScreenSizeDetector;

import React, { useState, useEffect } from 'react';

const Loader = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`bg-gray-900 text-center fixed top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ${showLoader ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`loader transform transition-transform duration-500 ${showLoader ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="spinner"></div>
        </div>
    </div>
    );
};

export default Loader;

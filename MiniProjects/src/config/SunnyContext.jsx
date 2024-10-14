import React, { createContext, useState } from 'react';

export const SunnyContext = createContext();

export const SunnyProvider = ({ children }) => {
    const [isSunny, setIsSunny] = useState(true);

    return (
        <SunnyContext.Provider value={{ isSunny, setIsSunny }}>
            {children}
        </SunnyContext.Provider>
    );
};
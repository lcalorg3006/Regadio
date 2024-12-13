// src/context/useRiego.ts
import { useContext } from 'react';
import { RiegoContext } from './RiesgoContext';

export const useRiego = () => {
    const context = useContext(RiegoContext);
    if (!context) {
        throw new Error('useRiego must be used within a RiegoProvider');
    }
    return context;
};
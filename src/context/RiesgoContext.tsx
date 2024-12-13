import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { Group } from '../interfaces/ValveInterface';

interface RiegoContextType {
    groups: Group[];
    updateGroup: (updatedGroup: Group) => Promise<void>;
}

export const RiegoContext = createContext<RiegoContextType | undefined>(undefined);

export const RiegoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [groups, setGroups] = useState<Group[]>([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get<Group[]>('http://localhost:3000/items');
                setGroups(response.data);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };
        fetchItems();
    }, []);

    const updateGroup = async (updatedGroup: Group) => {
        try {
            const updatedGroups = groups.map((group) =>
                group.name === updatedGroup.name ? updatedGroup : group
            );
            setGroups(updatedGroups);
            await axios.post('http://localhost:3000/items', updatedGroups);
        } catch (error) {
            console.error('Error updating items:', error);
        }
    };

    return (
        <RiegoContext.Provider value={{ groups, updateGroup }}>
            {children}
        </RiegoContext.Provider>
    );
};
// src/components/GroupList.tsx
import React from 'react';
import { FlatList, View, Text } from 'react-native';
import GroupItem from './GroupItem';
import { Group } from '../interfaces/ValveInterface';
import { useRiego } from '../context/useRiesgo';

const GroupList: React.FC = () => {
    const { groups, updateGroup } = useRiego();

    if (groups.length === 0) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        < FlatList
            data={groups}
            keyExtractor={(item) => item.name}
            renderItem={({ item }: { item: Group }) => (
                <GroupItem group={item} onUpdate={updateGroup} />
            )}
        />
    );
};

export default GroupList;
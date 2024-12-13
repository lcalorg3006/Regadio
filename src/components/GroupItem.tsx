import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Valve from './Valve';
import { Group } from '../interfaces/ValveInterface';

interface GroupItemProps {
    group: Group;
    onUpdate: (updatedGroup: Group) => void;
}

const GroupItem = ({ group, onUpdate }: GroupItemProps) => {
    const toggleValve = (valveName: string) => {
        const updatedValues = group.values.map((value) =>
            value.name === valveName ? { ...value, state: !value.state } : value
        );

        const updatedGroup = { ...group, values: updatedValues };
        onUpdate(updatedGroup);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.groupName}>{group.name}</Text>
            {group.values.map((value) => (
                <Valve key={value.name} value={value} onToggle={toggleValve} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    groupName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default GroupItem;
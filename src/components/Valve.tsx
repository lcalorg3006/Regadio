// src/components/Valve.tsx
import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { Value } from '../interfaces/ValveInterface';

interface ValveProps {
    value: Value;
    onToggle: (valveName: string) => void;
}

const Valve = ({ value, onToggle }: ValveProps) => {
    return (
        <View style={styles.container}>
            <Text>{value.name}</Text>
            <Switch
                value={value.state}
                onValueChange={() => onToggle(value.name)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
});

export default Valve;
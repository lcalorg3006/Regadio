import React from 'react';
import { SafeAreaView } from 'react-native';
import GroupList from './src/components/GroupList';
import { RiegoProvider } from './src/context/RiesgoContext';

const App = () => {
    return (
        <RiegoProvider>
            <SafeAreaView>
                <GroupList />
            </SafeAreaView>
        </RiegoProvider>
    );
};

export default App;
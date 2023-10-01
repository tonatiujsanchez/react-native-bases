/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { PracticeScreen } from './src/screens';

export const App = () => {
    return (
        <SafeAreaView style={{
            flex: 1,
            // backgroundColor: '#28425B',
        }}>
            <PracticeScreen />
        </SafeAreaView>
    );
};

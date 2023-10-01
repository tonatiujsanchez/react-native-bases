/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { FlexScreen } from './src/screens';

export const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlexScreen />
        </SafeAreaView>
    );
};

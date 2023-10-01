import React from 'react';
import { View, StyleSheet } from 'react-native';

export const PracticeScreen = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.boxPurple } />
            <View style={ styles.boxOrange } />
            <View style={ styles.boxBlue } />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28425B',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxPurple: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
    },
    boxOrange: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        top: 50,
    },
    boxBlue: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
    },
});

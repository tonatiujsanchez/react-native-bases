import React from 'react';
import { StyleSheet, View } from 'react-native';

export const PositionRelativeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={ styles.boxPurple }></View>
            <View style={ styles.boxOrange }></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28C4D9',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxPurple: {
        width:100,
        height:100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        top: 50,
        left: 50,
    },
    boxOrange: {
        width:100,
        height:100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        top: -100,
        bottom: 0,
    },
});

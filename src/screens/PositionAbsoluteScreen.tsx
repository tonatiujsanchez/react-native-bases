import React from 'react';
import { StyleSheet, View } from 'react-native';

export const PositionAbsoluteScreen = () => {
    return (
        <View style={styles.container}>
            <View style={ styles.boxGreen }></View>
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
    boxGreen: {
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    boxPurple: {
        width:100,
        height:100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 10,
        right: 10,
    },
    boxOrange: {
        width:100,
        height:100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
});

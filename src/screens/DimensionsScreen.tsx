import React from 'react';
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

export const DimensionsScreen = () => {

    const { width, height } = useWindowDimensions()

    return (
        <View>
            <View style={ styles.container }>
                <View style={{
                    ...styles.boxPurple,
                    height: height * 0.40
                }}>
                </View>
                <View style={ styles.boxOrange }>
                </View>
            </View>
            <Text style={ styles.title }>width:{ width }</Text>
            <Text style={ styles.title }>height:{ height }</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        backgroundColor:'grey',
    },
    boxPurple: {
        backgroundColor: '#5856D6',
        width: '50%',
        height: '50%',
    },
    boxOrange: {
        backgroundColor: '#F0A23B',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
    },
});
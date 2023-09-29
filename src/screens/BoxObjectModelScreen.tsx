import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>BoxObjectModelScreen</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
    },
    title: {
        fontSize: 20,
        borderWidth: 10,
        paddingHorizontal: 50,
        paddingVertical: 20,
        marginHorizontal: 20,
    },
});

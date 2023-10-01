import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const FlexScreen = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.boxOne }>Caja 1</Text>
            <Text style={ styles.boxTwo }>Caja 2</Text>
            <Text style={ styles.boxThree }>Caja 3</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'skyblue',
        flex: 1,
        flexDirection:'row',
    },
    boxOne: {
        borderWidth: 2,
        borderColor: 'white',
        alignSelf: 'flex-start',
    },
    boxTwo: {
        borderWidth: 2,
        borderColor: 'white',
        alignSelf: 'flex-end',
    },
    boxThree: {
        borderWidth: 2,
        borderColor: 'white',
        alignSelf: 'center',
    },
});
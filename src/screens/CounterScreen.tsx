
import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Fab } from '../components'

export const CounterScreen = () => {

    const [counter, setCounter] = useState(10)

    const changeCounter = ( value:number ) => {
        setCounter( (c)=> c + value )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                { counter }
            </Text>

            <Fab
                title="+"
                position="br"
                onPress={ ()=> changeCounter(1) }
            />
            <Fab
                title="-"
                position="bl"
                onPress={ ()=> changeCounter(-1) }
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        color: '#000',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign:'center',
        top: -20,
    },
})
import React from 'react'
import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'

interface Props {
    title   :string
    position: 'bl'| 'br' | 'bc'
    onPress : () => void

}

export const Fab = ({ title, position, onPress  }:Props) => {

    const ios = () => {
        return(
            <TouchableOpacity
                activeOpacity={ 0.8 }
                onPress={ onPress }
                style={[
                    styles.fabLocation,
                    position === 'bl' && styles.left,
                    position === 'br' && styles.right,
                    position === 'bc' && styles.center,
                ]}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{ title  }</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View style={[
                styles.fabLocation,
                position === 'bl' && styles.left,
                position === 'br' && styles.right,
                position === 'bc' && styles.center,
            ]}>
                <TouchableNativeFeedback
                    onPress={ onPress }
                    background={ TouchableNativeFeedback.Ripple(
                        '#474747', false, 26
                    )}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{ title  }</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }


    return ( Platform.OS === 'android' ? android() : ios())
}


const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 35,
    },
    right:{
        right: 30

    },
    left:{
        left: 30
    },
    center:{
        left: 190
    },
    fab: {
        backgroundColor:'#111100',
        borderRadius: 10,
        width: 45,
        height: 40,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    fabText:{
        color: '#f7f7f7',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
})

import React from 'react'
import { View, StyleSheet } from 'react-native'

function LifeUnit({isActive, onPress, isBonus = false} 
    : {isActive : boolean, onPress: () => any, isBonus : boolean}) {

    return (
        <View style={[styles.container, styles[isActive ? (isBonus ? 'bonusActive' : 'active') : 'inactive']]} 
            onTouchEnd={onPress}
        />
    )
}

export default LifeUnit

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 20,
        borderRadius: 8,
        marginRight: 10,
    },
    active: {
        backgroundColor: 'green'
    },
    inactive: {
        backgroundColor: '#555',
    },
    bonusActive: {
        backgroundColor: 'blue'
    }
})
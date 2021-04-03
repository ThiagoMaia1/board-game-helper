import React from 'react'
import { View, StyleSheet, useWindowDimensions } from 'react-native'

function LifeUnit({isActive, onPress, isBonus = false} 
    : {isActive : boolean, onPress: () => any, isBonus : boolean}) {

    let {height, width} = useWindowDimensions();
    const length = Math.min(height, width)*0.33;

    return (
        <View style={[{height: length, width: length*0.13}, styles.container, styles[isActive ? (isBonus ? 'bonusActive' : 'active') : 'inactive']]} 
            onTouchEnd={onPress}
        />
    )
}

export default LifeUnit

const styles = StyleSheet.create({
    container: {
        marginRight: 4,
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
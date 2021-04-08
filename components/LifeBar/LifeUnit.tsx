import React from 'react'
import { View, StyleSheet, useWindowDimensions } from 'react-native'

function LifeUnit({isActive, onPress, isBonus = false, widthFactor = 1} 
    : {isActive : boolean, onPress: () => any, isBonus : boolean, widthFactor ?: number}) {

    let {height, width} = useWindowDimensions();
    const length = Math.min(height, width)*0.33;

    return (
        <View style={[
                {height: length, width: length*0.13*widthFactor, marginRight: 4*widthFactor},  
                styles[isActive ? (isBonus ? 'bonusActive' : 'active') : 'inactive']
            ]} 
            onTouchEnd={onPress}
        />
    )
}

export default LifeUnit

const styles = StyleSheet.create({
    active: {
        backgroundColor: 'green'
    },
    inactive: {
        backgroundColor: '#555',
    },
    bonusActive: {
        backgroundColor: '#6666ff',
    }
})
import React from 'react'
import { StyleSheet, View } from 'react-native';
import Text from '../Text/Text';

export enum Direction {
    top = 0,
    right = 90,
    bottom = 180,
    left = -90,
}

function Arrow({direction} : {direction: Direction}) {

    const angle = direction;
    return (
        <View style={[styles.container, {transform: [{rotate: angle + 'deg'}]}]}>
            <Text style={styles.triangle}>▲</Text>
            <View style={styles.line}/>
        </View>
    )
}

export default Arrow;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        overflow: 'visible',
    },
    triangle: {
        color: 'red',
        transform: [{translateX: -8}],
        fontSize: 25,
        lineHeight: 0,
        zIndex: 10,
    },
    line: {
        width: 5,
        height: 60,
        backgroundColor: 'black',
    }
})

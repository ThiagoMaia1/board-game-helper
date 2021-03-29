import React from 'react'
import { StyleSheet, View } from 'react-native';

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
            <View style={styles.triangle}/>
            <View style={styles.line}/>
        </View>
    )
}

export default Arrow;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 9,
        borderRightWidth: 9,
        borderBottomWidth: 19,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'red',
        margin: 0,
        marginLeft: -6,
        borderWidth: 0,
        borderColor:"black"
    },
    line: {
        width: 5,
        height: 80,
        backgroundColor: 'black',
    }
})

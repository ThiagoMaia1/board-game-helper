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
    },
    triangle: {
        // width: 0,
        // height: 0,
        color: 'red',
        transform: [{translateX: -8}],
        fontSize: 25,
        lineHeight: 0,
        zIndex: 10,
        // textAlign: 'center',
        // position: 'absolute',
        // borderStyle: 'solid',
        // borderLeftWidth: 9,
        // borderRightWidth: 9,
        // borderBottomWidth: 19,
        // borderLeftColor: 'transparent',
        // borderRightColor: 'transparent',
        // borderBottomColor: '#ff3300',
        // margin: 0,
        // marginLeft: -6,
        // borderWidth: 0,
        // borderColor:"black"
    },
    line: {
        width: 5,
        height: 60,
        backgroundColor: 'black',
    }
})

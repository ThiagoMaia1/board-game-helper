import React from 'react'
import { StyleSheet, View } from 'react-native';
import Arrow, { Direction } from './Arrow';

function CartesianBox() {

    return (
        <View style={styles.container}>
            <Arrow direction={Direction.top}/>
            {/* <View style={styles.square}/> */}
            <View style={styles.rightArrowContainer}>
                <Arrow direction={Direction.right}/>
            </View>
        </View>
    )
}

export default CartesianBox;

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        width: 50,
    },
    rightArrowContainer: {
        position: 'absolute',
        top: 43,
        left: 22,
        // transform: [{
        //     translateY: -50,
        //     translateX: 170,
        // }]
    },
    square: {
        width: 55,
        height: 55,
        backgroundColor: 'white',
        left: 20,
        top: 25,
        // borderRadius: 10,
        position: 'absolute',
    }
})

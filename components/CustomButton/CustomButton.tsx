import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

function CustomButton({label, onPress} : {label : string, onPress : () => any}) {

    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.label}>{label}</Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'lightgray',
        borderRadius: 8,
        padding: 10,
    },
    label: {
        fontSize: 20,
    }
})
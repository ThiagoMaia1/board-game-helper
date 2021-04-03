import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import Text from '../Text/Text';

function CustomButton({label, onPress} : {label : string, onPress : () => any}) {

    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.label} textBreakStrategy={'balanced'}>{label}</Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'lightgray',
        // borderRadius: 8,
        padding: 6,
    },
    label: {
        fontSize: 13,
        textAlign: 'center',
        flexWrap: 'wrap',
    }
})
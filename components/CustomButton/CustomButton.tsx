import React from 'react'
import { Pressable, StyleSheet, ViewStyle } from 'react-native'
import Text from '../Text/Text';

function CustomButton({label, onPress, style} : {label : string, onPress : () => any, style ?: ViewStyle}) {

    return (
        <Pressable onPress={onPress} style={[styles.button, style]}>
            <Text style={styles.label} textBreakStrategy={'balanced'}>{label}</Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'lightgray',
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 13,
        lineHeight: 15,
        textAlign: 'center',
        flexWrap: 'wrap',
    }
})
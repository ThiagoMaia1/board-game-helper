import React from 'react'
import { StyleSheet, View } from 'react-native';
import Text from '../Text/Text';

function Marker({number, label}: {number : number, label : string}) {

    return (
        <View style={styles.container}>
            <Text style={[styles.counter, label === 'Raia' ? {width: 40} : null]}>{number + 1}</Text>
            <Text style={styles.label}>{label}</Text>
        </View>
    );
}

export default Marker;

const styles = StyleSheet.create({
    container: {
        marginTop: 13,
    },
    counter: {
        width: 65, 
        height: 40,
        backgroundColor: 'white',
        fontSize: 18,
        // borderRadius: 10,
        textAlign: 'center',
        lineHeight: 45,
        marginBottom: 5,
    },
    label: {
        textAlign: 'center',
        fontSize: 11,
    },
});

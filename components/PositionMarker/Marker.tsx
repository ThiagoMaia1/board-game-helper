import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

function Marker({number, label}: {number : number, label : string}) {

    return (
        <View style={styles.container}>
            <Text style={styles.counter}>{number + 1}</Text>
            <Text style={styles.label}>{label}</Text>
        </View>
    );
}

export default Marker;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    counter: {
        width: 50, 
        height: 50,
        backgroundColor: 'white',
        fontSize: 30,
        borderRadius: 10,
        textAlign: 'center',
        lineHeight: 45,
    },
    label: {
        textAlign: 'center',
    },
});

import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function GradientBorder({children} : {children : ReactNode}) {

    return (
        <LinearGradient style={[styles.gradient, styles.blackBorder]}
            start={[0, 0.5]}
            end={[1, 0.5]}
            colors={['#BF953F', '#FBF5B7', '#AA771C']}
        >
            <View style={styles.blackBorder}>
                {children}
            </View>
        </LinearGradient>
    );
}

export default GradientBorder;

const styles = StyleSheet.create({
    blackBorder: {
        borderWidth: 1,
        borderColor: 'black',
    },
    gradient: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
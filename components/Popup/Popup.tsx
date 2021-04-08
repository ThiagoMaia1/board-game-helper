import React, { useContext } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import GradientBorder from '../GradientBorder/GradientBorder';
import { GameStateContext } from '../../provider/GameStateProvider';

function Popup() {

    const {updatePopup, popup: {content}} = useContext(GameStateContext);
    const {height, width} = useWindowDimensions();

    if (!content) return null;
    return (
        <View style={[styles.container, {width, height}]} onTouchEnd={() => updatePopup(null)}>
            {/* <View style={{
        maxHeight: '90%',
        maxWidth: '90%',}}> */}
                <GradientBorder>
                    <View style={styles.innerContainer}>
                        {content}
                    </View> 
                </GradientBorder>
            {/* </View> */}
        </View>
    );
}

export default Popup;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        alignSelf: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 20,
    },
    innerContainer: {
        padding: 20,
        backgroundColor: 'white',
        maxHeight: '100%',
        maxWidth: '100%',
    },
});
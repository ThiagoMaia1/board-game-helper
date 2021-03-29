import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { mapFixedNumberArray } from '../../constants/functions';
import LifeUnit from './LifeUnit';

function LifeBar() {

    const baseLife = 16;
    let [life, setLife] = useState(baseLife);

    return (
        <View style={styles.container}>
            {mapFixedNumberArray<JSX.Element>(
                baseLife, 
                i => <LifeUnit key={i} isActive={i < life} onPress={() => setLife(i+1)}/>
            )}
        </View>
    )
}

export default LifeBar;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#222',
        flexDirection: 'row',
        width: 'min',
        alignSelf: 'flex-start',
        borderRadius: 10,
    }
})

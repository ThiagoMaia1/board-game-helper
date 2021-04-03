import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { mapFixedNumberArray } from '../../constants/functions';
import LifeUnit from './LifeUnit';

function LifeBar({charBonusLifeUnits = 0}) {

    const baseLife = 16;
    let [life, setLife] = useState(baseLife);

    return (
        <View style={styles.container}>
            {mapFixedNumberArray<JSX.Element>(
                baseLife + charBonusLifeUnits, 
                i => <LifeUnit key={i} 
                        isActive={i < life} 
                        onPress={() => setLife(i+1)}
                        isBonus={i > baseLife - 1}
                     />
            )}
        </View>
    )
}

export default LifeBar;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 6,
        paddingLeft: 6,
        backgroundColor: '#222',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginTop: 8,
    }
})

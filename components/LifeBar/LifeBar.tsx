import React, { useContext, useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { mapFixedNumberArray } from '../../constants/functions';
import { GameStateContext, baseLife } from '../../provider/GameStateProvider';
import LifeUnit from './LifeUnit';

function LifeBar() {

    let {gamePosition: {present: {life, holdingItem, character}}, setLife} = useContext(GameStateContext);
    let bonusLife = holdingItem 
                    ? character.exclusiveItem.improvements.life
                    : 0;

    return (
        <View style={styles.container}>
            {mapFixedNumberArray<JSX.Element>(
                baseLife + bonusLife, 
                i => <LifeUnit key={i} 
                    isActive={i < life} 
                    onPress={() => setLife(i+1)}
                    isBonus={i > baseLife - 1}
                    widthFactor={baseLife/(bonusLife + baseLife)}
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
        marginBottom: 10,
    }
})

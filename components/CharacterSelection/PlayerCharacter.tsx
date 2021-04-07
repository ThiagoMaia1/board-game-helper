import React, { useContext } from 'react'
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { GameStateContext } from '../../provider/GameStateProvider';
import CustomButton from '../CustomButton/CustomButton';
import CharacterTile from './CharacterTile';

function PlayerCharacter() {

    const { toggleHoldingItem, present: {holdingItem, character} } = useContext(GameStateContext);
    const { height, width } = useWindowDimensions();
    const isVertical = height > width;

    return (
        <View style={[{maxWidth: height/2}, isVertical ? {flexDirection: 'row'} : null, styles.container]}>
            <View style={{minWidth: 140, height: 110, marginLeft: 10}}>
                <CharacterTile character={character} holdingItem={holdingItem} includeLabel={false}/>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton label={holdingItem ? 'Usar Item' : 'Guardar Item'} 
                            onPress={toggleHoldingItem}
                />
            </View>
        </View>
    )
}

export default PlayerCharacter;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 10,
        marginRight: 20,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        padding: 5,
        flex: 1,
        marginLeft: 10,
    }
});


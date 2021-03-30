import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native';
import { GamePositionContext } from '../../provider/GamePositionProvider';
import CustomButton from '../CustomButton/CustomButton';
import CharacterTile from './CharacterTile';

function PlayerCharacter() {

    const { toggleHoldingItem, holdingItem, character } = useContext(GamePositionContext);
    return (
        <View style={styles.container}>
            <CharacterTile character={character} holdingItem={holdingItem}/>
            <CustomButton label={holdingItem ? 'Usar item' : 'Guardar item'} onPress={toggleHoldingItem}/>
        </View>
    )
}

export default PlayerCharacter;

const styles = StyleSheet.create({
    container: {
        width: '30%',
        height: '30%',
    }
});


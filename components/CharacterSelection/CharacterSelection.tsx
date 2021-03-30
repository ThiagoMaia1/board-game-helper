import React, { useContext, useState } from 'react'
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { characters } from '../../models/character';
import { GamePositionContext } from '../../provider/GamePositionProvider';
import CustomButton from '../CustomButton/CustomButton';
import CharacterTile from './CharacterTile';

function useProportionalDimensions() {
    const proportions = [
        50, 
        33,
    ];
    const window = useWindowDimensions();
    let height : string, width : string;
    let sortedProportions = proportions;
    if (window.height > window.width) sortedProportions.reverse();

    const addPercentage = (number : number) => number + '%';
    height = addPercentage(sortedProportions[0]);
    width = addPercentage(sortedProportions[1]); 
    return {height, width};
}


function CharacterSelection({hideCharacterSelecion} : {hideCharacterSelecion : () => void}) {

    let [characterIndex, setCharacterIndex] = useState(0);
    const tileDimensions = useProportionalDimensions();
    const { defineCharacter } = useContext(GamePositionContext); 

    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                {characters.map((c, i) => 
                    <View onTouchEnd={() => setCharacterIndex(i)} style={[
                        styles.characterContainer, 
                        tileDimensions,
                        characterIndex === i ? styles.selectedCharacter : null,
                    ]}>
                        <CharacterTile character={c}/>
                    </View>
                )}
            </View>
            <CustomButton label='Confirmar' onPress={() => {
                defineCharacter(characters[characterIndex]);
                hideCharacterSelecion();
            }}/>
        </View>
    )
}

export default CharacterSelection;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 0,
        height: 700,
        width: 500,
    },
    listContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        height: '90%',
        width: '100%',
    },
    characterContainer: {
        padding: 20,
        borderRadius: 10,
        height: '100%',
        width: '100%',
    },
    selectedCharacter: {
        borderColor: 'green',
    }
})
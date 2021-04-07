import React, { useContext, useState } from 'react'
import { View, StyleSheet, useWindowDimensions, GestureResponderEvent } from 'react-native';
import { characters } from '../../models/character';
import { GameStateContext } from '../../provider/GameStateProvider';
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


function CharacterSelection() {

    let [characterIndex, setCharacterIndex] = useState(0);
    const tileDimensions = useProportionalDimensions();
    const { defineCharacter } = useContext(GameStateContext); 
    const {height, width} = useWindowDimensions();

    return (
        <View style={[styles.container, {height, width}]}>
            <View style={styles.listContainer}>
                {characters.map((c, i) => {
                    const isSelected = characterIndex === i;
                    const selectCharacter = (e : GestureResponderEvent) => {
                        if(!isSelected) 
                            e.stopPropagation(); 
                        setCharacterIndex(i);
                    }
                    return <View key={c.name} onTouchEndCapture={selectCharacter} style={[
                        styles.characterContainer, 
                        tileDimensions,
                        isSelected ? styles.selectedCharacter : null,
                    ]}>
                        <CharacterTile character={c} isSelected={isSelected}/>
                    </View>
                }
                )}
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton label='Confirmar' onPress={() => {
                    defineCharacter(characters[characterIndex]);
                }}/>
            </View>
        </View>
    )
}

export default CharacterSelection;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly'
    },
    listContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        height: '86%',
        width: '100%',
        paddingHorizontal: 10,
    },
    characterContainer: {
        padding: 5,
        height: '100%',
        width: '100%',
        borderWidth: 5,
        borderColor: 'transparent',
    },
    selectedCharacter: {
        borderColor: 'gray',
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: '10%',
    }
})
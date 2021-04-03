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
            <CustomButton label='Confirmar' onPress={() => {
                defineCharacter(characters[characterIndex]);
            }}/>
        </View>
    )
}

export default CharacterSelection;

const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        // backgroundColor: 'rgb(90, 200, 90)',
    },
    listContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        height: '90%',
        width: '100%',
    },
    characterContainer: {
        padding: 5,
        // borderRadius: 10,
        height: '100%',
        width: '100%',
        borderWidth: 5,
        borderColor: 'transparent',
    },
    selectedCharacter: {
        borderColor: 'gray',
    }
})
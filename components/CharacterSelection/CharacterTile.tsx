import React, { useContext } from 'react'
import { View, Image, StyleSheet } from 'react-native';
import Text from '../Text/Text';
import GameCharacter from '../../models/character';
import { GameStateContext } from '../../provider/GameStateProvider';
import CharacterInfo from './CharacterInfo';


function CharacterTile({character, holdingItem = false, isSelected = false, includeLabel = true} 
    : {character : GameCharacter, holdingItem ?: boolean, isSelected ?: boolean, includeLabel ?: boolean}) {
    
    let heightImage = (includeLabel ? 60 : 80) + '%';
    let {updatePopup} = useContext(GameStateContext)
 
    return (
        <View style={styles.characterContainer} onTouchEnd={() => updatePopup(<CharacterInfo character={character}/>)}>
            {!includeLabel ? null 
                : <Text style={styles.title}>{(isSelected ? '>' : '') + character.label}</Text>
            }
            <View style={{width: heightImage, height: heightImage}}>
                <Image source={holdingItem ? character.imageEquippedRequired : character.imageRequired} 
                    style={styles.image}
                />
            </View>
        </View>
    )
}

export default CharacterTile;

const styles = StyleSheet.create({
    characterContainer: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    title: {
        fontSize: 15,
        marginBottom: 15,
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
    },
})
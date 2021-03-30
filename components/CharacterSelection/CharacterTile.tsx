import React, { useContext, useState } from 'react'
import { View, Image, StyleSheet, Text } from 'react-native';
import GameCharacter from '../../models/character';
import { GamePositionContext } from '../../provider/GamePositionProvider';
import ItemImage from '../Item/ItemImage';


function CharacterTile({character} : {character ?: GameCharacter}) {

    let [showInfo, setShowInfo] = useState(false);
    let contextCharacter = useContext(GamePositionContext).character;
    if (character === undefined) character = contextCharacter;

    return (
        <View style={styles.characterContainer} onTouchEnd={() => setShowInfo(s => !s)}>
            <Text style={styles.title}>{character.label}</Text>
            {!showInfo ? null :                
                <View style={styles.infoBox}>
                    <View>
                        <Text>Item Exclusivo: {character.exclusiveItem.label}</Text>
                        <Text>{character.exclusiveItem.description}</Text> 
                        <ItemImage item={character.exclusiveItemName} style={styles.itemImage}/>
                    </View>
                <Text>{character.description}</Text>
                </View>
            }
            <View style={styles.imageContainer}>
                <Image source={require(`../../assets/characters/${character.name}.png`)} 
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
        borderWidth: 3,
        flex: 0,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    title: {
        fontSize: 25,
        marginBottom: 15,
    },
    infoBox: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 100,
        width: '100%',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    selectedCharacter: {
        borderColor: 'green',
    },
    imageContainer: {
        width: '60%',
        height: '60%',
    },
    image: {
        flex: 1,
        // width: undefined,
        // height: undefined,
        resizeMode: 'contain'
    },
    itemImage: {
        width: 80, 
        height: 80,
    }
})
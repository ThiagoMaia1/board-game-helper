import React, { useState } from 'react'
import { View, Image, StyleSheet } from 'react-native';
import Text from '../Text/Text';
import GameCharacter from '../../models/character';
import ItemImage from '../Item/ItemImage';


function CharacterTile({character, holdingItem = false, isSelected = false, includeLabel = true} 
    : {character : GameCharacter, holdingItem ?: boolean, isSelected ?: boolean, includeLabel ?: boolean}) {
    
    let [showInfo, setShowInfo] = useState(false);
    let heightImage = (includeLabel ? 60 : 80) + '%';
 
    return (
        <View style={styles.characterContainer} onTouchEnd={() => setShowInfo(s => !s)}>
            {!includeLabel ? null 
                : <Text style={styles.title}>{(isSelected ? '>' : '') + character.label}</Text>
            }
            {!showInfo ? null :                
                <View style={styles.infoBox}>
                    <View>
                        <Text style={styles.text}>Item Exclusivo: {character.exclusiveItem.label}</Text>
                        <Text style={styles.text}>{character.exclusiveItem.description}</Text> 
                        <ItemImage item={character.exclusiveItem} style={styles.itemImage}/>
                    </View>
                    <Text style={styles.text}>{character.description}</Text>
                </View>
            }
            <View style={{width: heightImage, height: heightImage}}>
                {!holdingItem ? null 
                 : <ItemImage item={character.exclusiveItem} 
                              style={[styles.itemImage, {position: 'absolute', zIndex: 100}]}
                   />    
                }
                <Image source={character.imageRequired} 
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
    infoBox: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 100,
        width: '100%',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 5,
    },
    image: {
        flex: 1,
        // width: undefined,
        // height: undefined,
        resizeMode: 'contain'
    },
    itemImage: {
        width: 50, 
        height: 50,
    },
    text: {
        fontSize: 10,
    }
})
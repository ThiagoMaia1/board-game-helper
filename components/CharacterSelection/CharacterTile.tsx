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
            {!showInfo ? null :                
                <View style={styles.infoBox}>
                    <View style={styles.itemInfo}>
                        <Text style={[styles.text, {marginRight: 10}]}>Item:</Text>
                        <View>
                            <Text style={styles.text}>{character.exclusiveItem.label}</Text>
                            <ItemImage item={character.exclusiveItem} style={styles.itemImage}/>
                            <Text style={styles.text}>{character.exclusiveItem.description}</Text> 
                        </View>
                    </View>
                    <Text style={[styles.text, {width: '100%', textAlign: 'center'}]}>{character.description}</Text>
                </View>
            }
            {!includeLabel ? null 
                : <Text style={styles.title}>{(isSelected ? '>' : '') + character.label}</Text>
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
        top: 0,
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 100,
        width: '100%',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 5,
    },
    itemInfo: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
    },
    itemImage: {
        width: 50, 
        height: 50,
    },
    text: {
        fontSize: 10,
    }
})
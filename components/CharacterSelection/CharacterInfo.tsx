import React from 'react'
import { View, StyleSheet } from 'react-native';
import Text from '../Text/Text';
import GameCharacter from '../../models/character';
import ItemImage from '../Item/ItemImage';


function CharacterInfo({character} : {character : GameCharacter}) {
    
    return (
        <View style={styles.infoBox}>
            <Text style={[styles.title]}>{character.label}</Text>
            <Text style={[styles.text, {width: '100%', textAlign: 'center'}]}>{character.description}</Text>
            <View style={styles.itemInfo}>
                <View style={styles.itemBasicInfoContainer}>
                    <Text style={[styles.text, {marginTop: 5, flex: 1}]}>Item que pode carregar:</Text>
                    <View>
                        <Text style={styles.text}>{character.exclusiveItem.label}</Text>
                        <ItemImage item={character.exclusiveItem} style={styles.itemImage}/>
                    </View>
                </View>
                <Text style={[styles.text, {flex: 0}]}>{character.exclusiveItem.description}</Text> 
            </View>
        </View>
    )
}

export default CharacterInfo;

const styles = StyleSheet.create({
    infoBox: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    itemInfo: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'lightgray',
        margin: 20,
        marginBottom: 0,
        // maxHeight: '100%',
        // maxWidth: '100%',
    },
    itemBasicInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 5,
        // maxHeight: '100%',
        // maxWidth: '100%',
    },
    itemImage: {
        width: 50, 
        height: 50,
    },
    title: {
        fontSize: 15,
        marginBottom: 15,
    },
    text: {
        fontSize: 10,
        lineHeight: 12,
    }
})
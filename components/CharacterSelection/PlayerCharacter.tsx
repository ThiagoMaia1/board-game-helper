import React from 'react'
import { View, StyleSheet } from 'react-native';
import CharacterTile from './CharacterTile';

function PlayerCharacter() {

    return (
        <View style={styles.container}>
            <CharacterTile/>
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


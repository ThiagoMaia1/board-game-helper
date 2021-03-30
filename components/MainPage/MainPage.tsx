import React from 'react'
import ChapterList from '../ChapterList/ChapterList';
import Dice from '../Dice/Dice';
import LifeBar from '../LifeBar/LifeBar';
import PositionMarker from '../PositionMarker/PositionMarker';
import PlayerCharacter from '../CharacterSelection/PlayerCharacter';
import { View, StyleSheet } from 'react-native';

interface Props {}

function MainPage(props: Props) {
    const {} = props

    return (
        <View style={styles.container}>
            <Dice/>
            <LifeBar/>
            <PositionMarker/>
            <PlayerCharacter/>
            <ChapterList/>
        </View>
    )
}

export default MainPage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});
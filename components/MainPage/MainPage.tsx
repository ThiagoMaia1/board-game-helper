import React, { useContext } from 'react'
import ChapterList from '../ChapterList/ChapterList';
import Dice from '../Dice/Dice';
import LifeBar from '../LifeBar/LifeBar';
import PositionMarker from '../PositionMarker/PositionMarker';
import PlayerCharacter from '../CharacterSelection/PlayerCharacter';
import { View, StyleSheet } from 'react-native';
import { GameStateContext } from '../../provider/GameStateProvider';
import ChapterHistory from '../ChapterList/ChapterHistory';

function MainPage() {
    
    const {chapterHistoryIsVisible} = useContext(GameStateContext);

    return (
        <View style={styles.container}>
            {!chapterHistoryIsVisible ? null 
                : <ChapterHistory/>
            }
            <Dice/>
            <LifeBar/>
            <PlayerCharacter/>
            <PositionMarker/>
            <ChapterList/>
        </View>
    )
}

export default MainPage;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        padding: 10,
        alignItems: 'center',
    },
});
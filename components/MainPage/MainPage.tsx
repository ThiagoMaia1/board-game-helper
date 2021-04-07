import React, { useContext } from 'react'
import ChapterList from '../ChapterList/ChapterList';
import Dice from '../Dice/Dice';
import LifeBar from '../LifeBar/LifeBar';
import PositionMarker from '../PositionMarker/PositionMarker';
import PlayerCharacter from '../CharacterSelection/PlayerCharacter';
import { View, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import { GameStateContext } from '../../provider/GameStateProvider';
import ChapterHistory from '../ChapterList/ChapterHistory';
import UndoRedoButtons from '../UndoRedoButtons/UndoRedoButtons';

function MainPage() {
    
    const {chapterHistoryIsVisible} = useContext(GameStateContext).present;
    let {height} = useWindowDimensions();

    return (
        <>
            <View style={{height}}>
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
            </View>
            <UndoRedoButtons/>
        </>
    )
}

export default MainPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        // alignContent: 'space-between',
        height: '100%',
        width: '100%',
        padding: 10,
        alignItems: 'center',
    },
});
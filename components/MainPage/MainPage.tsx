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
                <ScrollView>
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
                </ScrollView>
            </View>
            <UndoRedoButtons/>
        </>
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
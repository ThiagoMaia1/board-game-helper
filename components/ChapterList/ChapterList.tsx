import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native';
import Text from '../Text/Text';
import { mapFixedNumberArray } from '../../constants/functions';
import { GameStateContext, totalChapters } from '../../provider/GameStateProvider';

function ChapterList() {

    const {chapter, toggleChapterHistory} = useContext(GameStateContext);

    return (
        <View style={styles.container} onTouchEndCapture={toggleChapterHistory}>
            {mapFixedNumberArray<JSX.Element>(
                totalChapters, 
                i => <Text key={i} style={[styles.text, i === chapter ? styles.selected : null]}>Capítulo {i + 1}</Text>
            )}
        </View>   
    );
}

export default ChapterList;

const styles = StyleSheet.create({
    container: {
        maxHeight: 300,
        maxWidth: 300,
        backgroundColor: 'white',
        padding: 5,
    },
    selected: {
        backgroundColor: 'green',
        color: 'white'
    },
    text: {
        padding: 5,
        fontSize: 13,
        paddingRight: 10,
    }
});
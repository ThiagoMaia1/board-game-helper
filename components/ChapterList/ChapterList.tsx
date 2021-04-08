import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native';
import Text from '../Text/Text';
import { mapFixedNumberArray } from '../../constants/functions';
import { GameStateContext, totalChapters } from '../../provider/GameStateProvider';
import ChapterHistory from './ChapterHistory';

function ChapterList() {

    const {gamePosition: {present: {chapter}}, updatePopup} = useContext(GameStateContext);

    return (
        <View style={styles.container} onTouchEndCapture={() => updatePopup(<ChapterHistory/>)}>
            {mapFixedNumberArray<JSX.Element>(
                totalChapters, 
                i => <Text key={i} style={[styles.text, i === chapter ? styles.selected : styles.unselected]}>Capítulo {i + 1}</Text>
            )}
        </View>   
    );
}

export default ChapterList;

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        maxHeight: 300,
        backgroundColor: 'white',
        padding: 5,
    },
    selected: {
        backgroundColor: 'green',
        color: 'white'
    },
    unselected: {
        backgroundColor: 'white',
        color: 'black'
    },
    text: {
        paddingLeft: 3.5,
        paddingTop: 6,
        paddingBottom: 2,
        paddingRight: 8,
        fontSize: 12,
    }
});
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import Text from '../Text/Text';
import { chapters, GameStateContext } from '../../provider/GameStateProvider';

function ChapterHistory() {

    const {chapter} = useContext(GameStateContext).gamePosition.present;
    const objIndex = Number(Object.keys(chapters)[chapter]) as keyof typeof chapters;
    const chapterDescription = chapters[objIndex];

    return (
        <>
            <Text style={[styles.text, styles.title]}>Capítulo {chapter + 1}</Text>
            <Text style={styles.text}>{chapterDescription}</Text>
        </>
    );
}

export default ChapterHistory;

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
    },
    title: {
        marginBottom: 10,
    }
});
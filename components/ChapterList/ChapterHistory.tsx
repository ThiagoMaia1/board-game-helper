import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text/Text';
import GradientBorder from '../GradientBorder/GradientBorder';
import { chapters, GameStateContext } from '../../provider/GameStateProvider';

function ChapterHistory() {

    const {present: {chapter}, toggleChapterHistory} = useContext(GameStateContext);
    const objIndex = Number(Object.keys(chapters)[chapter]) as keyof typeof chapters;
    const chapterDescription = chapters[objIndex];
    return (
        <View style={styles.container} onTouchEnd={toggleChapterHistory}>
            <GradientBorder>
                <View style={styles.innerContainer}>
                    <Text style={[styles.text, styles.title]}>Capítulo {chapter + 1}</Text>
                    <Text style={styles.text}>{chapterDescription}</Text>
                </View> 
            </GradientBorder>
        </View>
    );
}

export default ChapterHistory;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    innerContainer: {
        padding: 20,
        backgroundColor: 'white',
    },
    text: {
        fontFamily: 'Press Start 2P Regular',
        textAlign: 'center',
    },
    title: {
        marginBottom: 10,
    }
});
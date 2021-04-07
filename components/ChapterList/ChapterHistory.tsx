import React, { useContext } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import Text from '../Text/Text';
import GradientBorder from '../GradientBorder/GradientBorder';
import { chapters, GameStateContext } from '../../provider/GameStateProvider';

function ChapterHistory() {

    const {present: {chapter}, toggleChapterHistory} = useContext(GameStateContext);
    const objIndex = Number(Object.keys(chapters)[chapter]) as keyof typeof chapters;
    const chapterDescription = chapters[objIndex];
    const {height, width} = useWindowDimensions();

    return (
        <View style={[styles.container, {width, height}]} onTouchEnd={toggleChapterHistory}>
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
        top: 0,
        left: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        alignSelf: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 20,
    },
    innerContainer: {
        padding: 20,
        backgroundColor: 'white',
    },
    text: {
        textAlign: 'center',
    },
    title: {
        marginBottom: 10,
    }
});
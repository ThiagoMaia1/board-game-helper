import React, { useContext } from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native';
import { mapFixedNumberArray } from '../../constants/functions';
import { GamePositionContext, totalChapters } from '../../provider/GamePositionProvider';

function ChapterList() {

    const currentChapter = useContext(GamePositionContext).chapter;
    return (
        <ScrollView style={styles.scrollView}>
            {mapFixedNumberArray<JSX.Element>(
                totalChapters, 
                i => <Text key={i} style={i === currentChapter ? styles.selected : null}>
                    <Text style={styles.text}>Capítulo {i + 1}</Text>
                </Text>
            )}
        </ScrollView>   
    );
}

export default ChapterList;

const styles = StyleSheet.create({
    scrollView: {
        maxHeight: 300,
        width: 'min',
        flex: 0,
        backgroundColor: 'white',
    },
    selected: {
        backgroundColor: 'green',
        color: 'white'
    },
    text: {
        fontSize: 25,
    }
});
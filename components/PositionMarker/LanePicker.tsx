import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { GamePositionContext, totalLanes } from '../../provider/GamePositionProvider';
import Marker from './Marker';

type ArrowData = {
    icon : string;
    offset : -1 | 1;
};

const arrows : ArrowData[] = [
    {icon: '◀', offset: -1},
    {icon: '▶', offset: 1},
]



function LanePicker() {

    const { lane, moveLane } = useContext(GamePositionContext);

    function ArrowButton ({arrowData} : {arrowData : ArrowData}) {
        let nextLane = lane + arrowData.offset;
        let active = !(nextLane < 0 || nextLane >= totalLanes);
        let style = active ? null : {opacity: 0}; 
        return (
            <View onTouchEnd={active ? () => moveLane(arrowData.offset) : undefined} style={[style, styles.arrow]}>
                <Text style={styles.arrowText}>{arrowData.icon}</Text>
            </View>
        );
    }

    return (
        <View style={styles.bottomMarker}>
            <ArrowButton arrowData={arrows[0]}/>
            <Marker label='Raia' number={lane}/>
            <ArrowButton arrowData={arrows[1]}/>
        </View>
    )
}

export default LanePicker;

const styles = StyleSheet.create({
    bottomMarker: {
        marginRight: 15,
        flexDirection: 'row'
    },
    arrow: {
        paddingHorizontal: 10,
        justifyContent: 'center',

    },
    arrowText: {
        fontSize: 30,
        color: 'white',
    }
});
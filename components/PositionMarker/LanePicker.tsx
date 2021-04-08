import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native';
import Text from '../Text/Text';
import { GameStateContext, totalLanes } from '../../provider/GameStateProvider';
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

    const { gamePosition: {present: {lane}}, moveLane } = useContext(GameStateContext);

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
        flexDirection: 'row'
    },
    arrow: {
        paddingHorizontal: 10,
        justifyContent: 'center',

    },
    arrowText: {
        fontSize: 25,
        color: 'white',
        marginTop: 5,
    }
});
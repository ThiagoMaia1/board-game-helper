import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native';
import { GameStateContext } from '../../provider/GameStateProvider';
import CartesianBox from './CartesianBox';
import LanePicker from './LanePicker';
import Marker from './Marker';

function PositionMarker() {

    let {tile} = useContext(GameStateContext).gamePosition.present;

    return (
        <View style={styles.container}>
            <Marker label='Casa' number={tile}/>
            <View style={{transform: [{scale: 0.7}, {translateX: 10}]}}>
                <CartesianBox/>
            </View>
            <LanePicker/>
        </View>
    );
}

export default PositionMarker;

const styles = StyleSheet.create({
    container: {
        width: 135,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginRight: 15
    }
});

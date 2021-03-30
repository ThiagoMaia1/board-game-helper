import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native';
import { GamePositionContext } from '../../provider/GamePositionProvider';
import CartesianBox from './CartesianBox';
import LanePicker from './LanePicker';
import Marker from './Marker';

function PositionMarker() {

    let {tile} = useContext(GamePositionContext);

    return (
        <View style={styles.container}>
            <Marker label='Casa' number={tile}/>
            <CartesianBox/>
            <LanePicker/>
        </View>
    );
}

export default PositionMarker;

const styles = StyleSheet.create({
    container: {
        width: 160,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
});

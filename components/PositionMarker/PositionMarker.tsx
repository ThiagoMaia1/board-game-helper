import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import CartesianBox from './CartesianBox';
import Marker from './Marker';

function PositionMarker() {

    let [tile, setTile] = useState(0);
    let [lane, setLane] = useState(0);

    return (
        <View style={styles.container}>
            <Marker label='Casa' number={tile}/>
            <CartesianBox/>
            <View style={styles.bottomMarker}>
                <Marker label='Raia' number={lane}/>
            </View>
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
    },
    bottomMarker: {
        marginRight: 15,
    }
});

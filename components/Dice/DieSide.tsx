import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { mapFixedNumberArray } from '../../constants/functions';

// type Side = {
//     value : number,
//     drawing : DieSide,
// }

const dieCorners = 9;
type PointIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type DieValue = 1 | 2 | 3 | 4 | 5 | 6;
class Side {
    points : Array<PointIndex>;
    color : string;

    constructor(
        points : Array<PointIndex>,
        color : string
    ) {
        this.points = points;
        this.color = color;
    }
}

const sides : Array<Side> = [
    new Side([], 'transparent'),
    new Side([5], 'black'),
    new Side([1, 9], 'black'),
    new Side([1, 5, 9], 'black'),
    new Side([1, 3, 7, 9], 'black'),
    new Side([1, 3, 5, 7, 9], 'black'),
    new Side([1, 3, 4, 6, 7, 9], 'black'),
];

function DieSide({value} : {value : DieValue}) {

    const {points, color} = sides[value];
    
    return (
        <View style={styles.container}>
            {mapFixedNumberArray<JSX.Element>(dieCorners, i => 
                <View key={i+1} style={[
                    styles.pointContainer, 
                    {opacity: points.includes((i + 1) as PointIndex) ? 1 : 0,}
                ]}>
                    <View style={[styles.point, {backgroundColor: color}]}/>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 150,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    pointContainer: {
        width: '33%',
        height: '33%',
        padding: '5%', 
    },
    point: {
        height: '100%',
        width: '100%',
        borderRadius: 100,
    }
  });

export default DieSide;

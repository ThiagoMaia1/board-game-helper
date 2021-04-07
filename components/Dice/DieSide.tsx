import React from 'react'
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import Text from '../Text/Text';
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
    const {height, width} = useWindowDimensions();
    const side = Math.min(height, width)*0.25;
    
    return (
        <View style={[{width: side, height: side}, styles.container]}>
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        // aspectRatio: 1,
    },
    pointContainer: {
        width: '33%',
        height: '33%',
        padding: '5%', 
    },
    point: {
        height: '100%',
        width: '100%',
        // borderRadius: 100,
    }
  });

export default DieSide;

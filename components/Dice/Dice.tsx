import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { mapFixedNumberArray } from '../../constants/functions';
import CustomButton from '../CustomButton/CustomButton';
import Die from './Die';
import { DieValue } from './DieSide';

const dieNumber = 2;
const initialValue = 6 as DieValue;

function Dice() {

    let [values, setValues] = useState(Array<DieValue>(dieNumber).fill(initialValue));

    const getTotal = () => values.reduce((res, v) => {
        res += v;
        return res;
    }, 0);
    const updateValues = (value: DieValue, index: number) => {
        setValues(t => t.map((v, i) => i === index ? value : v));
    }
    const childrenMethods : Array<() => void> = [];
    const rollAll = () => childrenMethods.forEach(m => m());

    return (
        <View style={styles.container}>
            {mapFixedNumberArray<JSX.Element>(dieNumber, i =>
                <View key={i} style={styles.dieContainer}>
                    <Die updateValues={
                        (dieValue: DieValue) => updateValues(dieValue, i)
                    } initialValue={initialValue} addMethod={(method : () => void) => childrenMethods.push(method)}/>
                </View>
            )}
            <Text>Total: {getTotal()}</Text>
            <CustomButton label='Rodar Dados' onPress={rollAll}/>
        </View>
    );
}

export default Dice;

const styles = StyleSheet.create({
    container: {
        // width: 'min',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 20,
        alignContent: 'space-between',
        justifyContent: 'space-between',
    },
    dieContainer: {
        marginEnd: 20,
        marginBottom: 20,
    }
})

import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { mapFixedNumberArray } from '../../constants/functions';
import { GamePositionContext } from '../../provider/GamePositionProvider';
// import CustomButton from '../CustomButton/CustomButton';
import Die from './Die';
import { DieValue } from './DieSide';

const dieNumber = 2;
const initialValue = 6 as DieValue;

function Dice() {

    let [values, setValues] = useState(Array<DieValue>(dieNumber).fill(initialValue));
    let { moveTile } = useContext(GamePositionContext);
    console.log(useContext(GamePositionContext));

    const getTotal = () => values.reduce((res, v) => {
        res += v;
        return res;
    }, 0);
    const updateValues = (value: DieValue, index: number) => {
        setValues(t => t.map((v, i) => i === index ? value : v));
    }
    const childrenMethods : Array<(rollingAll : boolean) => void> = [];
    // const rollAll = () => childrenMethods.forEach(m => m(true));

    return (
        <View style={styles.container}>
            {mapFixedNumberArray<JSX.Element>(dieNumber, i =>
                <View key={i} style={styles.dieContainer} onTouchEndCapture={i === 1 ? () => childrenMethods[0](true) : void 0}>
                    <Die updateValues={
                        (dieValue : DieValue, rollingAll : boolean) => {
                            updateValues(dieValue, i);
                            if (i === 0 && !rollingAll) moveTile(dieValue);
                        }
                    } initialValue={initialValue} addMethod={(method : (rollingAll : boolean) => void) => childrenMethods.push(method)}/>
                </View>
            )}
            <Text>Total: {getTotal()}</Text>
            {/* <CustomButton label='Rodar Dados' onPress={rollAll}/> */}
        </View>
    );
}

export default Dice;

const styles = StyleSheet.create({
    container: {
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

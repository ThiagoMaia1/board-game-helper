import React, { useContext, useState } from 'react'
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import Text from '../Text/Text';
import { mapFixedNumberArray } from '../../constants/functions';
import { GameStateContext } from '../../provider/GameStateProvider';
// import CustomButton from '../CustomButton/CustomButton';
import Die from './Die';
import { DieValue } from './DieSide';

const dieNumber = 2;
const initialValue = 6 as DieValue;

function Dice() {

    let [values, setValues] = useState(Array<DieValue>(dieNumber).fill(initialValue));
    let { moveTile } = useContext(GameStateContext);
    let {height, width} = useWindowDimensions();
    let isVertical = height > width;

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
        <View style={[styles.container, {marginRight: isVertical ? 0 : 18}]}>
            <View style={styles.diceContainer}>
                {mapFixedNumberArray<JSX.Element>(dieNumber, i =>
                    <View key={i} style={i === 0 ? styles.dieContainer : null} onTouchEndCapture={i === 1 ? () => childrenMethods[0](true) : void 0}>
                        <Die updateValues={
                            (dieValue : DieValue, rollingAll : boolean) => {
                                updateValues(dieValue, i);
                                if (i === 0 && !rollingAll) moveTile(dieValue);
                            }
                        } initialValue={initialValue} addMethod={(method : (rollingAll : boolean) => void) => childrenMethods.push(method)}/>
                    </View>
                )}
            </View>
            <Text style={styles.total}>Total: {getTotal()}</Text>
            {/* <CustomButton label='Rodar Dados' onPress={rollAll}/> */}
        </View>
    );
}

export default Dice;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 10,
        // flex: 0,
    },
    diceContainer: {
        flex: 0,
        height: 'auto',
        flexShrink: 1,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    dieContainer: {
        marginRight: 12,
    },
    total: {
        fontSize: 12,
    }
})

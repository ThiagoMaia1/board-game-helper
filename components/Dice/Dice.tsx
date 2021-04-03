import React, { useContext, useState } from 'react'
import { View, StyleSheet } from 'react-native';
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
        marginRight: 18,
    },
    diceContainer: {
        width: '100%',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    dieContainer: {
        marginRight: 12,
    },
    total: {
        fontSize: 13,
    }
})

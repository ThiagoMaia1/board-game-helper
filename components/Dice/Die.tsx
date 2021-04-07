import React from 'react'
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import DieSide, { DieValue } from "./DieSide";

function Die({updateValues, addMethod, initialValue = 6 as DieValue} 
    : {updateValues : (dieValue : DieValue, rollingAll : boolean) => void, addMethod : (method : () => void) => void, initialValue : DieValue}) {

    const generateRandomValue = () => {
        let value = Math.ceil(Math.random()*6) as DieValue;
        return value;
    }
    let [value, setValue] = useState(initialValue);
    const throwDie = (rollingAll = false) => {
        let value = generateRandomValue();
        setValue(value);
        updateValues(value, rollingAll);
    }

    addMethod(throwDie);

    return (
        <View onTouchStart={() => throwDie()} style={styles.side}>
            <DieSide value={value}/>
        </View>
    );
}

export default Die;


const styles = StyleSheet.create({
    side: {
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        padding: 10,
        width: '100%',
    },
  });
  
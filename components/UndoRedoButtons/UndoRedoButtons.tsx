import React, { useContext, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import useBackButton from '../../hooks/useBackButton';
import { GameStateContext } from '../../provider/GameStateProvider';
import CustomButton from '../CustomButton/CustomButton';

function UndoRedoButtons() {

    const {undo, redo, gamePosition: {past, future}} = useContext(GameStateContext);
    const buttons = [
        {label: '«', callback: undo, array: past},
        {label: '»', callback: redo, array: future},
    ];

    useBackButton(() => {
        if (!past.length) return false;
        undo();
        return true;
    });

    return (
        <View style={styles.button}>
            {buttons.map(b => 
                <View key={b.label} 
                      style={b.array.length ? null : {opacity: 0}}
                >
                    <CustomButton label={b.label} 
                                  onPress={b.array.length ? b.callback : () => null}
                    />
                </View>    
            )}
        </View>
    )
}

export default UndoRedoButtons

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 10,
        width: '100%',
        paddingHorizontal: 10,       
    }
})
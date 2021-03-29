import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dice from './components/Dice/Dice';
import LifeBar from './components/LifeBar/LifeBar';
import PositionMarker from './components/PositionMarker/PositionMarker';

export default function App() {
  return (
    <View style={styles.container}>
      <Dice/>
      <LifeBar/>
      <PositionMarker/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
});

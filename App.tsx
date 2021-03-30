import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import GamePositionProvider from './provider/GamePositionProvider';
import CharacterSelection from './components/CharacterSelection/CharacterSelection';
import MainPage from './components/MainPage/MainPage';

export default function App() {

  let [showCharacterSelection, setShowCharacterSelection] = useState(true);

  return (
    <GamePositionProvider>
      <View style={styles.container}>
        <View style={showCharacterSelection ? null : {zIndex: -1}}>
          <CharacterSelection hideCharacterSelecion={() => setShowCharacterSelection(false)}/>
        </View>
        <MainPage/> 
      </View>
    </GamePositionProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
});

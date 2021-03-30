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
        {showCharacterSelection
          ? <CharacterSelection hideCharacterSelecion={() => setShowCharacterSelection(false)}/>
          : <MainPage/> 
        }
      </View>
    </GamePositionProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import GameStateProvider from './provider/GameStateProvider';
import CharacterSelection from './components/CharacterSelection/CharacterSelection';
import MainPage from './components/MainPage/MainPage';
import useCachedResources from './hooks/useCachedResources';

export default function App() {

  let isLoadingComplete = useCachedResources();
  let [showCharacterSelection, setShowCharacterSelection] = useState(true);

  if (!isLoadingComplete) return null;
  return (
    <GameStateProvider>
      <View style={styles.container}>
        {showCharacterSelection
          ? <CharacterSelection hideCharacterSelecion={() => setShowCharacterSelection(false)}/>
          : <MainPage/> 
        }
      </View>
    </GameStateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(90, 200, 90)',
    flex: 1,
  },
});

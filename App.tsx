import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
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
      <ImageBackground source={require('./assets/WoodTexture.png')} resizeMode={'repeat'}>
        <View style={styles.container}>
          {showCharacterSelection
            ? <CharacterSelection hideCharacterSelecion={() => setShowCharacterSelection(false)}/>
            : <MainPage/> 
          }
        </View>
      </ImageBackground>
    </GameStateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(139, 69, 19, 0.8)',
    flex: 1,
  },
});

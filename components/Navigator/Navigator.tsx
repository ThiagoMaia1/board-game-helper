import React, { useContext } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { GameStateContext } from '../../provider/GameStateProvider';
import CharacterSelection from '../CharacterSelection/CharacterSelection';
import MainPage from '../MainPage/MainPage';

export default function Navigator() {

  let {character} = useContext(GameStateContext).present;

  return (
        <ImageBackground source={require('../../assets/WoodTexture.png')} resizeMode={'repeat'}>
            <View style={styles.container}>
                {!character 
                    ? <CharacterSelection/>
                    : <MainPage/> 
                }
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(139, 69, 19, 0.8)',
    flex: 1,
  },
});

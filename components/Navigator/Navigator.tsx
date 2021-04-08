import React, { useContext } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { GameStateContext } from '../../provider/GameStateProvider';
import CharacterSelection from '../CharacterSelection/CharacterSelection';
import MainPage from '../MainPage/MainPage';
import Popup from '../Popup/Popup';

export default function Navigator() {

  let {character} = useContext(GameStateContext).gamePosition.present;

  return (
        <ImageBackground source={require('../../assets/WoodTexture.png')} 
                         resizeMode={'repeat'} 
                         style={{width: '100%', height: '100%'}}
        >
            <View style={styles.container}>
              <Popup/>
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

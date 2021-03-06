import React from 'react';
import GameStateProvider from './provider/GameStateProvider';
import Navigator from './components/Navigator/Navigator';
import useCachedResources from './hooks/useCachedResources';

function App() {

  let isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) return null;
  return (
    <GameStateProvider>
      <Navigator/>
    </GameStateProvider>
  );
}

export default App;
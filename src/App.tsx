import React from 'react'
import './App.scss'
// import RoundWorldMapAtlas from './components/WorldMap/RoundWorldMapAtlas'
import RotatingRoundWorldMap from './components/WorldMap/RotatingRoundWorldMap'
// import WorldMapAtlas from './components/WorldMap/WorldMapAtlas'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <RotatingRoundWorldMap />

      </header>
    </div>
  )
}

export default App



import React from 'react'
import './App.scss'
// import RoundWorldMap from './components/WorldMap/RoundWorldMapAtlas'
import RotatingRoundWorldMap from './components/WorldMap/RotatingRoundWorldMap'

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



import { useState } from 'react'
import ColourBox from './ColourBox'
import BoxGrid from './BoxGrid'
import './index.css'

const colours = [
  '#eff0f3',
  '#0d0d0d',
  '#2a2a2a',
  '#ff8e3c',
  '#fffffe',
  '#fffffe',
  '#d9376e',
]

function App() {
  return (
    <>
      <h1>ColourBox Zen</h1>
      <p>Click to change the colours and your mind.</p>
      <BoxGrid colours={colours} />
    </>
  )
}

export default App

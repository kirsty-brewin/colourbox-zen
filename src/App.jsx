import { useState } from 'react'
import ColourBox from './ColourBox'
import BoxGrid from './BoxGrid'
import './App.css'

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
      <BoxGrid colours={colours} />
    </>
  )
}

export default App

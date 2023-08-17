import { useState } from 'react'
import './App.css'

function randomClick(arr) {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

function ColourBox({ colours }) {
  const [colour, setColour] = useState(randomClick(colours))
  const colourChange = () => {
    const randomColour = randomClick(colours)
    setColour(randomColour)
  }
  return (
    <div
      className="ColourBox"
      onClick={colourChange}
      style={{ backgroundColor: colour }}
    ></div>
  )
}

export default ColourBox

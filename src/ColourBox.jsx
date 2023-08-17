import { useState } from 'react'
import './App.css'

function ColourBox() {
  const [colour, setColour] = useState('yellow')
  const colourChange = () => {
    setColour('orange')
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

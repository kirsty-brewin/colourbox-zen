import ColourBox from './ColourBox'
import './App.css'

function BoxGrid({ colours }) {
  const boxes = []
  for (let i = 0; i < 100; i++) {
    boxes.push(<ColourBox colours={colours} />)
  }
  return <div className="BoxGrid">{boxes}</div>
}

export default BoxGrid

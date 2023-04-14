import { useState } from "react"

export default function ColorSlider() {
const [slider1, setSlider1] = useState(0)
const [slider2, setSlider2] = useState(0)
const [slider3, setSlider3] = useState(0)

const changeValue1 = (event) => {
  setSlider1(event.target.value)
}
const changeValue2 = (event) => {
  setSlider2(event.target.value)
}
const changeValue3 = (event) => {
  setSlider3(event.target.value)
}

  return (
    <div className="main-container">
      <div className="box-color" style={{backgroundColor: `rgb(${slider1}, ${slider2}, ${slider3})`}}></div>
      <h2>rgb({`${slider1}, ${slider2}, ${slider3}`})</h2>
      <div className="sliders">
        <input 
          type="range" 
          onChange={changeValue1}
          min={0} 
          max={255}
          step={1}
          value={slider1}
        />
        <input 
          type="range" 
          onChange={changeValue2}
          min={0} 
          max={255}
          step={1}
          value={slider2}
        />
        <input 
          type="range" 
          onChange={changeValue3}
          min={0} 
          max={255}
          step={1}
          value={slider3}
        />
      </div>
    </div>
  )
}
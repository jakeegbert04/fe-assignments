import { useState } from "react"

export default function ColorSlider() {
const [slider1, setSlider1] = useState(0)

const changeValue1 = (event) => {
  setSlider1(event.target.value)
}

  return (
    <div className="main-container">
      <div className="box-color"></div>
      <div className="sliders">
        <input 
          type="range" 
          onChange={changeValue1}
          min={0} 
          max={255}
          step={1}
          value={slider1}
        />
      </div>
    </div>
  )
}
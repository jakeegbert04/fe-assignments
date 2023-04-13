import { useState } from "react";


export default function TextAligner() {
  const [text, setText] = useState("center")

  return (
    <div className="main-container text-align-container">
      <div className="display" style={{textAlign: `${text}`}} >Push Me Around</div>
      <div className="buttons">
        <button onClick={() => setText((text) => text = "left")}>Left</button>
        <button onClick={() => setText((text) => text = "center")}>Center</button>
        <button onClick={() => setText((text) => text = "right")}>Right</button>
      </div>
    </div>
  )
}
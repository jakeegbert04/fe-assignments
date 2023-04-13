import { useState } from "react";

export default function FontSizer() {
  const [size, setSize] = useState(100);


  function handleGrow() {
    if(size <= 195) {
      setSize((size) => size + 5)
    }
  }

  function handleShrink() {
    if(size > 5) {
      setSize((size) => size - 5) 
    }
  }
  return (
    <div className="maincontainer fontSize-container">
      <div className="display display-fontSize" style={{fontSize: `${size}px`}}>{`${size}px`}</div>
      <div className="button-wrapper">
        <button onClick={() => handleShrink()}>Shrink</button>
        <button onClick={() => handleGrow()}>Grow</button>
      </div>
    </div> 
  )
  
}
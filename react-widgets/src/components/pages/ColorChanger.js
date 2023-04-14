import { useState } from "react";
export default function ColorChanger() {
  const [color, setColor] = useState("black");

  function changeColor(e) {
    setColor((color) => color = e.target.value)
  }
  // const changeColor = (event) => {
  //   setColorevent.target.value

  // };

  return (
    <div className="main-container change-container">
      <div className="color-text" style={{ color: `${color}` }}>
        {color}
      </div>
      <div className="text-input">
        <input type="text" onChange={("")} />
      </div>
      <button onClick={() => setColor((color) => color)}>Change Color</button>
    </div>
  );
}
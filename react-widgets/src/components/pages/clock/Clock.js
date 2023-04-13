import { useState } from "react";


export default function GreetingToggle() {
  const [toggle, setToggle] = useState(false)

  function handleToggle() {
    setToggle((prevState) => (prevState = !prevState))
  }

    
    return (
      <div className="main-container greeting-toggle">
        <div className="display display-greeting">{toggle ? "hide me" : ""}</div>
        <button onClick={this.handleToggle}>{toggle ? "hide me" : "show me"}</button>

      </div>
    )
}
import { useState } from "react";

import Lifecycle from "./Lifecycle";

export default function GreetingToggle() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((prevState) => (prevState = !prevState));
  }

  function dateTimer() {
    setInterval(() => {
      console.log(new Date().toLocaleTimeString())
    }, 1000)
  }

  return (
    <div className="main-container greeting-toggle">
      {toggle && <Lifecycle />}
      <button onClick={() => handleToggle()}>
        {toggle ? "hide me" : "show me"}
      </button>
    </div>
  );
}
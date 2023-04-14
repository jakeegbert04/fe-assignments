import { useState, useEffect } from "react";



export default function GreetingToggle() {
  const [toggle, setToggle] = useState(false);
  const [time, setTime] = useState(Date());

  function handleToggle() {
    setToggle((prevState) => (prevState = !prevState));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, []);


  return (
    <div className="main-container greeting-toggle">
      {toggle && <h1>{time.toLocaleTimeString()}</h1>}
      <button onClick={() => handleToggle()}>
        {toggle ? "hide me" : "show me"}
      </button>
    </div>
  );
}
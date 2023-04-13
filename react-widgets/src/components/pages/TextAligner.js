import { useState } from "react";


export default function TextAligner() {
  const [text, setText] = useState("center")

  return (
    <div className="main-container text-align-container" style={{textAlign: "center"}}>
      hello
    </div>
  )
}
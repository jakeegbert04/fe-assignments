/* 
Random Hex Generator

Following the provided high fidelity mockup, use HTML, css, and vanilla JS to create a project that generates a random background color when a button is clicked.
-Must contain the elements in the mock design and reflect it next to perfect.
 - title bar
 - randomly generated hexadecimal color value
 - the background color of the main content should reflect the hexadecimal value
 - current hexadecimal value should be rendered to the page
 - at least 1 transistion / pseudo state effect
*/


function randomNum() {
  return Math.floor(Math.random() * 10)
}

function randomLetter() {
  const hex = "ABCDEF"

  return hex[Math.floor(Math.random() * hex.length)]
}



function hexaDeciaml() {
  const functionArray = [randomNum(), randomLetter()]
  let hexDecimalVar = "#"
  for(let i = 0; i < 6; i++) {
    hexDecimalVar += functionArray[Math.floor(Math.random() * functionArray.length)]
  }
  document.body.style.backgroundColor = hexDecimalVar;
  const rootEl = document.getElementById("hex-color")
  const p = document.createElement("p")
  const pText = document.createTextNode(hexDecimalVar)
  const div = document.createElement("div")
  let firstTime = true;

  if(firstTime === true) {
    div.appendChild(p)
    p.appendChild(pText)
    
    console.log(p)
    console.log(div)
    rootEl.appendChild(div)
    firstTime = false
  } else {
    div.remove()
    div.appendChild(p)
    p.appendChild(pText)
    
    console.log(p)
    console.log(div)
    rootEl.appendChild(div)
  }
  console.log(firstTime)
  return hexDecimalVar;
}

// function printHex() {
//   const rootEl = document.getElementById("hex-color")
//   const p = document.createElement("p")
//   const pText = document.createTextNode(hexaDeciaml())
//   const div = document.createElement("div")
//   div.remove()
//   div.appendChild(p)
//   p.appendChild(pText)
  
//   console.log(p)
//   console.log(div)
//   rootEl.appendChild(div)
// }



// console.log(hexaDeciaml())

// const hexColor = hexaDeciaml()
// function render(color) {
  

  
// }

// console.log(hexColor)


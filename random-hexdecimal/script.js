
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
  const rootEl = document.getElementById("change-text")
  const hexColor = document.createTextNode(hexDecimalVar)
  rootEl.removeChild(rootEl.firstChild)
  rootEl.appendChild(hexColor)
  return hexDecimalVar;
}

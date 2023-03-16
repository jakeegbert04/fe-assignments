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
  return hexDecimalVar
}
console.log(hexaDeciaml())
document.body.style.backgroundColor = hexaDeciaml()

let data = 0;
const number = document.getElementById("number-int")


number.innerText = data;

function increase() {
  number.innerText = ++data;
  NumColor()
}
function decrease() {
  number.innerText = --data;
  NumColor()
}
function resetNum() {
  data = 0;
  number.innerText = data;
  NumColor()
}

function NumColor() {
  if(data == 0) {
    number.style.color = "black"
  } else if(data < 0) {
    number.style.color = "red"
  } else {
    number.style.color = "green"
  }
}




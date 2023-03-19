/* 
Dynamic Navbar

- I don't care what content you have in the navbar
  - ex: logo on the left, links on the right
- Media queries ot make the navbar responsive
  - at a particular, display a hamburger icon instead of links
  - using js, make the hamburger "open" and "close" the menu to show links

Hint: 
 - start with the pieces (html skeleton, styles, media queries, js)
 - don't get hung up on 1 piece
*/
// const dropdown = document.getElementsByClassName("navbar-icon")
// console.log(dropdown)

// function iconAddX() {
//   const dropdown = document.getElementsByClassName("fa-bars");

  
//   const boxPressed = (e) => {
//     e.target.className = "fa-solid fa-xmark";
//     console.log(e.target.value)
//   }
//   dropdown[0].addEventListener("click", boxPressed);
// }

// iconAddX()
// function iconAddBar() {
//   const dropdown = document.getElementsByClassName("fa-xmark");

  
//   const boxPressed = (e) => {
//     e.target.className = "fa-solid fa-bars";
//     console.log(e.target.value)
//   }
//   dropdown[0].addEventListener("click", boxPressed);
// }

// iconAddBar()

function switchIcon(x) {
  x.classList.toggle("fa-xmark")
}

// const handleBtnClick = e => {
//   if(e.target.innerText === "On") {
//     e.target.innerText = "Off"
//   } else {
//     e.target.innerText = "On"
//   }
// }
// dropdown.addEventListener("click",dropdownChild )
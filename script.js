const COLORS_ARRAY = [
    "red",
    "yellow",
    "magenta",
    "cyan",
    "blue",
    "black",
    "gray",
    "teal",
    "green",
    "purple",
    "violet",
  ];
  // ===== CHALLENGE =====
  // 1. Create A Function (generate)
  const body = document.querySelector('body')
  function generate (){
    let bodyBC = body.style.backgroundColor = COLORS_ARRAY[Math.floor(Math.random() * 11)]
    const li = document.createElement('li')
    document.querySelector('ul').appendChild(li)
    li.textContent = bodyBC
  }
  const colorMe = document.querySelector('#generate-color')
  colorMe.addEventListener('click',generate)
// Function should get a random color from the COLORS_ARRAY
  // Create a li element
  // Add the color name to the li text
        // / Set the background color of the li to the random color
  // Append the li to the ul
 
function reset (){
    const ul = document.querySelector('#color-list')
    while(ul.firstChild){
        ul.firstChild.remove()
        body.style.backgroundColor ='white'
    }
    }
const resetBtn = document.querySelector('#reset')
resetBtn.addEventListener('click', reset)
  // 2. Create Function (reset)
  // Should remove all li children from the ul. 
  // Should set background color to white.


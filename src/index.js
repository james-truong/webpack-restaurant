import { pageLoad } from './pageLoad'
import { aboutTab } from './aboutTab'
import { menuTab } from './menuTab'
import { contactTab} from './contactTab'
//import style from "./_scss/main.scss";


// append homepage view
const content = document.getElementById('content');
content.appendChild(pageLoad());

const mainDiv = document.querySelector('.main');
mainDiv.appendChild(aboutTab());

// add Event Listener to navigation
let navElms = document.querySelectorAll('nav ul li');
navElms = Array.from(navElms);

const nav = document.querySelector('nav');

nav.addEventListener("click", function(e){
  // remove 'active' class from all elements
  for (let elm of navElms){
    elm.classList.remove('active');
  }
    // clear previous 
  mainDiv.innerHTML = '';
  console.log(e.target.innerText)
  if(e.target.innerText == 'About'){
      mainDiv.appendChild(aboutTab());
      
  } 
  else if (e.target.innerText == 'Menu'){
      mainDiv.appendChild(menuTab());
      
  } 
  else if (e.target.innerText == 'Contact'){
      mainDiv.appendChild(contactTab());
      
  }
  e.target.classList.add('active');
})


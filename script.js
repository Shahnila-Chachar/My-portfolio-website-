let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector(".navbar");

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll=()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sc.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*='+id +"]").classList.add(active);
            })
        }
    })
}

menuIcon.onclick =() =>{
 menuIcon.classList.toggle('bx-x');
 navbar.classList.toggle('active');
}

const texts = ['Web Developer', 'UI/UX Expert', 'Software Developer'];
let index = 0;
let charIndex = 0;
let isTyping = true;
const typedText = document.getElementById('typed-text');

function typeEffect() {
  const currentText = texts[index];
  
  if (isTyping) {
    // Typing forward
    typedText.textContent = currentText.substring(0, charIndex);
    charIndex++;
    
    if (charIndex > currentText.length) {
      isTyping = false;
      setTimeout(typeEffect, 1000); // Pause before deleting
      return;
    }
  } else {
    // Deleting backward
    charIndex--;
    typedText.textContent = currentText.substring(0, charIndex);
    
    if (charIndex === 0) {
      isTyping = true;
      index = (index + 1) % texts.length; // Move to next text
    }
  }
  
  setTimeout(typeEffect, isTyping ? 100 : 50); // Speed control
}

// Start the effect
typeEffect();
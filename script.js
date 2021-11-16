const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > nav.offsetHeight +150) {
        nav.classList.add('active')
         
    } else {
        nav.classList.remove('active')
    }

}

img = document.getElementById("thumbnail");
// Function to increase image size
function enlargeImg() {
  // Set image size to 1.5 times original
  img.style.transform = "scale(1.5)";
  // Animation effect 
  img.style.transition = "transform 0.25s ease";
}
// Function to reset image size
function resetImg() {
  // Set image size to original
  img.style.transform = "scale(1)";
  img.style.transition = "transform 0.25s ease";
}



function myFunction() {
  alert("I am an alert box!");
}
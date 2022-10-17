/*eslint-env es8*/

//Turns the switch (which the eyeball is within) into an object for the purposes of adding an event listener
const eye = document.getElementById("eyeball");

//Turns eyeball into a clickable object which then runs the function cMode
eye.addEventListener("click", cMode);

//The function cMode toggles the CSS light-mode on/off
function cMode() {
    document.body.classList.toggle("light-mode");
}




//Turns the button into an object
const pill = document.getElementById("pillars");

//Makes the button clickable and triggers the toggle
pill.addEventListener("click", toggleSideBar);

//The toggle for side-bar-on CSS
function toggleSideBar() {
    document.body.classList.toggle("sidebon");
}

/*eslint-env es8*/

//Turns the switch (which the eyeball is within) into an object for the purposes of adding an event listener
const eye = document.getElementById("eyeball");

//Turns eyeball into a clickable object which then runs the function cMode
eye.addEventListener("click", cMode);

//The function cMode toggles the CSS light-mode on/off
function cMode() {
document.body.classList.toggle("light-mode");
}

// Minimize and Maximize the chat widget using this code
'strict mode';

console.log("javascript file started");

// declaring variables for the ID Selectors

var clickHeader = document.getElementById("dash");
var cBody = document.getElementById("chatWidgetBody");

console.log("chatHeader selected");

// Event Listner function will be triggerd when user clicks the button

clickHeader.addEventListener("click", miracle);
console.log("chat header clicked");

// Toggle : Maximize and Minimize the Chat Widget

function miracle() {
  if(clickHeader.style.display == 'block' || cBody.style.display == 'block' ){
  cBody.style.display = "none";
} else {
  cBody.style.display = "block";
}
};

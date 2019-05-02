// this is a minified Version of the same code:
// var numberofDrumButtons=document.querySelectorAll(".drum").length;console.log(numberofDrumButtons);for(var i=0;i<numberofDrumButtons;i++){document.querySelectorAll(".drum")[i].addEventListener("click",function(){var buttonInnerHtml=this.innerHTML;makeNoize(buttonInnerHtml);buttonAnimation(buttonInnerHtml)})}
// document.addEventListener("keypress",function(){makeNoize(event.key);buttonAnimation(event.key)});function makeNoize(key){switch(key){case "w":var tom4=new Audio("sounds/tom-4.mp3");tom4.play();break;case "a":var tom2=new Audio("sounds/tom-2.mp3");tom2.play();break;case "s":var tom1=new Audio("sounds/tom-1.mp3");tom1.play();break;case "d":var tom3=new Audio("sounds/tom-3.mp3");tom3.play();break;case "j":var snare=new Audio("sounds/snare.mp3");snare.play();break;case "k":var kick=new Audio("sounds/kick-bass.mp3");kick.play();break;case "l":var crash=new Audio("sounds/crash.mp3");crash.play();break;default:console.log(innerHTML)}}
// function buttonAnimation(currentKey){var activeButton=document.querySelector("."+currentKey);activeButton.classList.add("pressed");setTimeout(function(){activeButton.classList.remove("pressed")}),100}


var numberofDrumButtons = document.querySelectorAll(".drum").length; //total number, atm 7
console.log(numberofDrumButtons);

// Detect Click
for (var i = 0; i < numberofDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    makeNoize(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

// Detec Keypress
document.addEventListener("keypress", function() {
  makeNoize(event.key);
  buttonAnimation(event.key);
});

// Make the Sound
function makeNoize(key) {
  switch (key) {
    case "w":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log(innerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey); // class of specific drum
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }), 100;
}

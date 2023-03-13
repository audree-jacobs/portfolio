

// Dark / Light Mode Switch  


// Get the root element
var r = document.querySelector(':root');

// Create a function for getting a variable value
function myFunction_get() {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
};

// Switch to Dark Mode
function myFunction_set() {
  
  r.style.setProperty('--white', '#262626');
  r.style.setProperty('--light_green', '#ffffff');
  r.style.setProperty('--black', '#d5d5d5');
  r.style.setProperty('--dark_gray', '#d5d5d5');
  r.style.setProperty('--dark_green', '#dcdcdc');
  r.style.setProperty('--shadow_gray', 'black');
  r.style.setProperty('--shadow_gray2', 'black');
  r.style.setProperty('--button_gray', '#8DBA69');
  r.style.setProperty('--gray_to_green', '#5a8a33');
  r.style.setProperty('--green_to_gray', '#919191');
  r.style.setProperty('--red', 'e67447');
  r.style.setProperty('--gray_to_white', '#919191');

  document.querySelector('.dark_switch').style.display = 'block'; 
  document.querySelector('.light_switch').style.display = 'none';
  
}

// Switch back to Light Mode 
function myFunction_set2() {
    
    r.style.setProperty('--white', '#ffffff');
    r.style.setProperty('--light_green', '#8DBA69');
    r.style.setProperty('--black', '#202020');
    r.style.setProperty('--dark_gray', '#3c3c3c');
    r.style.setProperty('--dark_green', '#5a8a33');
    r.style.setProperty('--shadow_gray', '#b0b0b0');
    r.style.setProperty('--shadow_gray2', '#919191');
    r.style.setProperty('--button_gray', '#3c3c3c');
    r.style.setProperty('--gray_to_green', '#919191');
    r.style.setProperty('--green_to_gray', '#5a8a33');
    r.style.setProperty('--red', '#B14317');
    r.style.setProperty('--gray_to_white', '#c9c9c9');
  
    document.querySelector('.dark_switch').style.display = 'none'; 
    document.querySelector('.light_switch').style.display = 'block';
    
}

// variables for the animation to work responsively with view width


var vw = window.innerWidth;
var vh = window.innerHeight; 

var vmin; 

if (vw > vh) {
  vmin = vh / 100; 
  console.log("height is smaller"); 
} else {
  vmin = vw / 100; 
  console.log("width is smaller"); 
}


var laptopX = 30 * vmin;
var laptopY = 28 * vmin;

var phoneX = 29 * vmin; 
var phoneY = 23 * vmin; 

var ipadX = 28 * vmin;
var ipadY = 21 * vmin; 

var gameX = 30 * vmin; 
var gameY = 27 * vmin; 

var vrX = 28 * vmin; 
var vrY = 30 * vmin; 

// Animation of Devices moving (constant cycle)

var tl = gsap.timeline({repeat: -1});

tl.to(".laptop", {x: laptopX, y: laptopY, duration: 1, ease: "linear", delay: 3})
  .to(".laptop", {opacity: 0, duration: 0.1, ease: "linear"}, ">")
  .to(".laptop", {x: -laptopX, y: -laptopY, opacity: 0, duration: 0.1, ease: "linear"}, ">>")
  .to(".laptop", {opacity: 1, duration: 0.1, ease: "linear"}, ">")

  // phone moves in and out
  .to(".phone", {x: phoneX, y: phoneY, duration: 1.5, ease: "bounce.out"}, ">-0.8")
  .to(".phone", {x: (2 * phoneX), y: (2 * phoneY), duration: 1, ease: "linear", delay: 2}, ">")

  // ipad moves in and out 
  .to(".ipad", {x: ipadX, y: ipadY, duration: 1.5, ease: "bounce.out"}, ">-0.8")
  .to(".ipad", {x: (2.3 * ipadX), y: (2.3 * ipadY), duration: 1, ease: "linear", delay: 2}, ">")

  // game moves in and out 
  .to(".gaming", {x: gameX, y: gameY, duration: 1.5, ease: "bounce.out"}, ">-0.8")
  .to(".gaming", {x: (2 * gameX), y: (2 * gameY), duration: 1, ease: "linear", delay: 2}, ">")

  // vr glasses moves in and out
  .to(".vr_glasses", {x: vrX, y: vrY, duration: 1.5, ease: "bounce.out"}, ">-0.8")
  .to(".vr_glasses", {x: (2 * vrX), y: (2 * vrY), duration: 1, ease: "linear", delay: 2}, ">")

  //laptop return to center 
  .to(".laptop", {x: 0, y: 0, duration: 1.5, ease: "bounce.out"}, ">-0.8")
  .to(".laptop", {duration: 1, ease: "linear", delay: 1}, ">");



  // circles expanding 

  function bigCircle() {

      var circle = document.querySelector(".circle1"); 
      var section = document.querySelector(".all_circles"); 
      circle.style.width = '32vw'; 
      circle.style.opacity = '1'; 
      circle.style.marginRight = '-22vw'; 
      circle.style.marginTop = "-8vw"; 
  }

// Menu Animation 

//var button2 = document.querySelector(".menu_button"); 
//const buttonStyle = getComputedStyle(button2);
//var width = buttonStyle.width; 
//var vwPixel = window.innerWidth; 
//var finalWidth = width / vwPixel;

 





function menu() {
  var ID = document.getElementsByClassName("menu_button")[0].id;

    if (ID == "menu_closed") {
      menuOpen(); 
      console.log(ID);
      document.getElementsByClassName("menu_button")[0].id = "menu_open";
    } else {
      menuClose(); 
      console.log(ID);
      document.getElementsByClassName("menu_button")[0].id = "menu_closed";
    }
} 

var menuButton = document.querySelector(".menu_button"); 
var menuText = document.querySelector("#menu_text");
var x = document.querySelector(".x"); 


var link1 = document.getElementsByClassName("menu_link")[0];
var link2 = document.getElementsByClassName("menu_link")[1];
var link3 = document.getElementsByClassName("menu_link")[2];
var link4 = document.getElementsByClassName("menu_link")[3];

function menuOpen() {

    menuButton.style.width = "2.8vw"; 
    menuText.style.display = "none";
    x.style.display = "block"; 
    ID = document.getElementsByClassName("menu_button")[0].id = "menu_open";
    console.log(ID);

    // display hidden menu items 
    link1.style.display = "inline-block"; 
    link2.style.display = "inline-block";
    link3.style.display = "inline-block"; 
    link4.style.display = "inline-block";
   


    // animate items 
    var linkAnimation = gsap.timeline();

    linkAnimation.to(".link1", {x: (-65 * vmin),  opacity: 1, duration: 0.6, ease: "linear"})
                 .to(".link2", {x: (-41 * vmin), opacity: 1, duration: 0.4, ease: "linear"}, "<") 
                 .to(".link3", {x: (-23 * vmin), opacity: 1, duration: 0.2, ease: "linear"}, "<")
                 .to(".link4", {x: (0 * vmin), opacity: 1, duration: 0.0, ease: "linear"}, "<");

}

function menuClose()  {

    menuButton.style.width = "7.5vw"; 
    menuText.style.display = "block";
    x.style.display = "none"; 

    // animate items 
    var linkAnimation = gsap.timeline();

    linkAnimation.to(".link1", {x: 0,  opacity: 0, duration: 0.7, ease: "linear"})
                 .to(".link2", {x: 0, opacity: 0, duration: 0.5, ease: "linear"}, "<") 
                 .to(".link3", {x: 0, opacity: 0, duration: 0.3, ease: "linear"}, "<")
                 .to(".link4", {x: 0, opacity: 0, duration: 0.1, ease: "linear"}, "<");


    // make links disappear 

    setTimeout(function() {

      //your code to be executed after the animation plays (700 millisecons)
      link1.style.display = "none"; 
      link2.style.display = "none";
      link3.style.display = "none";
      link4.style.display = "none";
    }, 700);


    // change class name back to normal 
    ID = document.getElementsByClassName("menu_button")[0].id = "menu_closed";
}
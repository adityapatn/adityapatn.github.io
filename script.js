var body = document.getElementById("body")
var width = body.offsetWidth;
console.log("The width of the viewport is " + width + " pixels.");

var navbar = document.getElementById("navbaritems");
var navitem = document.getElementsByClassName("nav-item");

function toggleMenu() {
  console.log("Button press")

  if (navbar.className === "topnav") {
    console.log("show dropdown menu");
    navbar.className += " responsive";
  } else {
    console.log("hide dropdown menu");
    navbar.className = "topnav";
  }
}


let x = document.getElementById("myTopnav");
function myFunction() {
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

window.onscroll = () => {
  if(this.scrollY >= 10) x.classList.add('down');
  else x.classList.remove('down');
};

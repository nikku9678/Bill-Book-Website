let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};


const coll = document.getElementsByClassName("collapse2");
const img = document.getElementById("image");
var i;


for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      img.src = "./images/minusplus.webp";
    } else {
      content.style.display = "block";
      img.src = "./images/plus.webp";
    }
  });
}
console.log(coll.length)

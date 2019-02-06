// Hamburger Icon
var menuIcon = document.getElementById("nav-icon");
var menuItems = document.getElementById("menuItems");
menuIcon.addEventListener("click", function() {
  menuIcon.classList.toggle("open");
  menuItems.classList.toggle("open");
});

// Scroll To Top Button
var btnArrow = document.getElementsByClassName("btn-arrow")[0];
btnArrow.addEventListener("click", () => scrollInto("leftAlignContainer"));

var headerHeight = document.getElementById("headerContainer").scrollHeight + 90;
var upArrow = document.getElementById("upArrow");
var downArrow = document.getElementById("downArrow");
window.onscroll = () => myFunction();

function myFunction() {
  if (
    document.body.scrollTop > headerHeight ||
    document.documentElement.scrollTop > headerHeight
  ) {
    btnArrow.addEventListener("click", () => scrollInto("headerContainer"));
    downArrow.classList.add("removeElement");
    upArrow.classList.remove("removeElement");
  } else {
    btnArrow.addEventListener("click", () => scrollInto("leftAlignContainer"));
    upArrow.classList.add("removeElement");
    downArrow.classList.remove("removeElement");
  }
}

function scrollInto(id) {
  document.getElementById(id).scrollIntoView();
}

// Font Effects
// Craetes text-shadow for css
function addSlingEffect() {
  var effectShadow = "text-shadow: 0em 0.08em #2dfffe";
  for (let i = 1; i < 10; i++) {
    effectShadow +=
      ", 0em -" + (1 / 3) * i + "em rgba(86, 204, 242, " + (1 - 0.1 * i) + ")";
  }
  console.log(effectShadow);
}

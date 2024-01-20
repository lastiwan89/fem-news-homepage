const menu = document.getElementById("menu");
const bars = document.getElementById("burger");
const close = document.getElementById("close");
const menuItem = document.getElementById("menu-item");

menu.addEventListener("click", () => {
  console.log("this is menu item and worked!!");
  if (menu) {
    bars.classList.toggle("active");
    close.classList.toggle("active-close");
    menuItem.classList.toggle("item-close");
  }
});

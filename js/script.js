function openMenu(burgerIcon, closeIcon) {
  let x = document.getElementById("dropdown-content");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    } 

  const src = document.getElementById("icon-img").src;
    if (src.match(burgerIcon)) {
      document.getElementById("icon-img").src=closeIcon;
    } else {
      document.getElementById("icon-img").src=burgerIcon;
    }
  
  console.log('Menu-click event handled.');
}

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
//-----------------------------------------------

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

//-----------------------------------------------

function scrolly(n) {
  var imgIndex;
  var arrX = [];

  var imgPath = document.querySelector('#flex-item-top').style.backgroundImage;
  console.log("PATH:", imgPath);

  var arrD = [
  'url("./images/desktop-image-hero-1.jpg")', 
  'url("./images/desktop-image-hero-2.jpg")', 
  'url("./images/desktop-image-hero-3.jpg")'
  ];

  var arrM = [ 
    'url("./images/mobile-image-hero-1.jpg")', 
    'url("./images/mobile-image-hero-2.jpg")', 
    'url("./images/mobile-image-hero-3.jpg")'
  ];



  if (arrM.includes(imgPath)) {
    imgIndex = arrM.indexOf(imgPath);
    arrX = arrM;
    console.log("From Phone", imgPath, arrX);
  }
  else {
    imgIndex = arrD.indexOf(imgPath);
    arrX = arrD;
    console.log("From Desktop", imgPath, arrX);
  }

  imgIndex += n;
  showbackground(imgIndex, arrX);
  console.log("idx", imgIndex);
}

function showbackground(n, arrX) {

  if (n > arrX.length - 1) {n = 0}
  if (n < 0) {n = arrX.length-1}

  document.querySelector('#flex-item-top').style.backgroundImage = arrX[n];

}





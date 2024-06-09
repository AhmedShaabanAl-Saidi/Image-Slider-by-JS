// Get elements related to the lightbox
var imgs = Array.from(document.querySelectorAll(".img-slider img"));
var lightBoxContainer = document.querySelector("#light-box-container");
var lightBoxItem = document.querySelector("#light-box-item");
var nextIcon = document.querySelector("#nextIcon");
var prevIcon = document.querySelector("#prevIcon");
var closeIcon = document.querySelector("#closeIcon");
var cursor = document.querySelector("#cursor");

// Global variable to keep track of the current image index
var globalIndex;

// Add click event listeners to all images in the slider
for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (e) {
    lightBoxContainer.classList.replace("d-none", "d-flex");
    var imgSrc = e.target.getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
    var index = imgs.indexOf(e.target);
    globalIndex = index;
  });
}

// nextFun
nextIcon.addEventListener("click", nextFun);

function nextFun() {
  globalIndex++;
  if (globalIndex == imgs.length) {
    globalIndex = 0;
  }
  var imgSrc = imgs[globalIndex].getAttribute("src");
  lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}

// prevFun
prevIcon.addEventListener("click", prevFun);

function prevFun() {
  globalIndex--;
  if (globalIndex < 0) {
    globalIndex = imgs.length - 1;
  }
  var imgSrc = imgs[globalIndex].getAttribute("src");
  lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}


// prevFun
closeIcon.addEventListener("click", closeFun);

function closeFun() {
  lightBoxContainer.classList.replace("d-flex", "d-none");
}

document.addEventListener("keydown", function (e) {
  if (lightBoxContainer.classList.contains("d-flex")) {
    if (e.key == "ArrowRight") {
      nextFun();
    } else if (e.key == "ArrowLeft") {
      prevFun();
    } else if (e.key == "Escape") {
      closeFun();
    }
  }
});

lightBoxContainer.addEventListener("click", function (e) {
  e.stopPropagation();
  closeFun();
});

lightBoxItem.addEventListener("click", function (e) {
  e.stopPropagation();
});

// document.addEventListener('mousemove',function(e){
//   cursor.style.left = e.clientX + 'px'
//   cursor.style.top = e.clientY + 'px'
// })

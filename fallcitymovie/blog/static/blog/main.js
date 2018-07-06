// function getEmail() {
//     var x = document.getElementById("myEmail").value;
//     document.getElementById("email").innerHTML = x;
// }
//
// console.log(getEmail());
//
// var slideIndex = 0;
// showSlides(slideIndex);
//
// // Next/previous controls
// function plusSlides(s) {
//   showSlides(slideIndex += s);
// }
//
// // Thumbnail image controls
// function currentSlide(s) {
//   showSlides(slideIndex = s);
// }
//
// function showSlides(s) {
//   let i;
//   let slides = document.getElementsByClassName("fcimages");
//   let dots = document.getElementsByClassName("dot");
//   if (s > slides.length) {slideIndex = 1}
//   if (s < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
let slideIndex = 0;

let images = document.querySelectorAll('.fcimages');
let dotControls = document.querySelector('#controlDots');
for (let i = 0; i < images.length; i++) {
    let span = document.createElement('span');
    span.classList.add("dot");
    span.id = i;
    span.addEventListener('click', function (e) {
        if (this.id !== slideIndex) {
            images[slideIndex].classList.remove("defaultpic");
            images[this.id].classList.add("defaultpic");
            slideIndex = parseInt(this.id);
        }
    });
    dotControls.appendChild(span);
}


document.querySelector('#next').addEventListener('click', function () {
    // console.log(slideIndex);
    let next;
    if (slideIndex + 1 > images.length - 1) {
        next = 0
    } else {
        next = slideIndex + 1
    }
    images[slideIndex].classList.remove("defaultpic");
    images[next].classList.add("defaultpic");
    slideIndex = next;
});

document.querySelector('#previous').addEventListener('click', function () {
    let prev;
    if (slideIndex - 1 < 1) {
        prev = images.length - 1
    } else {
        prev = slideIndex - 1
    }
    images[slideIndex].classList.remove("defaultpic");
    images[prev].classList.add("defaultpic");
    slideIndex = prev;
});


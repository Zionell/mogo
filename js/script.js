/* var acc = document.getElementsByClassName("acc_item");
var i;

for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var accordion__text = this.nextElementSibling;
      if (accordion__text.style.display === "block") {
         accordion__text.style.display = "none";
      } else {
         accordion__text.style.display = "block";
      }
   });
}; */

let one = document.querySelector('#accOne');
let two = document.querySelector('#accTwo');
let three = document.querySelector('#accThree');

let openOne = document.querySelector('#openOne');
let openTwo = document.querySelector('#openTwo');
let openThree = document.querySelector('#openThree');

let arrowOne = document.querySelector('#arrowOne');
let arrowTwo = document.querySelector('#arrowTwo');
let arrowThree = document.querySelector('#arrowThree');

one.addEventListener('click', () => {
   openOne.classList.toggle('active');
   openTwo.classList.remove('active');
   openThree.classList.remove('active');
   arrowOne.classList.toggle('arrow');
   arrowTwo.classList.remove('arrow');
   arrowThree.classList.remove('arrow');
});
two.addEventListener('click', () => {
   openTwo.classList.toggle('active');
   openOne.classList.remove('active');
   openThree.classList.remove('active');
   arrowTwo.classList.toggle('arrow');
   arrowOne.classList.remove('arrow');
   arrowThree.classList.remove('arrow');
});
three.addEventListener('click', () => {
   openThree.classList.toggle('active');
   openTwo.classList.remove('active');
   openOne.classList.remove('active');
   arrowThree.classList.toggle('arrow');
   arrowTwo.classList.remove('arrow');
   arrowOne.classList.remove('arrow');
});



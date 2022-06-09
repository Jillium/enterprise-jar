// let counterBox = document.getElementById('counter-box');
// let plusButton = document.getElementById('#plus');
// let reset = document.querySelector('.reset');
// let dayDisplay = document.querySelector('.counter-display');

let count = 0;


const btn = document.getElementById("plus");
const display = document.getElementById("count");
const resetBtn = document.getElementById("reset");



btn.addEventListener("click", function () {
  count++
  display.innerHTML = count;
  resetBtn.addEventListener('click', function () {
    display.innerHTML = 0;
    count = 0;
  })

});




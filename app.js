var acc = document.getElementsByClassName("notification-box");
var i;
var sum = document.getElementById("notification-sum");
var sumTotal = 3
var readAll = document.getElementById('all-read')

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.remove("active");

    sumTotal = sumTotal -1
    sum.textContent = sumTotal
  });
}

readAll.addEventListener('click', function(){
    sum.textContent = 0
    for (i = 0; i < acc.length; i++) {
        acc[i].classList.remove("active")
      }
})

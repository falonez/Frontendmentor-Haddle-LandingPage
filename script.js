let input = document.getElementById("footer-input");
let button = document.getElementById("btn-footer");
let mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
let message = document.getElementById("message-error");

button.addEventListener("click", function () {
  console.log(input.value);
  if (input.value.match(mailformat)) {
    return true;
  } else {
    message.innerHTML = "Check your email please";
    return false;
  }
});

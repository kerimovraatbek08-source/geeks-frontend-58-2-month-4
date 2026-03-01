//  PHONE NUMBER VALIDATE

const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

//const regExp = /\+996 [25679]\d{2} \d{2}- \d{2}- \d{2}/;
//const regExp = /\+996 [25769]\d{2} \d{2}-  \d{2}- \d{2}-/;
const regExp = /^\+996 [25769]\d{2} \d{2}-\d{2}-\d{2}$/;

//phoneButton.onclick = () => {
// if (regExp.test(phoneInput.value)) {
//   phoneResult.textContent = "OK, GOOD!";
//  phoneResult.style.color = "green";
// phoneResult.textContent = "No, ERROR X(";
// phoneResult.style.color = "red";
//}
//};

phoneButton.onclick = () => {
  if (regExp.test(phoneInput.value)) {
    phoneResult.innerText = "OK, GOOD!";
    phoneResult.style.color = "green";
  } else {
    phoneResult.innerText = "NO, ERROR X(";
    phoneResult.style.color = "red";
  }
};

// Регулярные выражения
//const nam = prompt("Whats your name?");
//const regExp = /r/i;
//console.log(nam.match(regExp));

// flags - флаги
// i - ignore case
// g - glabal search
// m - multiline
// y - sticky
// s - space

const numbers = "0123456789fgdgvfg___YYGYGY";
//const regExp = /\w/g;
//const regExp = / \d/;
//const regExp = /\s/g;

console.log(numbers.replace(regExp, "*"));

//console.log(numbers.match(regExp));

// Рукурсия

let num = 0;
const counter = () => {
  num++;
  console.log(num);
  if (num < 500) {
    requestAnimationFrame(counter);
  }
};
counter();

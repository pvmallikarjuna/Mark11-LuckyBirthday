const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const outputBox = document.querySelector("#output-box");

const checkNumberButton = document.querySelector("#check-number");
const resetButton = document.querySelector("#reset-values");

checkNumberButton.addEventListener("click", checkBirthIsLucky);
resetButton.addEventListener("click", resetValues);

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outputBox.innerText = "Your Birthday is Lucky!! 🥳";
  } else {
    outputBox.innerText = "Your Birthday is Not Lucky 😪"
  }
  console.log(sum, luckyNumber);
}

function checkBirthIsLucky() {
  const bday = dateOfBirth.value;
  const sum = calculateSum(bday);
  if (sum && luckyNumber.value) {
    compareValues(sum, luckyNumber.value);
  } else {
    outputBox.innerText = "Please enter both the fields 🤬";
  }

}

function calculateSum(bday) {

  bday = bday.replaceAll("-", "");

  let sum = 0;
  for (let index = 0; index < bday.length; index++) {
    sum += Number(bday.charAt(index));
  }
  return sum;
}

function resetValues() {
  dateOfBirth.value = "";
  luckyNumber.value = "";
  outputBox.innerText = "";
}


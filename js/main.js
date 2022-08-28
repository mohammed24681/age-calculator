
let yearsFeild = document.getElementById("year");
let monthsField = document.getElementById("month");
let daysField = document.getElementById("day");
let result = document.querySelector(".result");

let calcBtn = document.getElementById("calc-button");
calcBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (yearsFeild.value < new Date().getFullYear() && monthsField.value <= 12 && monthsField.value > 0 && daysField.value <= 31 && daysField.value > 0) {
    result.innerHTML = `you are <span id="years"></span> years, <span id="months"></span> months and <span id="days"></span> days`;
    let yearsVal = document.getElementById("years");
    let monthsVal = document.getElementById("months");
    let daysVal = document.getElementById("days");
    let date = `${yearsFeild.value}-${monthsField.value}-${daysField.value}`;
    yearsVal.innerHTML = getAge(date).years;
    monthsVal.innerHTML = getAge(date).months;
    daysVal.innerHTML = getAge(date).days;
    result.style.color = "white";
  }
  else {
    result.innerHTML = "wrong values !";
    result.style.color = "#ffeb3b";
  }
  result.style.display = "block";
})

document.body.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    calcBtn.click();
  }
})


function getAge(d) {
  let date =
    new Date().getTime() - new Date(d).getTime();
  return {
    years: `${Math.floor(date / (1000 * 60 * 60 * 24 * 365))}`,
    months: `${Math.floor(
      (date % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
    )}`,
    days: `${Math.floor(
      ((date % (1000 * 60 * 60 * 24 * 365)) % (1000 * 60 * 60 * 24 * 30)) /
        (1000 * 60 * 60 * 24)
    )}`,
  };
}
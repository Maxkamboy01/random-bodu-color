function getWeekDay(date, month, year) {
  const currentDate = new Date(Date.now());
  currentDate.setFullYear(year);
  currentDate.setMonth(month);
  currentDate.setDate(date);
  return whichWeekDay(currentDate.getDay());
}

function whichWeekDay(weekDay) {
  switch (weekDay) {
    case 0:
      return "sunday";
    case 1:
      return "monday";
    case 2:
      return "tuesday";
    case 3:
      return "wednesday";
    case 4:
      return "thurday";
    case 5:
      return "friday";
    case 6:
      return "saturday";
    default:
      return "error";
  }
}

console.log(getWeekDay(24, 6, 1999));

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(randomcolor);

function getrandom() {
  var randomcolor = `rgb( ${random(0, 255)}, ${random(0, 255)}, ${random(
    0,
    255
  )})`;

  document.querySelector("body").style.backgroundColor = randomcolor;
}

random();

function gethexidesimal() {
  const randomNumber = `#${random(0, 15).toString(16)}${random(0, 15).toString(
    16
  )}${random(0, 15).toString(16)}${random(0, 15).toString(16)}${random(
    0,
    15
  ).toString(16)}${random(0, 15).toString(16)}`;

  document.querySelector("body").style.backgroundColor =
    randomNumber.toString(16);
}

gethexidesimal();

function colorsrandom() {
  var colors = [
    "red",
    "green",
    "blue",
    "white",
    "black",
    "lightblue",
    "lightgreen",
    "lightgrey",
    "grey",
    "purple",
    "pink",
    "blueviolet",
    "aqua",
    "aquamarine",
  ];

  document.getElementById("body").style.background =
    colors[random(0, colors.length - 1)];
}

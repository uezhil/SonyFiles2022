Ifdemo();
Switchdemo();
//LoopDemo();

function Ifdemo() {
  var age = prompt("Enter your age?");

  if (age >= 18) {
    console.log("Eligible");
  } else if (age > 17) {
    console.log("Sorry next year");
  } else if (age < 5) {
    console.log("You are still a baby..");
  }
}

function Switchdemo() {
  var choice = prompt("Enter your favourite : 1. HTML 2.CSS 3.JS");
  switch (choice) {
    case "1":
      console.log("You love HTML");
      break;

    case "2":

    case "3":
      console.log("You love Web");
      break;

    default:
      break;
  }
}

function LoopDemo(params) {
  var n = 0;
  while (n <= 10) {
    console.log(n);
    if (n == 5) {
      continue;
      console.log("Inside loop");
    }
  }
  console.log("outside the loop");

  var index = 0;
  for (; index < 10; ) {
    index++;
    console.log(index);
  }
}

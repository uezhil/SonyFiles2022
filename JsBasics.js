//Display Methods
alert("Alert MEthod");
document.write("Document Write method");
confirm("Do you really want to close this?");
console.log("COnsole log method");

//create variables - weakly typed
var first_name = "Maya",
  age = 0;
first_name = prompt("What's your name");
age = parseInt(prompt("Enter your age", "Age"));
var status =
  typeof age == "number" && age >= 18
    ? "eligible to vote"
    : "No,not eligible to vote..";
alert("Hey " + first_name + " " + "you are " + status);


//Events 

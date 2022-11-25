function Sum() {
  var num1 = document.getElementById("n1").value;
  var num2 = document.getElementById("n2").value;
  var res = +num1 + +num2;
  document.getElementById("result").innerText = res;
}

function setFocus(field) {
  field.style.background = "#FF6CCC";
}

function setBlur(field) {
  field.style.background = "#FFffff";
}

function setSelection(field) {
  field.style.background = "#FF6CCC";
  field.style.fontWeight = "bold";
  field.style.fontFamily = "Nexa";
}

let calculate = document.querySelector(".calculate");
let yourName = document.getElementById("yourName");
let print = document.getElementById("print");
let loverName = document.getElementById("loverName");
let statement = document.getElementById("statement");

//Add Event Listener
calculate.addEventListener("click", love);

function love() {
  var name1 = yourName.value;
  var name2 = loverName.value;
  let random = Math.floor(Math.random() * 100);

  if (name1.length <= 2) {
    alert("Enter your Name");
  } else if (name2.length <= 2) {
    alert("Enter your Lover Name");
  } else {
    print.innerHTML = `${name1} and ${name2} = ${random} % of love`;
  }
  if (random <= 10 || random <= 50) {
    statement.innerHTML = "Good Relationship";
  } else if (random <= 51 || random <= 100) {
    statement.innerHTML = "Lovely Relationship";
  }
}

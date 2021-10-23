function changeText() {
  document.getElementById("external").innerHTML = "Change!";
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("fruits").innerHTML = text;

const fruit = ["Banana", "Orange", "Apple"];
document.getElementById("push").innerHTML = fruit;

function functionPush() {
  fruit.push("Mango");
  document.getElementById("push").innerHTML = fruit;
}

const points = [40, 100, 1, 5, 25, 10];
document.getElementById("sort").innerHTML = points;

function arraySort() {
  points.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  document.getElementById("sort").innerHTML = points;
}

let x = "";
const myObj = {
  name: "Anna",
  age: 25,
  cars:[
    {name: "Ford", models:["Mustang", "Focus", "Puma"]},
    {name: "Fiat", models:["Panda", "500", "Tipo"]},
    {name: "Jaguar", models:["XF", "F", "E-Type"]}
  ]
}

for(let i in myObj.cars){
  x += "<h2>" + myObj.cars[i].name + "</h2>";
  for(let j in myObj.cars[i].models){
    x += myObj.cars[i].models[j] + "<br>";
  }
}

document.getElementById("nested").innerHTML = x;


const person = {
  fName: "Anna",
  lName: "O'Brien",
  age: 25,
  eyeColor: "green"
}

let per = "";
for(let x in person){
  per += person[x] + " ";
}

document.getElementById("person").innerHTML = per;
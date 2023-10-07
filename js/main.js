console.log("Test JS file");

var num1 = 23;
var num2 = 44;

console.log("Answer is :" + (num1 + num2));

//function

function saveStudent() {
  console.log("test funtion");
}

saveStudent();

function login() {
  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;
  //alert (email+""+password)
  document.getElementById("result").innerHTML = email + password;
}

// function sum (){
//     //var sum = firstNumber+secondNumber
//     var firstNumber = document.getElementById("firstNumber").value
//     var secondNumber = document.getElementById("secondNumber").value
//     document.getElementById("sum")
// }

function addition() {
  var num1 = +document.getElementById("num1").value;
  var num2 = +document.getElementById("num2").value;
  document.getElementById("sum").innerHTML = num1 + num2;
}
function mine() {
  var num1 = +document.getElementById("num1").value;
  var num2 = +document.getElementById("num2").value;
  document.getElementById("sum").innerHTML = num1 - num2;
}
function multiply() {
  var num1 = +document.getElementById("num1").value;
  var num2 = +document.getElementById("num2").value;
  document.getElementById("sum").innerHTML = num1 * num2;
}
function devide() {
  var num1 = +document.getElementById("num1").value;
  var num2 = +document.getElementById("num2").value;
  document.getElementById("sum").innerHTML = num1 / num2;
}

// Flow Controllers if, else, elseif, switch case
// true, false, a statement that genarates true or false

var userAge = 15;

if (userAge > 15) {
  console.log("rrrrrrrrrrrrrrrrr");
}
var marks = 51;
var attendense = 3;

// if(marks>50) {
//     console.log("Pass");
// }else{
//     console.log("Fail");
// }

// relational operators --- >, <, >=, <=, ==, !=
//logical operators -----> &&, ||

// if (marks>=50 && attendense==6){
//     console.log("pass sasasa");
// }else{
//     console.log("fail");
// }

if (marks >= 50 && attendense == 6) {
  console.log("pass sasasa");
} else if (attendense >= 7) {
  console.log("Little chanse....");
} else if (marks >= 30) {
  console.log("second shy available....");
} else {
  console.log("fail");
}

// drop down ---> male, female+

// var var2 = 10;

// switch(var2){
//     case 12:
//         alert("Ranga")
//         break;
//     case 10:
//         alert("AAvin")
//         break;
//     case 20:
//         alert("Mahesh");
//         break;
//     default:
//         alert("No any maching value.....")
// }

//task
//January ----> durthu
//February ---> nawam
//March ----> madin
//April ----> Bak

// input english month by user
// button ---> get sinhala name
//result ---> Duruthu

function getMonth() {
  var month = document.getElementById("month").value;
  switch (month) {
    case "january":
      document.getElementById("monthRes").innerHTML = "Duruthu";
      break;
    case "February":
      document.getElementById("monthRes").innerHTML = "Nawam";
      break;
    case "March":
      document.getElementById("monthRes").innerHTML = "Madin";
      break;
    default:
      document.getElementById("monthRes").innerHTML = "No any maching month";
  }
}

// loops ---> for loop, while loop, do-while loop, foreach

var t = 4;

t += 6;
console.log(t);

var p = 5;
//p=p+1;
//p+=1;
//p++ ---> increment , p-- ----> decriment
//++p ---> pre increment
//p++ --> post increment
console.log(--p);

//for loop
for (var i = 0; i < 5; i++) {
  console.log("Hiiiiiiiiiiiiiiiii");
}

//task

//get user's name as user input
//get characters of above name and console log them

function getCharacters() {
  var userName = document.getElementById("userName").value;
  //let characters = userName.charAt();
  for (var i = 0; i < userName.length; i++) {
    console.log(userName.charAt(i));
  }
  document.getElementById("charAt").innerHTML = charAt;
}

// Arrays

//variable

var mathsMarks = 89; //single data

// js array
var stdMarks = [55, 66, 88, 99, 100];
console.log(stdMarks[3]);

var cars = ["BMW", "SUSUKI", "TOYOTA"];
console.log(cars[2]);

var data = ["RMK", 34, "AAVIN", 2021, "THUHINA"];
for (var i = 0; i < data.length; i++) {
  console.log(data[i]);
}

var data22 = 17;
console.log("Answer =" + (data22 % 3)); //modular oparaters

var numbers = [34, 56, 13, 45, 68, 32, 10, 3];

//display only even numbers

for (var i = 0; i < numbers.length; i++) {
  var evenNumbers = [];
  if (numbers[i] % 2 == 0) {
    console.log(numbers[i] + "");
  }
}
console.log(evenNumbers);

var number = [34, 56, 13, 45, 68, 32, 10, 3];
var evenNum = [];

for (var i = 0; i < number.length; i++) {
  if (number[i] % 2 == 0) {
    evenNum.push(number[i]);
  }
}

console.log(evenNum);

var posNumNegativeNum = [10, -5, 2, -3, 4, 9, -44, 33, 55, 66];

var sum = 0;
for (var i = 0; i < posNumNegativeNum.length; ++i) {
  if (posNumNegativeNum[i] > 0) {
    sum += posNumNegativeNum[i];
  }
}
console.log("RMK SUM " + sum);

// JS Object

var obj = { name: "Ranga", salary: "250000", address: "Bandaragama" };
console.log(obj.address);

var employees = [
  {
    name: "Ranga",
    salary: "25000",
    address: "Bandaragama",
  },
  {
    name: "AAvin",
    salary: "15000",
    address: "Bandaragama",
  },
  {
    name: "mahesh",
    salary: "35000",
    address: "Kurunagala",
  },
];
console.log(employees[0].salary);

//increment very employee's salary by 12%
// store new data to a another arry and display it
var newEmployees = [];
for (var i = 0; i < employees.length; i++) {
  var incrementedVal = (employees[i].salary / 100) * 12;
  var newSalary = employees[i].salary + incrementedVal;

  newEmployees.push({
    name: employees[i].name,
    address: employees[i].address,
    Salary: newSalary,
  });
}

console.log(newEmployees);

// while loop

//functions

function saveStudent() {
  console.log("function called");
}

// function calling statment
saveStudent();

//////////////////////////

//funtction parameters

function sumElement(x, y) {
  console.log(x * y);
}

//////////////////////////

//pass argument

sumElement(12, 4);

//////////////////////////////

// return type

function checkEvent(x) {
  var val = x / 2;
  return val;
}
var answer = checkEvent(24);
console.log(answer);

// arrow function

var deletData = () => {};
deletData();

///////////////////////

//Fetch

const getAll = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => console.log(json));
};
getAll();

const savePost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: document.getElementById("title").value,
      body: document.getElementById("body").value,
      userId: document.getElementById("userId").value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

"strict mode";

console.log("Hello World");

//Declaration
var x = 10;
var salary = 200.0;

var xObj = Number(10);
var salaryObj = Number(50000.0);

var letter = "a";
var letter2 = "a";
var fullname = "Juan Luna";
var fullname2 = "Kai Sotto";
var birthday = Date();
birthday.toString;
var arrays = []; // list
arrays[0] = "Lebron";
arrays[1] = "Carmelo";
arrays[2] = "Kai";

var array2 = ["tito", "vic", "joey"];

console.log(xObj);
console.log(salaryObj);
console.log(letter);
console.log(letter2);
console.log(fullname);
console.log(birthday);
console.log(arrays);
console.log(array2);

function sum(x, y) {
  if (x >= 0 && y >= 0) {
    return x + y;
  }
  console.log("Cant use negative num");
}

console.log(sum(10.0, 12));

//alert("alert!!");

var isResigned = false;
var isGoated = true;
var empty = null;

//console.log(wen);
var noValue;
console.log(noValue == undefined);

const PIE = 3.1416;

console.log(PIE);

function greet() {
  let message = "Mabuhay !!";
  console.log(message);
}

greet();

sum2 = (x = 10, y = 30) => x * y;

console.log(sum2());

mabuhay = () => "Mabohai penas";

function add(oper1, oper2) {
  let sum = oper1 + oper2;
  return sum;
}

console.log(add(10, 10));

//anonymous function

func1 = function () {
  console.log("anonymouse hncker function");
};

func1();

diffFunct = function (oper1, oper2) {
  let diff = oper1 + oper2;
  return diff;
};

console.log(diffFunct(10, 5));

//arrow function or lambda functions
func2 = () => console.log("Arrow function");
subtract = (x, y) => x - y;
func2();

console.log(subtract(20, 10));

//built in function

//Number

console.log(x.toString);

//x.toLocaleString(locales="utf-8")

//parsing
numToString = "10";
console.log(numToString);

var numValue = Number.parseInt(numToString);
console.log(numValue);

//Real Numbers
var amount = 242141.246913;
var amountInt = amount.toFixed(3);
console.log(amountInt);
console.log(typeof amount.toPrecision());

//Arrays built-in methods
arrays.push("new value");
console.log(arrays);
arrays.push(new Date("2028-10-10"));
console.log(arrays);
console.log("slice");
console.log(arrays.slice(1, arrays.length));

arrays.pop();
console.log(arrays);

console.log("=====================");

var numItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numItems.forEach((element) => {
  console.log(element);
});

iterate = function (item, index) {
  console.log(index, item);
};

numItems.forEach(iterate);

var fxn = (item) => item * 1000;

var magniItems = numItems.map(fxn);
console.log(magniItems);

var redux = function (accum, newItem) {
  return String(accum).concat(newItem);
};
var joinedSTR = numItems.reduce(redux);

console.log(joinedSTR);

//synchronouse version
var numItemsB = [100, 200, 300];
var totalItems = numItems.concat(numItemsB);
console.log(totalItems);
//async
var multipleArray = [
  [100, 200, 300],
  [400, 500, 600],
];
var totalItems2 = multipleArray.flatMap((items) => {
  return items;
});

console.log(totalItems2);

//Map, Dictionary , or object operation
var profile2 = new Map();
console.log(profile2);

//Creating objects

//SavingsAccount account deposit() withdraw()

// A tpical JS Objects

var savingsAccount = {};
savingsAccount.account = 0;
savingsAccount.deposit = function (amount) {
  this.account = this.account + amount;
};
savingsAccount.withdraw = function (amount) {
  this.account = this.account - amount;
};

//testing
savingsAccount.deposit(2000.0);
console.log(savingsAccount.account);
savingsAccount.withdraw(500.0);
console.log(savingsAccount.account);

//A function
var SavingsAccount2 = function (initAmount) {
  let savings = {};
  savings.account = initAmount;

  savings.deposit = function (amount) {
    savings.account = savings.account + amount;
  };

  savings.withdraw = function (amount) {
    savings.account = savings.account - amount;
  };
  return savings;
};

//Date , Array , Number , String
var sa1 = SavingsAccount2(2000);
console.log(sa1.account);
sa1.deposit(3000);
console.log(sa1.account);
sa1.withdraw(200);
console.log(sa1.account);

// Define the SavingsAccount3 function constructor
var SavingsAccount3 = function (initAmount) {
  this.amount = initAmount;
};

SavingsAccount3.prototype.deposit = function (amount) {
  this.amount += amount;
};

SavingsAccount3.prototype.withdraw = function (amount) {
  this.amount -= amount;
};

SavingsAccount3.prototype.getBalance = function () {
  return this.amount;
};

var sa2 = new SavingsAccount3(1000.0);

sa2.deposit(2000.0);
console.log(sa2.getBalance());
sa2.withdraw(500.0);
console.log(sa2.getBalance());

var SavingsAccount4 = {
  account: 0,
  deposit(amount) {
    this.account += amount;
  },
  withdraw(amount) {
    this.account -= amount;
  },
};

//Using class keyword

class SavingsAccount5 {
  constructor(initAmount) {
    this.account = initAmount;
  }
  deposit(amount) {
    this.account += amount;
  }

  withdraw(amount) {
    this.account -= amount;
  }
}

var sa5 = new SavingsAccount5(2000);
sa5.deposit(5000);
console.log(sa5.account);
sa5.withdraw(2000);
console.log(sa5.account);

//Encapsulation
//Prototype

class Employee {
  #id = 0;
  #firstName = "";
  #lastname = "";
  #age = 0;
  #salary = 0;

  get Id() {
    return this.#id;
  }

  set Id(id) {
    this.#id = id;
  }

  get FirstName() {
    return this.#firstName;
  }

  set FirstName(firstName) {
    this.#firstName = firstName;
  }

  get LastName() {
    return this.#lastname;
  }

  set LastName(lastname) {
    this.#lastname = lastname;
  }

  get Age() {
    return this.#age;
  }

  set Age(age) {
    this.#age = age;
  }

  get Salary() {
    return this.#salary;
  }

  set Salary(salary) {
    this.#salary = salary;
  }

  #computeInterest(rate) {
    this.account += this.account * rate;
    console.log(this.account);
  }
}

var emp1 = new Employee();

emp1.Id = 1;
emp1.FirstName = "Kai";
emp1.LastName = "Sotto";
emp1.Age = 25;
emp1.Salary = 10000;

console.log("id:" + emp1.Id);
console.log("firstname:" + emp1.FirstName);
console.log("lastname:" + emp1.LastName);
console.log("age:" + emp1.Age);
console.log("salary:" + emp1.Salary);

class Utility {
  constructor() {
    this.value = 7.8;
  }

  showOnScreen() {
    console.log("Show on screen");
  }
}

class ChildUtil extends Utility {
  showOnScreen() {
    super.showOnScreen();
    console.log("Child Show on screen");
  }
}

var cu1 = new ChildUtil();

cu1.showOnScreen();

//No polymorphism coz no interface

//functional programming
function helloGreet(message, printFunc) {
  printFunc(message);
}

function printMessage(msg) {
  console.log(msg);
}

function operation(operType, operFunc) {}

helloGreet("I am a diva func!", printMessage);
helloGreet("I am super diva Func!", function (msg) {
  msg = String(msg).toUpperCase();
  console.log(msg);
});

helloGreet("I am super diva func!", (msg) => {
  console.log(String(msg).toLowerCase());
});

function mathOps(num1, num2, plusFunc, minusFunc, multiplyFunc, divFunc) {
  console.log("Addition:", plusFunc(num1, num2));
  console.log("Subtration:", minusFunc(num1, num2));
  console.log("Multiplication:", multiplyFunc(num1, num2));
  console.log("Division:", divFunc(num1, num2));
}

function addition(oper1, oper2) {
  return oper1 + oper2;
}

function subtraction(oper1, oper2) {
  return oper1 - oper2;
}

function multiplication(oper1, oper2) {
  return oper1 * oper2;
}

mathOps(
  1200,
  0,
  addition,
  subtraction,
  function (oper1, oper2) {
    return oper1 * oper2;
  },
  (oper1, oper2) => {
    let q = oper1 / oper2;
    if (Number.isFinite(q)) {
      return q;
    } else {
      return -1;
    }
  }
);

//Loop
//for
var grades =[90.5, 100.00, 55.6, 90.00, 89.00]
for (let index = 0; index < grades.length; index++) {
  const element = grades[index];
  console.log(index, element);
  
}

for (let g of grades){
  console.log(g);
}

//forof
text ="ayoko na po";
for (const element of text) {
  console.log(element);
}

//Generator
function* randomGenerateNum(){
  yield Math.random();
  yield Math.random();
  yield Math.random();
  yield Math.random();
    return Math.random();
}


for (const num of randomGenerateNum()) {
  console.log(num);
}


//forin

for (const key in sa1) {
 console.log(key, sa1[key]);
}

//Exception handling

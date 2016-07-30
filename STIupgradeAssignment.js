var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

function Person(empName, empNumber, empSalary, empRating) {
  this.empName   = empName;
  this.empNumber = empNumber;
  this.empSalary = empSalary;
  this.empRating = empRating;
}

var atticus = new Person ("Atticus", "2405", "47000", 3);
var jem = new Person ("Jem", "62347", "63500", 4);
var boo = new Person ("Boo", "11435", "54000", 3);
var scout = new Person ("Scout", "6243", "74750", 5);


var employees = [];

employees.push(atticus, jem, boo, scout);

console.log(employees);

//Phil Hofer
//showRegex.js
//CMP237 Exam 2 Practicum
//3/30/2015

//This program demonstrates both ways of declaring a simple regular expression.

var regexp1 = new RegExp("cat");
var regexp2 = /cat/;

//test regexp1
print(regexp1.test("catdog"));//prints true
print(regexp1.test("cogdat"));//prints false

//test regexp2
print(regexp2.test("catdog"));//prints true
print(regexp2.test("cogdat"));//prints true

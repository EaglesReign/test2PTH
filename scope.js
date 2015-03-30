//Phil Hofer
//scope.js
//3/30/2015
//CMP237 Exam 2 Practicum
//This code demonstrates the difference between local and global scope.
y = 10;

function scope() {
  var x = 7;
}

//Attempt to print x but can't, because it is a local variable.
//You will have to comment out the following print statement to check 
//that print(y) will print!

//local scope check
print(x);//comment this line out to check print(y)

//global scope check
//Print y. It is able to because it is global.
print(y);

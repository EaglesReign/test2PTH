//Phil Hofer
//date.js
//CMP237 Exam 2 Practicum
//3/30/2015

//This program creates two date objects and prints the older of the two.

//current time
var date1 = new Date().getTime();
print("date1: " + date1);

//Pearl Harbor attack
var date2 = new Date("12/7/1941").getTime();
print("date2: " + date2);

//if the current time is older than the Pearl Harbor attack
if (date1 < date2) {
  print("date1 is older");
} else {
  print("date2 is older");
}

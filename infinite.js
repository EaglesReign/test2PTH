//Phil Hofer
//infinite.js
//CMP237 Exam 2 practicum
//3/30/2015

//This program creates an infinite loop that will stop once a certain 
//condition occurs. In my case, that is once counter reaches 1000.

function count() {
  var counter = 0;
  //This is the infinite loop.
  while(true) {
    counter++;//increment counter
    print(counter);//Comment this print statement out if you do not want 
                   //the numbers to print.
    //This is the condition that will stop the loop from running.
    if (counter > 999) {
      break;
    }//end if
  }//end while
}//end count

count();

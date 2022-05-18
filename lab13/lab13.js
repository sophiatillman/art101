/*
*Author:Sophia
*Created: 17 May
*License:Public Domain
*/

function fizzBuzzBoom() {
  var output = document.getElementById("output");

  //for (var num=0; num<maxNums; num++)
    for (var num=0; num<200; num++) {
      str = "";

//Template: "if (num % factor == 0)"

//If the number is a multiple of 3, if should print "Fizz!"
      if (num % 3 == 0) {
        str += "Fizz";
      }
//If the number is a multiple of 5, it should print "Buzz!"
      if (num % 5 == 0) {
        str += "Buzz";
      }
//If the number is a multiple of 7, it should print "Boom!"
      if (num % 7 == 0) {
        str += "Boom";
      }

      if (str == "") {
        newEl = document.createElement("p");
        newEl.innerHTML = num;
        output.appendChild(newEl);
      }
      else {
      newEl = document.createElement("p");
      newEl.innerHTML = num + str;
      output.appendChild(newEl);
      }
    }
  }

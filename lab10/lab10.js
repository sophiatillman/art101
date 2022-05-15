/**
 * Summary. (use period)
 *
 * Description. (use period)
 *
 * @AuthorName   Sophia
 * @created 11.05.2009
 * @License  Public Domain
 */
 // sortUserName - a function that takes user input and sorts the letters
 // of their Name

//lab10
document.getElementById("myBtn").addEventListener("click", sortUserName);
function sortUserName() {
  document.getElementById("output").innerHTML = Date();
}

//lab7

function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.", "Sophia");
  console.log("userName =", userName);
  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

//Output
document.writeln("Oh hey, I've scrambbled your name!: ",
  sortUserName(), "</br>");

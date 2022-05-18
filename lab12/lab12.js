/**
 * Summary. (use period)
 *
 * Description. (use period)
 *
 * @AuthorName   Sophia
 * @created 11.05.2009
 * @License  Public Domain
 */
 //Return Gryffindor, Slytherin, Ravenclaw, Hufflepuff
//sort depending on length
function sortingHat (str){
  len = str.length;
  mod = len % 4;
  if (mod == 0){
    return "Gryffindor"
  }
  else if (mod == 1){
    return "Ravenclaw"
  }
  else if (mod == 2){
    return "Slytherin"
  }
  else if (mod == 3){
    return "Hufflepuff"
  }
}
var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>Congratulations you have been sorted into house " + house + "</p>";
  document.getElementById ("output").innerHTML = newText;
})

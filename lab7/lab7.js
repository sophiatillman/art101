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
 //

// sortUserName - a function that takes user input and sorts the letters
// of their name
function sortUserName() {
	var userName = window.prompt("Type your name in the box now!");
	console.log("userName =", userName);
	// split string to array
	var nameArray = userName.split('');
	console.log("nameArray =", nameArray);
	// sort the array
	var nameArraySort = nameArray.sort();
	console.log("nameArraySort =", nameArraySort);
	// join array back to string
	var nameSorted = nameArraySort.join('');
	console.log("nameSorted =", nameSorted);
	// Note that I could have done the above lines as a single line:
	//	userName.toLower().split("").sort().join("")
	return nameSorted;
}

// output
document.writeln("Here's your new name: ",
	sortUserName(), "</br");

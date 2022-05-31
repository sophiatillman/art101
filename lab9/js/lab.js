/**
 * Summary. (use period)
 *
 * Description. (use period)
 *
 * @AuthorName   Sophia
 * @created 11.05.2009
 * @License  Public Domain
 **/
 
 //using getElementById() to get the output id from the index file
 let outputEl = document.getElementById('output');

 //creating a new element assigning it to new1El and changing its HTML
 let new1El = document.createElement('p');
 new1El.innerHTML = 'say something new';

 //creating another new element and assigning it to new2El and changing its HTML
 let new2El = document.createElement('p');
 new2El.innerHTML = 'say something else';

 //appending new1El and new2El to outputEl
 outputEl.appendChild(new1El);
 outputEl.appendChild(new2El);

 //editing the css using JS
 document.getElementById('Challenge').style.color= 'pink';
 document.getElementbyId('Problems').style.color= 'pink';
 document.getElementById('Results').style.color= 'pink';

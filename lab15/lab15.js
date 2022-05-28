/*
*Author:Sophia
*Created: 17 May
*License:Public Domain
*/
/*
*Author:Sophia
*Created: 19 May
*License:Public Domain
*/


var endpoint = "https://fungenerators.com/random/facts/transportation/car";

function getCarFact(){
	$.ajax({
		// put in URL / variable for api
		url: endpoint,
		// looking for data
		data: {},
		//are we posting or getting data?
		type: "GET",
		//what type of data are we getting?
		dataType: "JSON",
		//what happens when the api call is successful?
		success: function(data){
			console.log(data);
		},
		//what happen when the api fails?
		error: function(jqXHR, textStatus, errorThrown) {
			alert("error");
		}
	})
		.done(function(data) {
			console.log(data);
			var catFact = data.text;
			console.log("car fact:", carFact);
			$('#output').append('<p>CAR FACT: ' + carFact + '</p>');
		})
}

$('#activate').click(getCarFact);



var endpoint2 = "https://drives.today/upload/000/u9/a/8/a837106b.jpg";

function getCarPhoto(){
	$.ajax({
		// put in URL / variable for api
		url: endpoint2,
		// looking for data
		data: {},
		//are we posting or getting data?
		type: "GET",
		//what type of data are we getting?
		dataType: "JSON",
		//what happens when the api call is successful?
		success: function(img){
			console.log(img);
		},
		//what happen when the api fails?
		error: function(jqXHR, textStatus, errorThrown) {
			alert("Error");
		}
	})
		.done(function(img) {
			console.log(img);
			var carPhoto = img.file;
			console.log("car photo link:", carPhoto);
			$('#output').append($('<img />').attr('src', carPhoto));
			//a different way to do the same thing as above line
				//$('#catphoto').attr('src', catPhoto);
		})
}

$('#photo').click(getCarPhoto);


//creating a "random" hex color generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//when color button is clicked, color changes
$('#color').click(function setRandomColor() {
	$("#output p").css("background-color", getRandomColor());
  	$("#output p").css("color", getRandomColor());
});

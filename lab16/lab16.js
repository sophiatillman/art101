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
{"month": "5", "num": 2626, "link": "", "year": "2022", "news": "", "safe_title": "d65536", "transcript": "", "alt": "They're robust against quantum attacks because it's hard to make a quantum system that large.", "img": "https://imgs.xkcd.com/comics/d65536.png", "title": "d65536", "day": "30"}
var number = Math.floor(Math.random()*2000)
var startUrl = "https://xkcd.com/"
var endUrl = "/info.0.json"


function getAndPutData(open, num, close) {

  $.ajax({
    url: startUrl + num + endUrl,

    type: "GET",

    dataType: "json",

    success: function(data) {
      var comicObj = data;
      console.log(comicObj);
      var titleEl = $("#comicName").html(comicObj.title);
      console.log(titleEl);
      console.log(comicObj.title);


      var imgEl = $("<img>").attr("src", comicObj.img);
      console.log(imgEl);
      var altEl = comicObj.alt;
      imgEl.attr("title", altEl);
      $("#output").html(imgEl);

        console.log(comicObj);
    },

    error: function(jqXHR, textStatus, errorThrown) {
      console.log("Error: ", textStatus, errorThrown);
    }
  })
}

getAndPutData(startUrl, number, endUrl);


$("#backButton").click(function() {
  number = number-1;
  getAndPutData(startUrl, number, endUrl);
})

$("#nextButton").click(function() {
  number = number+1;
  getAndPutData(startUrl, number, endUrl);
})

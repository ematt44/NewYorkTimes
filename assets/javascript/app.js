//Create a click event on the Search Button

$("#searchBtn").click (function () {
    //Get user input from each section.
    //Create an object userInput.
    //Inside the userInput store all the parameter data.
    var userInput = {
        search: $("#search").val(),
        records: $(".records").val(),
        start: $("#start").val(),
        end: $("#end").val(),
        
    }


});
var APIKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKey;

console.log(queryURL);

$.ajax({
    url: queryURL,
    method: 'GET'
}).done(function (response) {
    console.log(response);


    $(".panel-body").text("This is your doc: " + JSON.stringify(response.response.docs));
});
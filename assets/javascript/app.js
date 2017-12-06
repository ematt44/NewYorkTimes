
var APIKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKey;

console.log(queryURL);

$.ajax({
    url: queryURL,
    method: 'GET'
}).done(function (response) {
    console.log(response);


    $(".docs").text("This is your doc: " + JSON.stringify(response.response.docs));
});
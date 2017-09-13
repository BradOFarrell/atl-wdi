$(function(){ // Main, waits for dom to load
$("#addHome").removeClass();
$("#addHome").addClass("btn btn-success");
$("h1").removeClass();
$("h1").addClass("text-center"); 

var newLink = $("<br><br><a href='http://www.zillow.com'>Visit Zillow.com</a>")

newLink.attr( "target", "_blank");
newLink.appendTo($("body"));

//    alert("Everything is ready, let's do this");
});
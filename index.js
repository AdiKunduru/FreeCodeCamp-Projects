//click function for temp in f triggers getjson for location API save long and lat. call get JSON using current weather API use longitutde and latitude store temperature. function for kelvin to celsius and farenheit transfer. HTML functionKtoC or functionKtoF Display F or C based on which button was clicked. If statements to change the background

//store Location outside? function for getting location
$(document).ready(function() {
  $.getJSON("https://freegeoip.net/json/?callback=?", function(loc) {
    var lat = loc.latitude;
    var long = loc.longitude;
    var comma = ",";
    var url =
      "https://api.apixu.com/v1/current.json?key=7a5828bcc00d468597b180438170806&q=" +
      lat +
      comma +
      long;
    $.getJSON(url, function(data) {
      // console.log(data.current.condition);
     
      $(".temp").html(data.current.temp_f);
      $(".title").html(data.location.name + "," + data.location.region);
      $(".box").attr("src", data.current.condition.icon);
    });
    // if statements about weather over there.
    //$('.image').attr('src', data.condition_icon);
  
  $("#farenheit").on("click", function() {
    $.getJSON(url, function(data) {
      $(".temp").html(data.current.temp_f);
      $(".title").html(data.location.name + "," + data.location.region);
      $(".image").attr("src","//cdn.apixu.com/weather/64x64/day/116.png");
      
      //change image source to current.condition:icon
    });
  });
    
    console.log(7);
  $("#celsius").on("click", function() {
 //   console.log(5);
    $.getJSON(url, function(data) {
      $(".temp").html(data.current.temp_c);
      $(".title").html(data.location.name + "," + data.location.region);
      //
      //change image source to current.condition:icon
    });
    });
  });
});

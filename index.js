$(document).ready(function() {
  var numArray= [];
  var displayString = "";
  var arr = [];
//  var regex = /[^0-9.]/;

  //Push buttons add to a number until clear or operator is hit
    $("#0").on("click", function() {
    numArray.push(0);
    displayString += 0;
    $("#input").html(displayString);
    })
  $("#1").on("click", function() {
    numArray.push(1);
    displayString += 1;
    $("#input").html(displayString);
    })
  $("#2").on("click", function() {
    numArray.push(2);
    displayString += 2;
    $("#input").html(displayString);
    })
  $("#3").on("click", function() {
    numArray.push(3);
    displayString += 3;
    $("#input").html(displayString);
    })
  $("#4").on("click", function() {
    numArray.push(4);
    displayString += 4;
    $("#input").html(displayString);
    })
  $("#5").on("click", function() {
    numArray.push(5);
    displayString += 5;
    $("#input").html(displayString);
    })
  $("#6").on("click", function() {
    numArray.push(6);
    displayString += 6;
    $("#input").html(displayString);
    })
  $("#7").on("click", function() {
    numArray.push(7);
    displayString += 7;
    $("#input").html(displayString);
    })
  $("#8").on("click", function() {
    numArray.push(8);
    displayString += 8;
    $("#input").html(displayString);
    })
  $("#9").on("click", function() {
    numArray.push(9);
    displayString += 9;
    $("#input").html(displayString);
    })
  $("#plus").on("click", function() {
    numArray.push("add");
    displayString += " + ";
    $("#input").html(displayString);
    })
  $("#minus").on("click", function() {
    numArray.push("minus");
    displayString += " - ";
    $("#input").html(displayString);
    })
  $("#mult").on("click", function() {
    numArray.push("multiply");
    displayString += " * ";
    $("#input").html(displayString);
    })
  $("#dvsn").on("click", function() {
    numArray.push("divide");
    displayString += " / ";
    $("#input").html(displayString);
    })
   $("#clear").on("click", function() {
    numArray = [];
    displayString = "";
    $("#input").html("Output");
    })
  $("#equal").on("click", function() {
  //arr = displayString.split(regex);
    arr = displayString.split(" ");
    console.log(displayString);
    console.log(arr);
    var output = 0;
 for(var i = 0 ; i < arr.length ; i++)
 {
 if (arr[i] === "/")
 {
  output =arr[i-1] / arr[i+1];
  arr[i+1] = output;
 }
 else if (arr[i] === "*") //Only does the last ones
   {
     output = arr[i-1] * arr[i+1];
     arr[i+1] = output;
     
   }
 else if (arr[i] === "+") //idk wtf wrong BRUHHH
   {
    output = parseInt(arr[i-1]) + parseInt(arr[i+1]);
    arr[i+1] = output; 
   }
 else if (arr[i] === "-")
   {
   output =arr[i-1] - arr[i+1];
   arr[i+1] = output;
   }
     }
     
  $("#input").html(output);
    displayString = "";
    console.log(output);

          })
  
  
  })
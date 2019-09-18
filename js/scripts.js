
var kilogramEquation = function(num) {
  return num / 2.205;
};

var stoneEquation = function(num) {
  return num / 14;
};

var ounceEquation = function(num) {
  return num * 16;
};

$(document).ready(function() {
  $("form#kilos").submit(function(event) {
    event.preventDefault();
    var num = parseInt($("#kilo").val());
    var result = kilogramEquation(num);
    $("#ansKilo").text(result);
  });

  $("form#stones").submit(function(event) {
    event.preventDefault();
    var num = parseInt($("#stone").val());
    var result = stoneEquation(num);
    $("#ansStone").text(result);
  });

  $("form#ounces").submit(function(event) {
    event.preventDefault();
    var num = parseInt($("#ounce").val());
    var result = ounceEquation(num);
    $("#ansOunce").text(result);
  });
});

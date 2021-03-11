function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;

    var yearInTheFuture = years + 2021;
}

var rangeSlider = function(){
  var range = getElementById("rate"),
      value = getElementById("current_range");
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
    })

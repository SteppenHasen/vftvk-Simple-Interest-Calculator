function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;

    var yearInTheFuture = years + 2021;
}

function getValue(){
var slider = document.getElementById('rate');
document.getElementById('current_range').innerHTML = slider.value + '%';
}
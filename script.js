function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    current_year = 2021

    var yearInTheFuture = years + current_year;

    var outputtext = 
    `If you deposit ${principal},\n 
    at an interest rate of ${rate}%.\n
    You will receive an amount of ${interest},\n
    in the year ${yearInTheFuture}`

    document.getElementById('result').innerHTML = outputtext
}

function getValue(){
var slider = document.getElementById('rate');
document.getElementById('current_range').innerHTML = slider.value + '%';
}
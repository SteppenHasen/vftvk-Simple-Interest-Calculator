function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var yearInTheFuture = Number(years) + Number(2021);

    document.getElementById('prin').innerHTML = principal
    document.getElementById('rt').innerHTML = rate
    document.getElementById('int').innerHTML = interest
    document.getElementById('YITF').innerHTML = yearInTheFuture

    document.getElementById('result').style.display = "block";
}

function getValue(){
var slider = document.getElementById('rate');
document.getElementById('current_range').innerHTML = slider.value + '%';
}
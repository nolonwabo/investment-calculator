var calculateClick = function () {
var investment = Number(document.getElementById("investment").value);
var annualRate = Number(document.getElementById("rate").value);
var years = Number(document.getElementById("years").value);
var type = document.getElementById("type").value;
if (isNaN(investment) || investment <= 0) {
alert("Investment must be a valid number greater than zero.");
}
else if(isNaN(annualRate) || annualRate <= 0) {
alert("Annual rate must be a valid number greater than zero.");
}
else if(isNaN(years) || years <= 0) {
alert("Years must be a valid number\nand greater than zero.");
}
else if(type.checked == false){
  alert("Please select type of investment.");
}
else {
futureValue = investment;
for ( i = 1; i <= years; i++ ) {
futureValue += futureValue * annualRate / 100;
}
$("future_value").value = futureValue.toFixed();
}
};
window.onload = function () {
$("calculate").onclick = calculateClick;
$("investment").focus();
};
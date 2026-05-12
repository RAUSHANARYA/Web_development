
var btn = document.querySelector('button');
var person = document.querySelector('#person');
var bill = document.querySelector('#Amount');
var tip = document.querySelector('#TipPercent');
var each = document.querySelector("#amount")
btn.addEventListener('click' ,calculateTip);

function calculateTip()
{
    var total = (bill.value*tip.value)/100;
    var tips = total/person.value;

    each.textContent =  tips.toFixed(2) + " ₹";


}
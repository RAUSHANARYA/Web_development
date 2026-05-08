
document.querySelector("#redbox").addEventListener('mouseover' , fillRedColor);


document.querySelector("#redbox").addEventListener('mouseout' , fillbaseColor);




function fillRedColor()
{
    document.querySelector('#bulb1').style.background ='Red';
}
function fillbaseColor()
{
    document.querySelector('#bulb1').style.background ='white';
}


// green 
document.querySelector("#greenbox").addEventListener('mouseover' , fillGreenColor);
document.querySelector("#greenbox").addEventListener('mouseout' , fillbaseColor);

function fillGreenColor()
{
    document.querySelector('#bulb1').style.background ='Green';
}
function fillbaseColor()
{
    document.querySelector('#bulb1').style.background ='white';
}


// yellow

document.querySelector("#yellowbox").addEventListener('mouseover' , fillYellowColor);
document.querySelector("#yellowbox").addEventListener('mouseout' , fillbaseColor);


function fillYellowColor()
{
    document.querySelector('#bulb1').style.background ='Yellow';
}
function fillbaseColor()
{
    document.querySelector('#bulb1').style.background ='white';
}
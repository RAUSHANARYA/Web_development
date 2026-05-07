function bulb1ON()
{
    document.querySelector('.bulb1').style.background = 'yellow';
}

function bulb1OFF()
{
    document.querySelector('.bulb1').style.background = 'white';
}

function bulb1Red ()
{
     document.querySelector('.bulb1').style.background = 'Red';
}
function bulb1Green ()
{
     document.querySelector('.bulb1').style.background = 'Green';
    //   document.querySelector('.bulb1').style.opacity = '40%';
}
function pink ()
{
     document.querySelector('.bulb1').style.background = 'pink';
}


document.querySelector('#bulbG').style.background='Green';

document.querySelector('#pink').addEventListener('click',pink);


// costum color chnage 
//.addEventListener('click',pink);  propeties , function 
document.querySelector("#bulbColor").addEventListener('change',changeBulbColor);

function changeBulbColor()
{
   const color  = document.querySelector("#bulbColor").value ;
    document.querySelector('#ABC').style.background = color;
}
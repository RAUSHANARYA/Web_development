var btn = document.querySelector('button');

btn.addEventListener('click', Checknumber);

var number = Number(document.querySelector('#no').textContent); // string ko number m kro 

var input = document.querySelector('input');


function Checknumber()
{
    var guess = Number(input.value); // string ko number m 

    
    if(guess === number)
    {
        alert('Congratulations correct guess');
    }

    else if(guess > number)
    {
        alert('Take smaller value');
    }

    else if(guess < number)
    {
        alert('Take larger value');
    }

    else
    {
        alert('Wrong');
    }
}
 // display
    let display = document.getElementById("display");

    // store expression
    let expression = "";

    // calculator function
    function Calculate(value)
    {

      // clear all
      if(value === "AC")
      {
        expression = "";
        display.innerText = "0";
      }

      // remove last value
      else if(value === "C")
      {
        expression = expression.slice(0,-1);

        if(expression === "")
        {
          display.innerText = "0";
        }
        else
        {
          display.innerText = expression;
        }
      }

    //   if(expression.innerText==='0')
    //   {
    //     expression.innerText=value
    //   }
    //   else if{
    //       expression.innerText= expression.innerText+value;
    //   }


      // calculate answer
      else if(value === "=")
      {
        try
        {
          expression = eval(expression).toString();
          display.innerText = expression;
        }
        catch(error)
        {
          display.innerText = "Error";
          expression = "";
        }
      }

      // add values
      else
      {
        expression += value;
        display.innerText = expression;
      }

    }

 /* this functin activates once the button compute interest clicked*/
 function compute()
    {

    /* initializing the input values entered by a user*/
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;

    /* converting the number of years being chosen by a user to the actual year*/
    let year=new Date().getFullYear()+parseInt(years);

    /* the formula that calculates the interst amount*/
    let interest=principal*years*(rate/100);
    
    /* validates the input values entered by a user to output the result*/
    if( principal<=0){
        alert("Please enter a posiive number");
        document.querySelector("input").focus();
    }
    else{
        return output();
    }

    /* this function shows the computed result*/
    function output()
    {
        let showPrincipal="\<br\>If you deposit "+`<mark>${principal}</mark>`;
        let showRate=",\<br\>at an interest rate of "+`<mark>${rate}</mark>`;
        let showInterest="%.\<br\>You will receive an amount of "+`<mark>${interest.toFixed(2)}</mark>`;
        let showYear=",\<br\>in the year "+`<mark>${year}</mark>`+"\<br\>";

        let output=document.getElementById("result").innerHTML=showPrincipal+showRate+showInterest+showYear;
        }
    }

function updateRate() 
    {
    let ratevalue = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=ratevalue+"\%";
    }
  
    
 


 
    function compute()
    {
        let principal = document.getElementById("principal").value;
        let rate = document.getElementById("rate").value;
        let years = document.getElementById("years").value;
        let year=new Date().getFullYear()+parseInt(years);
        let interest=principal*years*(rate/100);
        
        if( principal<=0){
            alert("Please enter a posiive number in the amount area to compute the interest");
            document.querySelector("input").focus();
            
        }
        else{
            return output();
        }

        function output(){

            let showPrincipal="\<br\>If you deposit "+`<mark>${principal}</mark>`;
            let showRate=",\<br\>at an interest rate of "+`<mark>${rate}</mark>`;
            let showInterest="%.\<br\>You will receive an amount of "+`<mark>${interest.toFixed(0)}</mark>`;
            let showYear=",\<br\>in the year "+`<mark>${year}</mark>`+"\<br\>";

            let output=document.getElementById("result").innerHTML=showPrincipal+showRate+showInterest+showYear;
        }
    }

    function updateRate() 
    {
        let ratevalue = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=ratevalue+"\%";
    }
  
    
 

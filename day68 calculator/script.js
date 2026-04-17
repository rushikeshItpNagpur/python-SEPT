let prev=document.getElementById("prev")
let curr=document.getElementById("curr");
let operaton=document.getElementById("operation")


function handleClick(val){
   
    console.log(val)
    console.log(typeof(val))

    if(typeof(val)=="number")
    {
        curr.append(val)
    }
    else if(val=="+"){
     let currVal= curr.innerText
     prev.innerText=currVal
     curr.innerText=""
     operaton.innerText="+"

    }
     else if(val=="-"){

    }
     else if(val=="*"){

    }
     else if(val=="/"){

    }
     else if(val=="="){
           
        let op=operaton.innerText

        if(op=="+")
        {
            let pre= Number( prev.innerText)
            let cu= + curr.innerText
              
             prev.innerText=""
             curr.innerText=pre+cu
             operaton.innerText=""
            console.log(pre+cu)
           
        }


    }






}
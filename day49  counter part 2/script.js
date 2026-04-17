let c=0
let count=document.getElementById("count")
    count.innerText=c
let incBtn=document.getElementById("incBtn")
let decBtn=document.getElementById("decBtn")
let limit=10
console.log(count)

function inc(){
    c++
    count.innerText=c 
    if(c>=limit)
    {
       incBtn.disabled=true
    }
    if(c>-limit)
    {
        decBtn.disabled=false
    }


}

function dec(){
   c--
   count.innerText=c
    if(c<= -limit)
        {
            decBtn.disabled=true
        } 

   if(c<limit)
   {
    incBtn.disabled=false
   }

}



function changeLimit(val){
  limit=val
}


let data=document.getElementById("data")
data.style.color="red"
data.style.backgroundColor="pink"
console.log(data)
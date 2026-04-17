let c=0
let count=document.getElementById("count")
    count.innerText=c
let incBtn=document.getElementById("incBtn")
let decBtn=document.getElementById("decBtn")
let limit=10
let colors=["red","blue","pink","green","orange",'yellow',"cyan"]
 let i=0
 count.style.color=colors[i]

console.log(count)

function inc(){
    c++
    i++
    if(i>=colors.length){
        i=0
    } 
    
    count.style.color=colors[i]
    count.style.fontSize=`${40+c*2}px`
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
     count.style.fontSize=`${40+(c*2)}px`
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

    if(limit<20)
    {
         incBtn.disabled=false
         decBtn.disabled=false
    }
     else if(limit<30)
    {
         incBtn.disabled=false
         decBtn.disabled=false
    }
  
  limit=val
}


let data=document.getElementById("data")
data.style.color="red"
data.style.backgroundColor="pink"
console.log(data)
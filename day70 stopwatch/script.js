let mmm=document.getElementById("min")
let hhh=document.getElementById("hour")
let sss=document.getElementById("sec")

let sec=0
let min=0
let hr=0

hhh.innerText=hr
mmm.innerText=min
sss.innerText=sec


function start(){

 setInterval(function(){

  sec++

  if(sec>=59)
  {
    sec=0
    min++

     if(min>=59)
     {
        min=0
        hr++
        hhh.innerText=hr
     }

    mmm.innerText=min
  }

  sss.innerText=sec


 },1)



}


let hr=document.getElementById("hr");
    hr.innerText="00"
let min=document.getElementById("min");
    min.innerText="00"
let sec=document.getElementById("sec");
     sec.innerText="00"


let startBtn=document.getElementById("startbtn")
let stopBtn=document.getElementById("stopbtn")
let list=document.getElementById("list")

let s=55
let m=40
let h=0

let alpha;
function start(){
     
alpha=setInterval(function(){
    
    s++
   sec.innerText=dig(s)
   if(s>=60)
     {
        s=0
        sec.innerText=dig(s)
        m++
        min.innerText=dig(m)
        if(m>=60){
           m=0
           min.innerText=m
           h++
           hr.innerText=dig(h)


        }
        
    }



},10)
startBtn.disabled=true;

}


function stop(){
    startBtn.disabled=false
    clearInterval(alpha)
}

function noteTime(){

    let li=document.createElement("li")
        li.innerText=`${dig(h)} :${dig(m)} :${dig(s)} `
   list.append(li)


}


function  dig(num){

 if(num<=9)
 {
    return`0${num}`
 }
return num

}


let audio=document.getElementById("audio")
let click=document.getElementById("click")
let hr=document.getElementById("hr");
    hr.innerText="00"
let min=document.getElementById("min");
    min.innerText="00"
let sec=document.getElementById("sec");
     sec.innerText="00"


let startBtn=document.getElementById("startbtn")
let stopBtn=document.getElementById("stopbtn")
let list=document.getElementById("list")

let s=0
let m=0
let h=0

let alpha;
function start(){
     clickSound()
alpha=setInterval(function(){
    
    s++
   sec.innerText=dig(s)
   if(s>=60)
     {
        s=0
        sec.innerText=dig(s)
        m++
        min.innerText=dig(m)

        if(m==10)
        {
            audio.innerHTML=`<audio autoplay loop>
  <source src="./sound.mp3" type="audio/mpeg" />
  <source src="myAudio.ogg" type="audio/ogg" />

</audio>`
        }
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
    audio.innerHTML=""
     clickSound()
}

function noteTime(){

    let li=document.createElement("li")
        li.innerText=`${dig(h)} :${dig(m)} :${dig(s)} `
   list.append(li)
  clickSound()

}


function  dig(num){

 if(num<=9)
 {
    return`0${num}`
 }
return num

}

function changemin(val){
  
    m=m+val
    min.innerText=m
}

function changehr(val){
    h=h+1
    hr.innerText=h
}



function clickSound(){

  click.innerHTML=`<audio autoplay>
  <source src="./click.mp3" type="audio/mpeg" />
  <source src="myAudio.ogg" type="audio/ogg" />

</audio>`


}

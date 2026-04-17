// setTimeout() -> it calls the callback only once when the delay is finished

let container=document.getElementById("container")
let count=document.getElementById("count")
let image=document.createElement("img")
image.src="https://i.pinimg.com/originals/9e/13/8d/9e138d71b5f8f83bc9d191babaff0397.gif"

 let Dimage=document.createElement("img")
Dimage.src="https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUydG5wNG55bDFuYXRibTV1MDk2NnVma3M1bmU4eTZxaXhtbHc1cTVuayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RVFkBglC4vkXbVxgJs/giphy.gif"



function blast(){
    container.append(image)
}
 
let abc=setTimeout(blast,5000)

function dispose(){
 clearTimeout(abc)
container.append(Dimage)

}

// setInterval -> it will contui call the calllback  after ever delay

let i=0


let pqr;

 function start(){
   pqr=setInterval(function(){
    console.log(++i)
    count.innerText=i
     },1000)
 }

function stop(){
   clearInterval(pqr)
}






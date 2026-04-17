let images=[
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/yesbank/makeup_PC._CB796616147_.png",
    "https://images-eu.ssl-images-amazon.com/images/G/31/Img26/Sports/April/KSS/GW/Legacy_PC/New/GW_april_3000._CB782314143_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/yesbank/makeup_PC._CB796616147_.png",
   "https://images-eu.ssl-images-amazon.com/images/G/31/2025/GW/UNREC/PC/78270._CB785061629_.jpg",
   "https://st-images.honasa.in/1920_X512_1441dd7b31.jpg?format=auto&width=&qualilty="

]


let prevBtn=document.getElementById("prev")
    prevBtn.addEventListener("click",prev)
let nextBtn=document.getElementById("next")
    nextBtn.addEventListener("click",next)
let content=document.getElementById("content")
let img=document.createElement("img")
// img.setAttribute("class","cimg")
img.src=images[0]

    content.append(img)

let index=1;

function prev(){

}

function next(){
    content.innerHTML=""
    let img=document.createElement("img")
        if(index>=images.length)
        {
            index=0
        }
        img.src=images[index++]
    content.append(img)    
}


setInterval(function(){
    next()
},2000)
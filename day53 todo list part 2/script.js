let inpTag=document.getElementById("task")
let list=document.getElementById("list")

function addTodo(){
  let data=inpTag.value
   let li=document.createElement("li")
      li.innerText=data
list.append(li)
    inpTag.value=""
    
 }
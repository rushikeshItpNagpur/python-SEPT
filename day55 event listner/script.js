let addTodoBtn=document.getElementById("addTodo")
addTodoBtn.addEventListener("click",getData)

let input=document.getElementById("inpBox")
let select=document.getElementById("prio")
let todoTable=document.getElementById('todoTable')
let s=1

function getData(){

  let inpVal=input.value
  let p=select.value

  let tr=document.createElement("tr")

  let srno=document.createElement("td")
      srno.innerText=s++
  let task=document.createElement("td")
       task.innerText=inpVal
  let prio=document.createElement("td")
      prio.innerText=p
  let status=document.createElement("td")
      status.innerText="not available"

    tr.append(srno,task,prio,status)
   todoTable.append(tr)

   input.value=""
   select.value="none"
}
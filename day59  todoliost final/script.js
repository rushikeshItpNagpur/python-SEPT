let addTask=document.getElementById("addTodo")
    addTask.addEventListener("click",getTodo)

let inpBox=document.getElementById("inpbox")
let priority=document.getElementById("prio")
let tbody=document.getElementById("tbody")

let taskArr=[]
function getTodo(){
        
    let inpVal=inpBox.value
    let selectVal=priority.value


    let obj={
        id: Date.now(),
        task:inpVal,
        priority:selectVal,
        status:false
    }
     
    taskArr.push(obj)
    tbody.innerHTML=""
    appendData(taskArr)

   console.log(taskArr)
    
   inpBox.value=""
    priority.value="none"
    }




function appendData(arr){

    arr.forEach(function(el,i,arr){
     
        let tr=document.createElement("tr")


        let srno=document.createElement("td")
            srno.innerText=i+1
         let task=document.createElement("td")
             task.innerText=el.task
         let priority=document.createElement("td")
             priority.innerText=el.priority
       
       
             let status=document.createElement("td") 

            tr.append(srno,task,priority)
            tbody.append(tr)
    })
  

 }   



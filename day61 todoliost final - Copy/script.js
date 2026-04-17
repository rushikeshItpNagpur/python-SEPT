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
   
    appendData(taskArr)

   console.log(taskArr)
    
   inpBox.value=""
    priority.value="none"
    }




function appendData(arr){
        tbody.innerHTML=""
    arr.forEach(function(el,i,arr){
     
        let tr=document.createElement("tr")


        let srno=document.createElement("td")
            srno.innerText=i+1
         let task=document.createElement("td")
             task.innerText=el.task
             task.style.textDecoration=el.status ? "line-through" : "none"
             task.style.background=el.status ? "green" : "red"
         let priority=document.createElement("td")
             priority.innerText=el.priority
         let status=document.createElement("td") 
              status.innerText= el.status ? "task compleated" :"Task incomplete"
         let changeStatus=document.createElement("td")
              let statusBtn=document.createElement("button")
                statusBtn.innerText="toggle Status"
                statusBtn.value=el.id
                statusBtn.addEventListener("click",toggleStatus)
                changeStatus.append(statusBtn)
         

            tr.append(srno,task,priority,status,changeStatus)
            tbody.append(tr)
    })
  

 }   
function toggleStatus(event){
      console.log(event)

  let btnVal=event.target.value

  taskArr=taskArr.map(function(el,i,arr){
     
          if(el.id==btnVal)
          {
             let obj={
                  id: el.id,
                   task:el.task,
                   priority:el.priority,
                   status:el.status ? false :true
             }  
             return obj

          }else{
            return el
          }


    })

    appendData(taskArr)

      
}




let obj={
    abc:"pqrst",
    xyz:"zbcd",
    xyz:"45625"
}

console.log(obj)



let num1=500
let num2=500

 let abc=  num1 > num2 ? "num1 is greater than num2" : (num1==num2 ? "num1 and num2 are eaquals": "num2 is greater than num1")

  console.log(abc)
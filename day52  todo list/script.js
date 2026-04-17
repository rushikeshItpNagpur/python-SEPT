
let container=document.getElementById("container")

let abc=document.createElement("ul")
console.log(abc)


let item1=document.createElement("li")
item1.innerText="abcdefghik"

let item2=document.createElement("li")
item2.innerText="qweqweqweqweqw"

let item3=document.createElement("li")
item3.innerText="iusadbasd"

let item4=document.createElement("li")
item4.innerText="asdfadsfneuiwro"

// console.log(item1,item2,item3,item4)

abc.append(item1,item2,item3,item4)
container.append(abc)
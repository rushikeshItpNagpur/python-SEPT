let arr=[1,2,3,4,5,6]
let Sqarr=[]

arr.forEach(function(el,i,arr){
   
    console.log(el**2)
    Sqarr.push(el**2)


})
console.log(Sqarr);



// map


// arr.forEach(sqThem)


// function sqThem(el,i,arr){

//     console.log(el,i,arr)

// }



let fruits=["apple","mango","banana","kiwi","dragonFruit"]
// the fruit is apple 

fruits.forEach(function(el,i,arr){
    console.log("the fruit is "+el)
      
})

// forEach dosent returns anything 


let num=[88,99,44,55,66,33]

let abc=num.map(function(el,i,arr){
    
    return el*2

})

console.log(abc)



let alpha=[1,2,3,4,5,6,7,8,9]
let ans=alpha.map(function(el){
   
    return el+10
})

console.log(ans)




//forEach -> iterate an arr but will  not return anything
//map-> i will also iterate an arr but will return an arr




// filter ->
let age=[12,3,4,16,84,55,42,11,6,25,8,4,65,1,98,49]

let pqr=age.filter(function(el,i,arr){
   
    return el<=15

})

console.log(age)
console.log(pqr);

// reduce

let price=[55,4,47,8,9,6,55,4,6,621,33]

let total=price.reduce(function(acc,el,i,arr){
return acc+el

},100)


console.log(total)



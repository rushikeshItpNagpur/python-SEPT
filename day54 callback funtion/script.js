// function ?
// 1->  block of code
// 2->  it promotes re-usablity of code


// 1-> normal function

// function abc(){
// // code 
// }

// abc()

// 2-> ano 

let abc=function(){
 console.log("this sis abc");
 
}

abc()

// 3-> arrow


let xyz=()=>{
    console.log(" thi sis xyz")
}


xyz()

let pqr= ()=> "this is bhai"


console.log(pqr())



//  callback function -> when a function is passed as an argument to  another function the it is known as call back function 

function printKaro(xyz){
      
    console.log(xyz(10,5))
}

printKaro(addKro)

function addKro(x,y){

    return  x+y
}

printKaro(function(x,y){
    return x*y
})

printKaro((x,y)=>{
    return  x/y
})

printKaro(()=>"this is call back")
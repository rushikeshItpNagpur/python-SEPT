console.log("one")
console.log("two")
pqr()
console.log("three")
setTimeout(function(){
    console.log("timer is done")
},2000)
console.log("four")
abcd()
console.log("five")

function abcd(){
    console.log("abcd is been called")
}
console.log("six")

 setTimeout(function(){
     console.log("second timer")
 }, 3000);

function pqr(){
    console.log("fucntion pqr is been called");
    
}
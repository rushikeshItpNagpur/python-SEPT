// ascyn await 


async function getData(){


    let data= await fetch("https://fakestoreapi.com/products")
    let actualData= await data.json()
    
    console.log(actualData)
    appendData(actualData)
    
}

getData()


 function appendData(arr){

 }
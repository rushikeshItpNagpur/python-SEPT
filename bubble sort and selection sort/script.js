// built in sort

// cb
// let arr=[4,48,84,51,56,19,89,84,851,54,84,98,71]
// console.log(arr)

// arr.sort()

// arr.sort(function(a,b){
//   return a-b
// })
// arr.sort(function(a,b){
//   return b-a
// })
// console.log(arr)




// bubble sort
// asc
//desc


// let arr=[7,9,8,4,5,1]

// for(let i=0;i<=arr.length-1;i++)
// {
//    let p1=0
//    let p2=p1+1

//    while(p2<=arr.length-1)
//    {
       
//      if(arr[p1]>arr[p2])
//    {
//     let temp=arr[p1]
//     arr[p1]=arr[p2]
//     arr[p2]=temp
//    } 
//    p1++
//    p2++

//    }

// }

// console.log(arr)



//selection sort

let arr=[7,8,5,1,4,5,6,2]

for(let i=0;i<=arr.length-1;i++)
{

     let small=arr[i]
     let loc=i
     
     let p1=i+1
     while(p1<=arr.length-1)
     {
        if(arr[p1]<small)
        {
            small=arr[p1]
            loc=p1  
        }
        p1++
    }

    let temp=arr[i]
     arr[i]=arr[loc]
     arr[loc]=temp 
}
console.log(arr)











let prodForm=document.getElementById("prodForm")
    prodForm.addEventListener("submit",function(){
             
        getFormData()
        prodForm.reset()

    })


let productArr=[]

function getFormData(){
      
    event.preventDefault()

     let title=prodForm.ptitle.value
     let price=prodForm.pprice.value
     let image=prodForm.pimage.value
     let description=prodForm.pdescription.value
     let category=prodForm.pcategory.value



       let data={
                 title,
                 price,
                 image,
                 description,
                 category}  

    
                 productArr.push(data)
                 console.log(productArr)
     }

      

    function mapdata(arr){
     
     arr.forEach(function(el,i,arr){

        

     })



    }



    let name="rahul"
    let age=56
    let height=6
    let mobile=486455687

    // let obj={
    //     name:name,
    //     age:age,
    //     height:height,
    //     mobile:mobile
    // }

   let obj={
    name,
    age,
    height,
    mobile
   }


    console.log(obj)
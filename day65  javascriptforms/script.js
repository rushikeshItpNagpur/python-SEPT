let prodForm=document.getElementById("prodForm")
    prodForm.addEventListener("submit",function(){
             
        getFormData()

    })


let productArr=[]

function getFormData(){
      
    event.preventDefault()


    let title=document.getElementById("title").value
    let price=document.getElementById("price").value
    let image=document.getElementById("image").value
    let description=document.getElementById("description").value
    let category=document.getElementById("category").value


     let obj={
        productTitle:title,
        productPrice:price,
        productImage:image,
        productDescription:description,
        productCategory:category
     }

    productArr.push(obj)
    mapdata(productArr)
   

    
    document.getElementById("title").value=""
    document.getElementById("price").value=""
    document.getElementById("image").value=""
    document.getElementById("description").value=""
    document.getElementById("category").value=""

    }



    function mapdata(arr){
     
     arr.forEach(function(el,i,arr){

        

     })



    }

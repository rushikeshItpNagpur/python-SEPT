let container=document.getElementById("container")
let prodForm=document.getElementById("prodForm")
    prodForm.addEventListener("submit",function(){
             
        getFormData()
        prodForm.reset()

    })


let productArr=JSON.parse(localStorage.getItem("productData")) || []

mapdata(productArr)
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
                  
                 localStorage.setItem("productData",JSON.stringify(productArr))
                 console.log(productArr)
                 mapdata(productArr)
     }

      

    function mapdata(arr){
         container.innerHTML=""
     arr.forEach(function(el,i,arr){

           let card=document.createElement("div")
               card.setAttribute("class","card")

           let img=document.createElement("img")
                img.src=el.image
           let title=document.createElement("h4")
               title.innerText=el.title
           let price=document.createElement("h2")
               price.innerText=el.price
                
               card.append(img,title,price)
               container.append(card)
     })



    }



    localStorage.setItem("data","we are at amamzon")
      localStorage.setItem("price",464654)


let obj={
    name:"abcde",
    title:"ajosbdoasd",
    price:564456,
    category:"asdasd"
}

localStorage.setItem("prodData", JSON.stringify( obj))

let data= JSON.parse(  localStorage.getItem("prodData"))
console.log(data)
console.log(typeof(data))
   
let container=document.getElementById("container")


let prod1={
    title:"HEALTH TAG Shinchan Moving Toy",
    price:"660",
    image:"https://rukminim2.flixcart.com/image/612/612/xif0q/action-figure/9/k/c/12-shinchan-moving-toy-shinchan-action-figure-toys-for-boys-original-imahgptwceqvgqgu.jpeg?q=70",
    rating:"4"
}


let prod2={
    title:"shinchan in cycle",
    price:"5000",
    image:"https://rukminim2.flixcart.com/image/612/612/xif0q/action-figure/k/m/w/6-shinchan-14-cm-action-figure-cartoon-toy-kids-gift-collectible-original-imahhqx7waykn7ux.jpeg?q=70",
    rating:"5"
}

let prod3={
    title:"doremon",
    price:"845",
    image:"https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/m/j/h/doraemon-soft-toy-20-r-b-toys-original-imahh7typt5qbpvc.jpeg?q=70",
    rating:"6"
}


let prod4={
    title:"bag",
    price:"560",
    image:"https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-backpack/x/f/h/kids-super-hero-s-printed-school-backpack-bags-for-boys-girls-kg-original-imah5v62kmseu6tk.jpeg?q=70",
    rating:"9"
}


let prod5={
    title:"robot",
    price:"6000",
    image:"https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/a/u/z/dancing-robot-combo-pack-3-magic-moments-original-imahgfjbqypkcgys.jpeg?q=70",
    rating:"9"
}
let prod6={
    title:"moon",
    price:"6000",
    image:"https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/a/u/z/dancing-robot-combo-pack-3-magic-moments-original-imahgfjbqypkcgys.jpeg?q=70",
    rating:"9"
}

let products=[prod1,prod2,prod3,prod4,prod5,prod6]


products.forEach(appendData)



function appendData(el,i,arr){
let card=document.createElement("div")
card.setAttribute("class","card")
let image=document.createElement("img")
image.src=el.image
image.alt="toy img was here"
// image.style.width="250px"

let title=document.createElement("h3")
    title.innerText=el.title
    title.setAttribute("class","title")

let price=document.createElement("h1")
    price.innerText=`price of the product ${el.price}`

let rating=document.createElement("h6")
    rating.innerText=`rating is ${el.rating}`

card.append(image,title,price,rating)
container.append(card)
}






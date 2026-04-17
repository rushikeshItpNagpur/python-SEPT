// dom -> document object model (html+css+js) we can manage html ans css with the help of js 

// document  -> refers to current html web page

// console.log(document)

// when ever i want to change html document

// 1-> get elemet by id  -> it will bring me the first elemnt with the id found

// let alpha=document.getElementById("abc")
// console.log(alpha)

// // 2-> get element by className -> it will bring all the elements present in the html file wit the class specified
// // in the format of html collections

// let aa=document.getElementsByClassName("pqr")
// console.log(aa)

// // 3-> getelementby tag-> it will bring all the tags available in my html file in the format of html collection
// let qq=document.getElementsByTagName("h1")
// console.log(qq)


// // 4-> query selector -> it can be use for all ie id, class, tag , but it will return only one element that is found first 

// // 1) query selector to get id 

// let hh=document.querySelector("#abc")
// console.log(hh)


// let pp=document.querySelector(".pqr")
// console.log(pp)

// // 5-> query selector All -> it will bring all the elemnts specified or that are available in the html file

// let tt=document.querySelectorAll("#abc")
// console.log(tt)


// let oo=document.querySelectorAll(".pqr")
// console.log(oo)

// let dd=document.querySelectorAll("h1")
// console.log(dd)


// inner text , innerHTML 


// innerText ->  it will repalce the old text available ,it is use to add text betn the html tags

let apple=document.getElementById("bag")
apple.innerText="this is a h1 tag"
apple.innerText="this is new text "

console.log(apple)

// innerHTML -> to add an HTML element inside any of the tag

let div=document.getElementById("container")
console.log(div)

// div.innerText="<h2>this is h2 tag</h2>"

div.innerHTML="<h2>this is h2 tag</h2>"





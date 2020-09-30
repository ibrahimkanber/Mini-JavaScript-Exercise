const entry = document.querySelector(".input");

const btn = document.querySelector(".add");
const container = document.querySelector(".container");

btn.addEventListener("click", createItem);
btn.addEventListener("click",createremoveAll);


entry.addEventListener("keyup",function(e){
      if(e.keyCode===13){
        createItem();
        createremoveAll()
    
      }
})

////


// var items=JSON.parse(localStorage.getItem("items"));

// function localStorageSet(){
//   console.log(entry.value)
//   items.push(entry.value);
//   console.log(items)
// }




function createItem(a) {
  entry.focus();
  const item = document.createElement("div");
  item.className = "toDo";
  
  ///
  const para=document.createElement("p");
  para.id="param";
  
  para.innerHTML=entry.value
  ///
  const button1 = document.createElement("button");
  button1.className = "remove";
  button1.innerHTML = "delete";
  button1.addEventListener("click", removeItem);
  ///
  console.log(entry.value);
  items.push(entry.value);
  localStorage.setItem("items",JSON.stringify(items))
  console.log(items);
  ////


  ///
  item.appendChild(para)
  item.appendChild(button1);
  container.appendChild(item);
  entry.value = "";
}


function removeItem(event){
    event.target.parentElement.remove()
   
}


function createremoveAll(){
  if (document.body.children[1].childElementCount<2){
    const deleteAll=document.createElement("button");
    deleteAll.className="removeAll";
    deleteAll.innerHTML="delete all";
    container.appendChild(deleteAll);
    deleteAll.addEventListener("click",function (e){
      e.target.parentElement.innerHTML="";

    })
  }
  
}


// var a=[1,2,5];
// var data=JSON.stringify(a);
// localStorage.setItem("items",data);
// var x=localStorage.getItem("items");
// console.log(x);
// console.log(JSON.parse(x))

// load()














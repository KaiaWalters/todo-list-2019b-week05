function addToList(){
  //always declare variables that are going to be at play in the function first
  let userInput = document.getElementById('inputItem').value;
  var ul = document.getElementById("listToAddTo");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(userInput));
  ul.appendChild(li);
  li.onclick = crossOut;
  countItems();
}

document.getElementById('addListButton').onclick = addToList;


function crossOut(){
  // alert("dogs!");
//investigate "this"
//adds the css class of an element
  this.className = "completed"
}


let clearComp = document.getElementById("clearCompleted");

clearComp.onclick = clearComplete;

function clearComplete(){
  let listedItems = document.querySelectorAll(".completed");
  // //goes through document and selects everything with the tag li
  // //returns an array of all the matching li items
  let i;
  // //you use a loop to cycle through the array holding all of the lis that query selector all gave us
  for(i=0; i<listedItems.length; i++){
  //   //you can style elements in javascript
  //this cycles through all of the li's with the class of "completed" and changes their display to none.
    listedItems[i].style.display = "none";


    let all = document.querySelectorAll("li");
    let complete = document.querySelectorAll(".completed");
    let total = all.length - complete.length;
    document.getElementById("theCount").innerText= total -1;

  }

}




let clearAll = document.getElementById("clearList");

clearAll.onclick = clearAllItems;

function clearAllItems(){
  let listedItems = document.querySelectorAll("li");
  // //goes through document and selects everything with the tag li
  // //returns an array of all the matching li items
  let i;
  // //you use a loop to cycle through the array holding all of the lis that query selector all gave us
  for(i=0; i<listedItems.length; i++){
  //   //you can style elements in javascript
  //this cycles through all of the li's with the class of "completed" and changes their display to none.
    listedItems[i].style.display = "none";
  }

  document.getElementById("theCount").innerText= 0;


}

function countItems() {
  let all = document.querySelectorAll("li");
  let complete = document.querySelectorAll(".completed");
  let total = all.length - complete.length;
  document.getElementById("theCount").innerText= total -1;
}


// listedItems.addEventListener("click", function(param){
//   param.classList.toggle("completed");
//   console.log("completed??")
// })

//
// clearListButton.addEventListener ("click", function() {
//   alert("did something");
// });

/*
let ul = document.querySelector("ul")
ul.addEventListener("click", function(e){
 if(e.target.tagName === 'LI'){
   e.target.classList.add("completed")
   isItComplete()
}
})

function isItComplete(){
  let completed = document.querySelectorAll('.completed')
  completed.forEach(function(li)){
    count--
    resetCount()
    document.getElementById("theCount").innerHTML=count
    })*/


  /*

  }
}

}
  */

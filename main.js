
let firstField = document.getElementById("firstField");
let secondField = document.getElementById("secondField");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const mulBtn = document.getElementById("mul");
const divBtn = document.getElementById("div");
let resultz = document.getElementById("resultz");

 
addBtn.addEventListener("click", ()=>{
    let result = Number(firstField.value) + Number(secondField.value);
    let elem = document.createElement("P");
    let elemtext = document.createTextNode(result);
    elem.appendChild(elemtext);
    resultz.appendChild(elem);

    
})

subBtn.addEventListener("click", ()=>{
    let result = Number(firstField.value) - Number(secondField.value);
    let elem = document.createElement("P");
    let elemtext = document.createTextNode(result);
    elem.appendChild(elemtext);
    resultz.appendChild(elem);
})

mulBtn.addEventListener("click", ()=>{
    let result = Number(firstField.value) * Number(secondField.value);
    let elem = document.createElement("P");
    let elemtext = document.createTextNode(result);
    elem.appendChild(elemtext);
    resultz.appendChild(elem);
})
 
divBtn.addEventListener("click", ()=>{
    let result = Number(firstField.value) / Number(secondField.value);
    let elem = document.createElement("P");
    let elemtext = document.createTextNode(result);
    elem.appendChild(elemtext);
    resultz.appendChild(elem);
})



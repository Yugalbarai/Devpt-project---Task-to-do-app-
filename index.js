
let myForm = document.getElementById("form");
let tbody=document.querySelector("tbody")

let data = [];
myForm.addEventListener("submit" , (event) =>{
   event.preventDefault(); 
//    console.log((form.task.value));
//    console.log((form.priority.value));
   let formData={
    task: myForm.task.value,
    priority: myForm.priority.value
   };
//    console.log(formData)
   
   data.push(formData)
   //console.log(data)
   tbody.innerHTML=null //null or ""
   data.forEach((element,index)=>{
   
  
    let tr= document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");

    td1.innerText=element.task;
    td2.innerText=element.priority

    tbody.append(tr)
    tr.append(td1 , td2)

    if(element.priority == "High"){td2.style.backgroundColor="red"}
    else{td2.style.backgroundColor="green"}

   })
})


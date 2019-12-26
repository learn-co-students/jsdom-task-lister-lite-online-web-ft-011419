

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form")
  form.addEventListener('submit',onSubmit)
})
  
 let  onSubmit = (event)=>{
    event.preventDefault()
    console.log(event)
    addToDom()
 
  }

let addToDom = ()=>{
  const newTaskDescription = document.getElementById("new-task-description")
  const list = document.getElementById("tasks")
  let input =newTaskDescription.value
  let add =`<li>${input}</li> `
  list.innerHTML = add  
}
// fuction to rewact when button hit
// function to add data to array 
// function to add elments to page ul with id tasks 
// then add  at the  an li with the 



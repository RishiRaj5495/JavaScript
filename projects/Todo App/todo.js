let todoList = [
  {
    item : 'Buy milk',
    dueDate : ' 4/11/2024'
  },
    {
      item : 'Coat' ,
       dueDate : '3/11/2024'
      }
      ];
 //let todoList = ['Rishi','Riya'];
    
function addTodo(){
let inputElement = document.querySelector('#fillThis');
let dateElement = document.querySelector('#date');
let todoItem = inputElement.value;
let todoDate = dateElement.value;
alert(` ${todoItem}`);

todoList.push({item: todoItem, dueDate : todoDate }); 
//todoList.push(todoItem);
console.log(todoList);
inputElement.value = '';
dateElement.value = '';
display();

}
 function display(){
  let write = document.querySelector('.likho');
  ;
  //let date = document.querySelector('#date');
  //write.innerText = '';
  let  newHtml = '';
  for(let i = 0 ; i < todoList.length; i++){
   let itemm = todoList[i].item;
   let dueDate = todoList[i].dueDate;
   //for string ke liye
//     newHtml += `
//     <p>
//     <span> ${todoList[i]}</span>  
//    <button onclick=" todoList.splice(${i},1[])  ;
//    display();
//   ">Delete</button>
//    </p> 
//  `;
//for object se string ke liye
 newHtml += `
    
     <span> ${itemm}</span>  
<span> ${dueDate}</span>
    <button class = 'red' onclick=" todoList.splice(${i},1)  ;
    display();
   ">Delete</button>
    
  `;
  //write.innerText += todoList[i] + '\n';

   
}
write.innerHTML = newHtml;

 }
const form = document.getElementsByTagName("form")[0];
const output = document.getElementsByTagName("ul")[0];


function addTask(e) {
  e.preventDefault();
  const taskValue = form[0].value;
  output.innerHTML += `<li>
  <p>${taskValue}</p>
  <div>
    <button class="done"></button>
    <button class="delete">
    Delete
    </button>
  </div>
</li>`;
form[0].value = "";
}

form.addEventListener("submit", addTask);
const doneButton = output.getElementsByClassName('.done');
const deleteButton = output.getElementsByClassName('.delete');
function deleteTask(e) {
  if (e.target.classList.contains('delete')) {
    const listItem = e.target.closest('li'); 
    if (listItem) {
      listItem.remove(); 
    }
  }
}
function toggleDone(e) {
  if (e.target.classList.contains('done')) { 
    const taskText = e.target.parentNode.previousElementSibling;  
    taskText.classList.toggle('taskComplete'); 
  }
}
  output.addEventListener("click", deleteTask);
  output.addEventListener("click", toggleDone);




  








  


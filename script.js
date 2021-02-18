const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector('.search input');

const generateTemplate = (todo) => {

  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li> 
  `;

  list.innerHTML += html;
}


addForm.addEventListener('submit', e => {
  e.preventDefault(); 
  const todo = addForm.add.value.trim();
  //console.log(todo)

  if(todo.length){
    generateTemplate(todo);
    addForm.reset();
  } 
  
 // En la condición nos aseguramos de que hemos puesto al menos, un caracter en el input. Si no,dará falsy y no nos dejará seguir. 
 // Si hay espacios, tampoco porque se ha aplicado trim() antes. 
 // Con el reset conseguidos que si escribimos un todo, se resetee el input y se quede en blanco.  De lo contario, mantendría la tarea en el input. 
  
}); 

// Delete todos 

list.addEventListener("click", e => {

  if(e.target.classList.contains("delete")) {
    e.target.parentElement.remove()
  }
})

const filterTodos = (term) => {
  //console.log(term);
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'))

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
    
 
}

// Searching and filtering todos
// Keyup event 


search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
})
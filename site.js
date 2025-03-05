// ASSIGNMENT 6 - TODO LIST


// Create function that creates and adds list items to DOM (renderTodos). Call it when the page loads. Call it again when the user adds an item.

// Use array method to loop through list of items. Don't use FOR loop

// When user adds an item to the list, it should be added to local storage. After it's added, call renderTodos


const todoButton = document.querySelector('#addTodo') // selects button
const todoInput = document.querySelector('#new-todo') // selects input
const todoList = document.querySelector('.todo-list') // selects ul

// Get the list from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || []

const li = document.createElement('li')

const renderTodos = () => {
    li.textContent = todoInput.textContent
    todoList.append(li)
}

todoButton.addEventListener('click', () => {
    // Clear the li's before we recreate them
    // todoList.innerHTML = ''
    // Add a new item to the list
    todos.push({ text: todoInput.value, completed: false })
    // Save the list to local storage
    localStorage.setItem('todo-list', JSON.stringify(todos))
})

todoList.innerHTML = `<span>${todos}</span>` 
// This was an attempt to make something appear. I got "[object Object]" to appear
// but when I destructured "todos" (I did const = {text, completed} = todos) and then did
// ${text}${completed} in the todoList.innerHTML it came back "undefined undefined"
// I'm not sure how to get it from the localStorage out into the code. It seems to me that
// destructuring "todos" should do it because doesn't that pull it out of localStorage?
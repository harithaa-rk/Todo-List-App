let todos = [];

function addTodo() {
    const input = document.getElementById('todoInput');
    const task = input.value.trim();
    if (task !== '') {
        todos.push(task);
        input.value = '';
        renderTodos();
    }
}

function renderTodos() {
    const list = document.getElementById('todoList');
    list.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;
        list.appendChild(li);
    });
}

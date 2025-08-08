function main() {
    const authorName = 'brewokzcuyy';
    function validateForm() {
        const todoInput = document.getElementById('todo-input').value;
        const todoDate = document.getElementById('todo-date').value;
        const todoUrgency = document.getElementById('todo-urgency').value;
        console.log('todourgency: ', todoUrgency)

        if (todoInput === '' || todoDate === '' ||todoUrgency === ''){
            alert('Silahkan isi dengan lengkap terlebih dahulu')
        } else{
            addTask(todoInput, todoDate, todoUrgency);
            showTask(todoArray)
        }
    }
    // variable DB menyimpan seluruh to do list
    let todoArray = [];
    const dummyTask = {
        'id' : 'aa-2025-08-25-Penting',
        'todo' : 'aa',
        'date' : '2025-08-25',
        'urgency' : 'Penting', 
    }
    todoArray.push(dummyTask)
    function addTask(todo, date, urgency){
        let task = {
            'id' : todo + '-' + date + '-'+ urgency,
            'todo' : todo,
            'date' : date, 
            'urgency' : urgency,
        }

        todoArray.push(task)
    }
    // validasi add task
    const addBtn = document.getElementById('todo-add')
    addBtn.addEventListener('click', function(){
        validateForm();
    })

    // footer
    const copyrightFooter = document.getElementById('copyright-footer')
    const year = new Date().getFullYear()
    copyrightFooter.innerHTML =  '©' + year +' ' + copyrightFooter.innerHTML + ' ' + `<b>${authorName}</b>`;
    copyrightFooter.style.fontStyle = 'italic';

    function showTask(todoArray){
        const todolistTable = document.getElementById('todolist-data')
        todoArray.forEach(todo =>{
            const newRow = document.createElement('tr');
            const newTodo = document.createElement('td');
            newTodo.textContent = todo['todo']
            newRow.appendChild(newTodo)

            const newDate = document.createElement('td');
            newDate.textContent = todo['date']
            newRow.appendChild(newDate)

            const newUrgency = document.createElement('td');
            newUrgency.textContent = todo['urgency']
            newRow.appendChild(newUrgency)

            const delBtn = document.createElement('button');
            delBtn.textContent = 'delete'
            delBtn.classList.add('bg-red-500', 'hover:bg-red-700', 'btn', 'focus:outline-2', 'rounded-lg', 'px-2', 'py-0', 'border-2' ,'border-double', 'delete-todo')
            delBtn.value = todo['id']
            newRow.appendChild(delBtn)
            todolistTable.appendChild(newRow)
        });
        
    }
    showTask(todoArray)
    function deleteAllTask(todoArray){
        todoArray = []
    }
    const deleteAllButton = document.getElementById('deleteall-todo')
    deleteAllButton.addEventListener('click', function(){
        deleteAllTask(todoArray);
    })
    function deleteTask(todoArray, deleteId){
        let newTodoArray=todoArray.filter(todo => todo['id'] !== deleteId);
        console.log('new To do array : ', newTodoArray)
        return newTodoArray;
    }
    const deleteButton = document.querySelectorAll('.delete-todo');
    deleteButton.forEach(btn =>
        btn.addEventListener('click',function(){
            const deleteId = btn.value
            console.log('deleteId : ',deleteId)
            deleteTask(todoArray,deleteId)
        })
    )
};

main();
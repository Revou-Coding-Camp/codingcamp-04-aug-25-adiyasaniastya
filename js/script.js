function main() {
    const authorName = 'Adiyasa Niastya Imam Fadhilah';
    function validateForm() {
        const todoInput = document.getElementById('todo-input').value;
        const todoDate = document.getElementById('todo-date').value;
        const todoUrgency = document.getElementById('todo-urgency').value;
        const todoForm = document.getElementById('todo-form')
        if (todoInput === '' || todoDate === '' ||todoUrgency === ''){
            alert('Silahkan isi dengan lengkap terlebih dahulu')
        } else{
            addTask(todoInput, todoDate, todoUrgency);
            updateNoDataVisibility();
            todoForm.reset();
        }
    }
    // variable DB menyimpan seluruh to do list
    let todoArray = [];
    function addTask(todo, date, urgency){
        const todolistTable = document.getElementById('todolist-data')
        const lenExistingTask = todoArray.length
        const iterator = lenExistingTask + 1
        const id = iterator+ '-' + todo + '-' + date + '-'+ urgency
        let task = {
            'id' : id,
            'todo' : todo,
            'date' : date, 
            'urgency' : urgency,
        }
        const newRow = document.createElement('tr');
        newRow.id = id
        const newTodo = document.createElement('td');
        newTodo.textContent = todo
        newRow.appendChild(newTodo)

        const newDate = document.createElement('td');
        newDate.textContent = date
        newRow.appendChild(newDate)

        const newUrgency = document.createElement('td');
        newUrgency.textContent = urgency
        newRow.appendChild(newUrgency)

        const btnTd = document.createElement('td');
        const delBtn = document.createElement('button');
        delBtn.textContent = 'delete'
        delBtn.classList.add('bg-red-500', 'hover:bg-red-700','focus:outline-2', 'rounded-lg',  'border-2' ,'border-double', 'delete-todo', )
        
        delBtn.value = id
        delBtn.addEventListener('click',function(){
            const taskId = delBtn.value
            deleteTask(todoArray,taskId)
        })
        btnTd.appendChild(delBtn)
        newRow.appendChild(btnTd)
        todolistTable.appendChild(newRow)
        todoArray.push(task)
    }
    // validasi add task
    const addBtn = document.getElementById('todo-add')
    addBtn.addEventListener('click', function(){
        validateForm();
    })
    function updateNoDataVisibility() {
        const allRows = Array.from(tbody.querySelectorAll('tr'))
            .filter(r => r.id !== 'noData');
        const hasVisible = allRows.some(r => r.style.display !== 'none');
        noDataRow.style.display = hasVisible ? 'none' : '';
    }

    // searching
    const input = document.getElementById('search-task');
    const searchBtn = document.getElementById('searchBtn')
    const tbody = document.getElementById('todolist-data');
    const noDataRow = document.getElementById('noData');

    function searchTask(){
        
        const colSelect = document.getElementById('columnSelect');
        
        let visibleCount = 0;
        const colIndex   = colSelect.value;
        const query = input.value.trim().toLowerCase();
        const rows  = tbody.querySelectorAll('tr:not(#nodata)');
        rows.forEach(row => {
            let textToSearch;

            if (colIndex === 'all') {
                textToSearch = Array.from(row.cells)
                    .map(cell => cell.textContent.toLowerCase())
                    .join(' ');
                console.log('textToSearch : ',textToSearch)
            } else {
                textToSearch = row.cells[colIndex].textContent.toLowerCase();
            }
            const match = textToSearch.includes(query);
            row.style.display = match ? '' : 'none';
            if (match) visibleCount++;
        });
        noDataRow.style.display = visibleCount === 0 ? '' : 'none';
    }
    // trigger searching
    searchBtn.addEventListener('click', () => {
        searchTask();
    });
    input.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            searchTask();
        }
    });


    function showAllTask(todoArray){
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
            delBtn.textContent = 'Hapus'
            delBtn.classList.add('bg-red-500', 'hover:bg-red-700', 'btn', 'focus:outline-2', 'rounded-lg', 'px-2', 'py-0', 'border-2' ,'border-double', 'delete-todo')
            delBtn.value = todo['id']
            delBtn.addEventListener('click',function(){
                const taskId = btn.value
                deleteTask(todoArray,taskId)
            })
            newRow.appendChild(delBtn)
            todolistTable.appendChild(newRow)
        });
    }
    function deleteAllTask(todoArray){
        if (todoArray.length > 0){
            todoArray.forEach(todo=>{
                const toDoRow = document.getElementById(todo['id'])
                toDoRow.remove()
            })
            todoArray = []
        }else{
            alert('Anda tidak memiliki task apapun^_^')
        }
        
    }
    // delete all 
    const deleteAllButton = document.getElementById('deleteall-todo')
    deleteAllButton.addEventListener('click', function(){
        deleteAllTask(todoArray);
        updateNoDataVisibility();
    })

    // delete per task
    function deleteTask(todoArray, taskId){
        const deletedRow = document.getElementById(taskId)
        deletedRow.remove();
    }

    // footer
    const copyrightFooter = document.getElementById('copyright-footer')
    const year = new Date().getFullYear()
    copyrightFooter.innerHTML =  '©' + year +' ' + copyrightFooter.innerHTML + ' ' + `<b>${authorName}</b>`;
    copyrightFooter.style.fontStyle = 'italic';
};

main();
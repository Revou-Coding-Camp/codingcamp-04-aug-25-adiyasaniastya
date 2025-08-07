function main() {
    function validateForm(params) {
        const todoInput = document.getElementById('todo-input');
        const todoDate = document.getElementById('todo-date');
        console.log('todoInput : ', todoInput.val())

        if (todoInput === '' || todoDate === ''){
            alert('masih kosong')
        }
    }
    const addBtn = document.getElementById('todo-add')
    addBtn.on('click',validateForm())

    let todoArray = [];
};
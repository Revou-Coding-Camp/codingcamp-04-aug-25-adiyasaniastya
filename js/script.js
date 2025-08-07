function main() {
    const authorName = 'brewokzcuyy'
    function validateForm() {
        const todoInput = document.getElementById('todo-input');
        const todoDate = document.getElementById('todo-date');
        console.log('todoInput 1: ', todoInput)

        if (todoInput === '' || todoDate === ''){
            alert('masih kosong')
        }
    }
    const addBtn = document.getElementById('todo-add')
    addBtn.onclick = validateForm()
    // footer
    const copyrightFooter = document.getElementById('copyright-footer')
    const year = new Date().getFullYear()
    copyrightFooter.innerHTML =  '©' + year +' ' + copyrightFooter.innerHTML + ' ' + `<b>${authorName}</b>`;
    copyrightFooter.style.fontStyle = 'italic';

    let todoArray = [];
};

main();
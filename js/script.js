function main() {
    const authorName = 'brewokzcuyy';
    function validateForm() {
        const todoInput = document.getElementById('todo-input').value;
        const todoDate = document.getElementById('todo-date').value;
        const todoUrgency = document.getElementById('todo-urgency').value;
        console.log('todourgency: ', todoUrgency)

        if (todoInput === '' || todoDate === '' ||todoUrgency === ''){
            alert('Silahkan isi dengan lengkap terlebih dahulu')
        }
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

    let todoArray = [];
};

main();
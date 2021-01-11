const input = document.querySelector('#input');
const list = document.querySelector('.notes-list');

const date = document.querySelector('#date')
    .innerHTML = new Date().toDateString();

const addToDo = (toDo) => {
    const text = `<li>
                    <input id="complete" type="checkbox">
                    <p>${toDo}</p>
                    <i id="trash" class="far fa-trash-alt"></i>
                  </li>`;
    
    if (input.value) {
        list.insertAdjacentHTML('beforeend', text);
        input.value = '';
    }
};

document.querySelector('button')
    .addEventListener('click', () => {
        const toDo = input.value;
        addToDo(toDo);
    });

document.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        const toDo = input.value;
        addToDo(toDo);
    }
})

list.addEventListener('click', (e) => {
    const id = e.target.id;
    const item = e.target.parentNode;

    if (id === 'complete') {
        if (e.target.checked) {
            item.style.textDecoration = 'line-through';
        } else {
            item.style.textDecoration = 'none';
        }
    }

    if (id === 'trash') {
        e.target.parentNode.remove();
    }
})




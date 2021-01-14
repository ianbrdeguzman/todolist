// initialize input and notes-list
const input = document.querySelector('#input');
const list = document.querySelector('.notes-list');

// update date today
const date = document.querySelector('#date')
    .innerHTML = new Date().toDateString();

// IIEF
( () => {

    for (let key in localStorage) {

         const stored = localStorage.getItem(key);
        
         const text = `<li>
                         <input id="complete" type="checkbox">
                         <p id="item">${stored}</p>
                         <i id="trash" class="far fa-trash-alt"></i>
                     </li>`

         // insert stored value 
         if (stored) {
             list.insertAdjacentHTML('beforeend', text);
         }

    }
})();

// add to-do function
const addToDo = (toDo) => {

    // assign new Li element to text
    const text = `<li>
                    <input id="complete" type="checkbox">
                    <p id="item">${toDo}</p>
                    <i id="trash" class="far fa-trash-alt"></i>
                  </li>`;

    // check if input is not empty
    if (input.value) {

        // insert text
        list.insertAdjacentHTML('beforeend', text);

        // stores to local storage
        storeToDo(toDo);

        // reset input text box
        input.value = '';
    }

};

// store to-do function
const storeToDo = (text) => {
    
    // loop to check if current local storage key is empty
    for (let i = 0; i <= localStorage.length; i++) {

        // if current local storage key is empty set key and value
        if (localStorage.getItem(i) === null) {
            localStorage.setItem(i, text);

            // break to stop the loop
            break;
        }
    }
};

// add click event to button
document.querySelector('button')
    .addEventListener('click', () => {

        // assign input value to toDo
        const toDo = input.value;

        // call addToDo function
        addToDo(toDo);
    });

// add enter key event 
document.addEventListener('keyup', (e) => {

    // assign input value to toDo
    const toDo = input.value;

    // check if keyup is Enter key
    if (e.keyCode === 13) {
        // call addToDo function
        addToDo(toDo);
    }
})

// add click event to clear
document.querySelector('#clear')
    .addEventListener('click', () => {
        
        // clear local storage
        localStorage.clear();

        // reload page
        location.reload();
    })

// add click event on lists
list.addEventListener('click', (e) => {

    // assign event target id to id
    const id = e.target.id;

    // assign event target parent node to item
    const item = e.target.parentNode;

    // check event target is equal to id
    if (id === 'complete') {

        // check if checkbox is checked
        if (e.target.checked) {

            // put line-through
            item.style.textDecoration = 'line-through';
        } else {

            // if checkbox is unchecked remove line-through
            item.style.textDecoration = 'none';
        }
    }

    // check event target is equal to trash
    if (id === 'trash') {
        
        // assign current text
        const current = e.target.parentNode.children[1].innerHTML;
        
        // loop over local storage keys
        for (let key in localStorage) {
            
            // assign key value to stored
            const stored = localStorage.getItem(key);

            // check if current value is equal to key value
            if(current === stored) {

                // remove key value in local storage
                localStorage.removeItem(key);
            }
        }
        item.remove();
    }
    // TODO: add edit function when list id=item is clicked
    
})




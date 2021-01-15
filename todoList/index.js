const todoAPI = (() => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const todoPath = 'todos';

    const getAllTodos = () => fetch([baseUrl, todoPath].join('/'))
        .then(response => response.json());

    const delefeTodo = id => fetch([baseUrl, todoPath, id].join('/'), {
        method: 'DELETE',
    });

    return {
        getAllTodos, 
        delefeTodo
    }
})();

const View = (() => {
    const domString = {
        todolist: 'todolist-content'
    }
    const render = (element, htmlTemplate) => {
        element.innerHTML = htmlTemplate;
    }
    const inittodoListTmp = function (todoArray) {
        let template = '';
        todoArray.forEach(ele => {
            template +=
                `<li>
                    <span>${ele.title}</span> 
                    <button class="btn-remove" id="${ele.id}">X</button>
                </li>`
        });
        return template;
    }

    return {
        domString,
        render,
        inittodoListTmp
    }
})();

const Model = ((api) => {
    class Todo {
        constructor(userId, id, title, completed) {
            this.userId = userId;
            this.id = id;
            this.title = title;
            this.completed = completed;
        }
    }

    const fetchTodos = api.getAllTodos;
    const deleteTodo = api.delefeTodo;

    return {
        fetchTodos,
        deleteTodo,
        Todo
    }
})(todoAPI);

const AppController = ((view, model) => {
    class State {
        #todolist = [];

        get todolist() {
            return this.#todolist;
        }
        set todolist(newlist) {
            this.#todolist = newlist;
            const element = document.getElementById(view.domString.todolist);
            const tmp = view.inittodoListTmp(this.#todolist);
            view.render(element, tmp);

            // const btnRemove = document.querySelectorAll('.btn-remove');
            // btnRemove.forEach(ele => {
            //     ele.addEventListener('click', () => {
            //         state.todolist = state.todolist.filter(todo => {
            //             return +ele.id !== +todo.id;
            //         });
            //     });
            // });
        }
    }
    const state = new State();

    const initTodos = () => {
        model.fetchTodos().then(data => {
            
            if(state.todolist.length === 0){
                state.todolist = data.slice(0,5);
                //console.log(state.todolist);
            }else{
                let temp = state.todolist;
                //console.log("temp : ",temp);
                state.todolist = temp;
            }
            
            

            // const element = document.getElementById(view.domString.todolist);
            // const tmp = view.inittodoListTmp(data);
            // view.render(element, tmp);

            const todolistContent = document.querySelector('#' + view.domString.todolist);
            // console.log(todolistContent)
            todolistContent.addEventListener('click', (event) => {
                if (event.target.className === 'btn-remove') {
                    // console.log(event.target);
                    state.todolist = state.todolist.filter(todo => {
                        return +event.target.id !== +todo.id;
                    });
                }
            })

            // const btnRemove = document.querySelectorAll('.btn-remove');
            // btnRemove.forEach(ele => {
            //     ele.addEventListener('click', () => {
            //         // console.log(event.target.id);
            //         state.todolist = state.todolist.filter(todo => {
            //             return +ele.id !== +todo.id;
            //         });
            //         console.log(state.todolist.length);
            //     });
            // })

        });
    }

    const addtodo = () => {
        const todolistInput = document.getElementById('todolist-input');
            
            //console.log(todolistInput);
            todolistInput.addEventListener("keyup", (event) => {
                if(event.keyCode === 13){
                    event.preventDefault();
                    console.log("user pressed enter");
                    const inputValue = todolistInput.value;
                    let lastId = state.todolist[state.todolist.length-1].id;
                    //console.log(lastId);
                    let tempObj = new model.Todo(1, lastId+1, inputValue, true);
                    state.todolist.push(tempObj);
                    initTodos();
                }
            })
    }

    const init = () => {
        console.log('init');
        initTodos();
    }
    return {
        init,
        addtodo
    }
})(View, Model);

AppController.init();
AppController.addtodo();


// Model, View, Control
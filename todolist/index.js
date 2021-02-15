
const todoAPI = (() => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const todoPath = 'todos';

    const getAllTodos = () => fetch([baseUrl, todoPath].join('/'))
        .then(response => response.json());

    const delefeTodo = id => fetch([baseUrl, todoPath, id].join('/'), {
        method: 'DELETE',
    });

    const addTodo = (newTodo) => {
        return fetch([baseUrl, todoPath].join('/'), {
            method: 'POST',
            body: JSON.stringify(newTodo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json());
    }

    return {
        getAllTodos,
        delefeTodo,
        addTodo
    }
})();

const View = (() => {
    const domString = {
        todolist: 'todolist-content',
        todoinput: 'todolist__input'
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

const Model = ((api, view) => {
    class Todo {
        constructor(userId, title, completed) {
            this.userId = userId;
            this.title = title;
            this.completed = completed;
        }
    }
    class State {
        #todolist = [];
        #todoinput = '';

        get todoinput() {
            return this.#todoinput;
        }
        set todoinput(newinput) {
            this.#todoinput = newinput;
            const todoInputEle = document.querySelector('.' + view.domString.todoinput);
            todoInputEle.value = this.#todoinput;
        }

        get todolist() {
            return this.#todolist;
        }
        set todolist(newlist) {
            this.#todolist = newlist;
            
            const element = document.getElementById(view.domString.todolist);
            const tmp = view.inittodoListTmp(this.#todolist);
            view.render(element, tmp);
        }
    }

    const fetchTodos = api.getAllTodos;
    const deleteTodo = api.delefeTodo;
    const addTodo = api.addTodo;

    return {
        fetchTodos,
        deleteTodo,
        addTodo,
        State,
        Todo
    }
})(todoAPI, View);

const AppController = ((view, model) => {

    const state = new model.State();

    const addListenerOnInput = () => {
        const todoInputEle = document.querySelector('.' + view.domString.todoinput);

        todoInputEle.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                state.todoinput = event.target.value;
                console.log(state.todoinput);
                
                // const randomId = Math.random() * 1000000 ** 2;
                const newTodo = new model.Todo(1, state.todoinput, false);
                
                model.addTodo(newTodo).then(data => {
                    state.todolist = [data, ...state.todolist];
                    console.log(data);
                });
                state.todoinput = '';
                // event.target.value = '';
            }
        });
    }

    const addListenerOnRemove = () => {
        const todolistContent = document.querySelector('#' + view.domString.todolist);

        todolistContent.addEventListener('click', (event) => {
            if (event.target.className === 'btn-remove') {
                state.todolist = state.todolist.filter(todo => {
                    return +event.target.id !== +todo.id;
                });
            }
        });
    }

    const initTodos = () => {
        model.fetchTodos().then(data => {
            state.todolist = data;
            addListenerOnRemove();
            addListenerOnInput();
        });
    }
    const init = () => {
        console.log('init');
        initTodos();
    }
    return {
        init
    }
})(View, Model);

AppController.init();


// Model, View, Control
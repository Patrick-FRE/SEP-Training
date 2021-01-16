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
        todolist: 'todo-content',
        todoinput: 'todo-input'
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
                    <button class="btn-remove" id="${ele.id}"><i class="fas fa-trash-alt"></i></button>
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
            // this.id = id; //this is not requried as JSON placeholder will always give the same id
            this.title = title;
            this.completed = completed;
        }
    }
    const fetchTodos = api.getAllTodos;
    const deleteTodo = api.delefeTodo;
    const addTodo = api.addTodo;

    class State {
        #todolist = [];
        #todoinput = '';

        get todoinput() {
            return this.#todoinput;
        }

        set todoinput(newinput) {
            this.#todoinput = newinput;
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


    //add todo will be done here
    const addLisnterOnInput = () => {
        const submitBtn = document.querySelector('#submit');
        const todoInputEle = document.querySelector('#' + view.domString.todoinput);
    
        submitBtn.addEventListener('click', () => {
            if (todoInputEle.value.length !== 0) {
                state.todoinput = todoInputEle.value;
                console.log(state.todoinput);
                const newTodo = new model.Todo(1, state.todoinput, false);
                model.addTodo(newTodo).then(data =>{
                    state.todolist = [data,...state.todolist];
                    console.log(data);
                })
                todoInputEle.value = "";
            }
        })
    }




    const addListenerOnRemove = () => {
        const todolistContent = document.getElementById(view.domString.todolist);
        todolistContent.addEventListener('click', (event) => {
            if (event.target.className === "btn-remove") {
                //event.listener is not always fired?
                console.log(event.target);
                state.todolist = state.todolist.filter(todo => {
                    return +event.target.id !== +todo.id;
                });
            }
        })

    }
    const initTodos = () => {
        model.fetchTodos().then(data => {
            state.todolist = data;
            addListenerOnRemove();
            addLisnterOnInput();
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
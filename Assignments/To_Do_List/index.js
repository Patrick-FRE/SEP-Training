const todoAPI = (() => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const todoPath = 'todos';

    const getAllTodos = () => fetch([baseUrl, todoPath].join('/'))
        .then(response => response.json());

    const deleteTodo = id => fetch([baseUrl, todoPath, id].join('/'), {
        method: 'DELETE',
    });

    return {
        getAllTodos,
        deleteTodo
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
    const deleteTodo = api.deleteTodo;

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
        }
    }
    const state = new State();

    const initTodos = () => {
        model.fetchTodos().then(data => {
            state.todolist = data;
            const todolistContent = document.querySelector('#' + view.domString.todolist);
            todolistContent.addEventListener('click', (event) => {
                if (event.target.className === 'btn-remove') {
                    state.todolist = state.todolist.filter(todo => {
                        return +event.target.id !== +todo.id;
                    });
                }
            })
        });
    }
    const addTodo = () => {
        document.getElementById("inputTodo").addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                let new_id = state.todolist.length + 1;
                const todolistContent = document.querySelector('#' + view.domString.todolist);
                let input_value = {id: new_id, title: document.getElementById("inputTodo").value};
                state.todolist.push(input_value);
                new_id++;
                let new_todo = document.createElement("li");
                new_todo.innerHTML = `<span>${input_value.title}</span> 
                <button class="new-remove" id="${input_value.id}">X</button>`;
                todolistContent.addEventListener('click', (event) => {
                    const item = event.target;
                    if (event.target.className === 'new-remove') {
                        const remove_item = item.parentElement;
                        console.log(remove_item);
                        remove_item.remove();
                    }
                })
                todolistContent.prepend(new_todo);
            }
        })
    }
    const init = () => {
        console.log('init');
        initTodos();
        addTodo();
    }
    return {
        init
    }
})(View, Model);

AppController.init();
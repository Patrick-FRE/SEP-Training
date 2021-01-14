
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
            state.todolist = data;

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
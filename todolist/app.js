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
        todolist: 'todo-content'
    }
    const render = (element, htmlTemplate) => {
        element.innerHTML = htmlTemplate;
        // console.log("render method is fired");
    }
    const inittodoListTmp = function (todoArray) {
        let template = '';
        //The newest one should be on the top
        todoArray.sort((a, b) => {return b.id - a.id}).forEach(ele => {
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
            console.log(`${this.#todolist.length} from the render method` );
            const element = document.getElementById(view.domString.todolist);
            const tmp = view.inittodoListTmp(this.#todolist);
            view.render(element, tmp);
        }
    }
    const state = new State();
    // console.log(state);

    const initTodos = () => {
        model.fetchTodos().then(data => {
            state.todolist = data;


            //add todo will be done here
            const submitBtn = document.querySelector('#submit');
            const todoInput = document.querySelector('#todo-input');
            // console.log(todoInput);
            submitBtn.addEventListener('click', () => {
                if(todoInput.value.length !== 0){
                    const newTodoText = todoInput.value;
                    const newTodo = new Model.Todo(1, state.todolist.length,newTodoText, false );
                    console.log(newTodo);
                    state.todolist.push(newTodo);
                    console.log(state.todolist);
                    todoInput.value = "";
                    // view.render(view.domString.todolist, state.todolist);
                    //new todo is not rendered??
                }
            })
            //except for the first one, 
        

            const todolistContent = document.querySelector('#' + view.domString.todolist);
            todolistContent.addEventListener('click', (event) => {
                if (event.target.className === "btn-remove") {
                    console.log(event.target);
                    state.todolist = state.todolist.filter(todo => {
                        if(+event.target.id === +todo.id ){
                            console.log(event.target, todo);
                        } else{
                            // console.log(event.target, todo);
                            return todo;
                        }
                        // return +event.target.id !== +todo.id;
                    });
                }
            })

            //This method only works for the first one
            // const btnRemove = document.querySelectorAll('.btn-remove');
            // console.log(btnRemove);
            // btnRemove.forEach(ele => {
            //     ele.addEventListener('click', (event) => {
            //         console.log(event.target.id);
            //         state.todolist = state.todolist.filter(todo => {
            //             return +ele.id !== +todo.id;
            //         });
            //         console.log(state.todolist.length);
            //     });
            // })
            // const element = document.getElementById(view.domString.todolist);
            // const tmp = view.inittodoListTmp(state.todolist);

        
        
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
// const { check } = require("yargs")

class Model {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [
            { id: 1, text: 'Run a marathon', complete: false },
            { id: 2, text: 'Plant a garden', complete: false },
        ]
    }

    add(text) {
        let todo = {
            id: this.todos.length + 1,
            text: text,
            complete: false

        }

        this.todos.push(todo)
        // this.onTodoListChanged(this.todos)
        this._commit(this.todos)


    }

    edit(id, updatedText) {
        this.todos = this.todos.map(todo =>
            todo.id === id ? { id: todo.id, text: updatedText, complete: todo.complete } : todo
        )

        this._commit(this.todos)
    }

    delete(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
        this._commit(this.todos)

        // this.onTodoListChanged(this.todos)
    }

    toggle(id) {
        this.todos = this.todos.map(todo => {
            return todo.id === id ? { id: todo.id, text: todo.text, complete: !todo.complete } : todo
        })
        // this.onTodoListChanged(this.todos)
        this._commit(this.todos)

    }

    // model 入面得到 controller onchange mt(), 打包到 CRUD model
    bidnTodoListChanged(cb) {
        this.onTodoListChanged = cb;
    }


    // onchanged 打包
    _commit(todos) {
        this.onTodoListChanged(todos)
        localStorage.setItem('todos', JSON.stringify(todos))
    }

}

// anything related to DOM
class View {
    constructor() {
        /* #root h1 
        form input button
        ul
        */

        this.app = this.getElement('#root')
        this.h1 = this.createElement('h1')
        this.h1.innerText = 'Todo'

        this.form = this.createElement('form')

        this.input = this.createElement('input')
        this.input.type = "text"
        this.input.placeholder = "enter sth";

        this.ul = this.createElement('ul')

        this.button = this.createElement('button')
        this.button.innerText = "Post"

        this.form.append(this.input, this.button)

        this.todoList = this.createElement('ul', 'todo-list')
        this.app.append(this.h1, this.form, this.todoList)


        // edit temp var

        this._temp = 'a';
        this._initListener()
    }




    get _todoText() {
        return this.input.value
    }

    _resetInput() {
        this.input.value = ''
    }

    createElement(tag, className) {
        let ele = document.createElement(tag)
        className ? ele.classList.add(className) : ''
        return ele
    }

    getElement(selector) {
        return document.querySelector(selector)
    }

    // view 刷新方法 比 => controller 再比 => Model 打包 
    // Controller 取  model.todos => pass 比  
    displayTodos(todos) {
        // 1. delete all nodes
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild)
        }

        // 1b. == 0
        if (todos.length === 0) {
            const p = this.createElement('p')
            p.innerText = 'Nothing here!'
            this.todoList.append(p)
        }

        // 2. forEach 重新create
        else {
            todos.forEach(todo => {

                // 造 li input 13 s button
                const li = document.createElement('li')
                li.id = todo.id

                const checkbox = this.createElement('input')
                checkbox.type = 'checkbox'
                checkbox.checked = todo.complete

                const span = document.createElement('span')
                span.contentEditable = true
                span.classList.add('editable')

                // append s into span
                if (todo.complete) {
                    const strike = document.createElement('s')
                    strike.innerText = todo.text
                    span.append(strike)
                }
                else {
                    span.textContent = todo.text
                }


                const deleteButton = document.createElement('button', 'Delete')
                deleteButton.className = 'Delete'
                deleteButton.innerText = 'Delete'
                li.append(checkbox, span, deleteButton)

                this.todoList.append(li)
            })
        }


    }

    // eventListener 系 user input 入口 => 连 controller ( handlers )
    // CRUD binder -> listener && handler

    bindAddTodo(handler) {
        this.form.addEventListener('submit', e => {
            e.preventDefault()

            if (this._todoText) {
                handler(this._todoText)
                console.log(this._todoText);

                this._resetInput();
            }
        })

    }

    // event Bubbling -> 当 event.className == 'Delete'
    bindDeleteTodo(handler) {
        this.todoList.addEventListener('click', e => {
            if (e.target.className == 'Delete') {
                // console.log(e.target.parentElement);
                let id = parseInt(e.target.parentElement.id)
                // 触发 cb() in controller, 改 model -> todos[]
                handler(id)

            }
        })
    }

    bindToggleTodo(handler) {
        this.todoList.addEventListener('change', e => {
            console.log(e.target.parentElement.id);
            if (e.target.type === 'checkbox') {
                const id = parseInt(e.target.parentElement.id)
                handler(id)
            }
            // console.log(e.target)
        })
    }


    _initListener() {
        this.todoList.addEventListener('input', e => {
            console.log(e);

            this._temp = e.target.textContent

            console.log(this._temp)
        })


    }

    bindEditTodo(handler) {
        this.todoList.addEventListener('focusout', e => {
            console.log(this._temp);
            if (this._temp) {
                const id = parseInt(e.target.parentElement.id)
                handler(id, this._temp)
                this._temp = ''
            }
        })
    }

    // https://www.taniarascia.com/javascript-mvc-todo-app/

}

class Controller {
    constructor(Model, View) {
        // this. instance obj. props
        this.model = Model
        this.view = View

        // init displaytodo
        this.onTodoListChanged(this.model.todos)
        this.view.bindAddTodo(this.handleAddTodo)
        this.view.bindDeleteTodo(this.handleDeleteTodo)
        this.view.bindEditTodo(this.handleEditTodo)
        this.view.bindToggleTodo(this.handleToggleTodo)
        // 比 Onchange mt() model
        this.model.bidnTodoListChanged(this.onTodoListChanged)
    }


    // 每次change 都call
    onTodoListChanged = (todos) => {
        this.view.displayTodos(todos);

    }

    // CRUD handlers

    handleAddTodo = todos => {
        this.model.add(todos);
    }

    // handle Edit
    handleEditTodo = (id, text) => {
        this.model.edit(id, text);
    }


    handleDeleteTodo = id => {
        this.model.delete(id)
    }

    handleToggleTodo = id => {
        this.model.toggle(id)
    }


}


let app = new Controller(new Model(), new View());

app.model.add('abc')

console.log(app);
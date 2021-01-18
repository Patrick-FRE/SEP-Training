// const api = (()=> {
//     const foo= ()=> {
//         console.log('api pattern')
//     }
//     return {
//         foo
//     }
// })()

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then(response => response.json())
//   .then(json => console.log(json));

//mvc

// const todoUrl = (() => {
//   const baseUrl = "https://jsonplaceholder.typicode.com";
//   const path = "todos";

//   const getAllTodos = () =>
//     fetch([baseUrl, path].join("/")).then(response => response.json());

//   return { getAllTodos };
// })();

// // todoUrl.getAllTodos()

// //view

// const View = (() => {
//   const domString = {
//     todolist: "todolist-content"
//   };

//   const render = (element, htmlTemplete) => {
//     element.innerHTML = htmlTemplete;
//   };

//   const initHtmlTemp = function(todoArray) {
//     let temp = "";
//     todoArray.forEach(e => {
//       temp += `<li>
//       <span>${e.title}</span>
//       <button>X</button></li>`;
//     });
//     console.log(todoArray, "this is temp");
//     return temp;
//   };

//   return {
//     domString,
//     render,
//     initHtmlTemp
//   };
// })();

// //model

// const Model = (api => {
//   class Todo {
//     constructor(userId, id, title, completed) {
//       this.userId = userId;
//       this.id = id;
//       this.title = title;
//       this.completed = completed;
//     }
//   }

//   const fetchtodos = api.getAllTodos;

//   return {
//     fetchtodos,
//     Todo
//   };
// })(todoUrl);

// //control

// const AppController = ((view, model) => {
//   const initTodos = () => {
//     model.fetchtodos().then(data => {
//       const htmltmp = document.getElementById(view.domString.todolist);
//       const tmp = view.initHtmlTemp(data);
//       console.log(data);

//       view.render(htmltmp, tmp);
//     });
//   };

//   const init = () => {
//     console.log("init");
//     initTodos();
//   };

//   return {
//     init
//   };
// })(View, Model);

// AppController.init();

const todoAPI = (() => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const todoPath = "todos";

  const getAllTodos = () =>
    fetch([baseUrl, todoPath].join("/")).then(response => response.json());

  const delefeTodo = id =>
    fetch([baseUrl, todoPath, id].join("/"), {
      method: "DELETE"
    });

  // const addTodo = id =>
  //   fetch([baseUrl, todoPath, id].join("/"), {
  //     method: "POST"
  //   });

  const addTodo = newTodo => {
    return fetch([baseUrl, todoPath].join("/"), {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json());
  };

  return {
    getAllTodos,
    delefeTodo,
    addTodo
  };
})();

const View = (() => {
  const domString = {
    todolist: "todolist-content",
    todoinput: "todolist__input"
  };
  const render = (element, htmlTemplate) => {
    element.innerHTML = htmlTemplate;
  };
  const inittodoListTmp = function(todoArray) {
    let template = "";
    todoArray.forEach(ele => {
      template += `<li>
                <span>${ele.title}</span> 
                <button class="btn-remove" id="${ele.id}">X</button>
            </li>`;
    });
    return template;
  };

  return {
    domString,
    render,
    inittodoListTmp
  };
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
    #todoinput = "";

    get todoinput() {
      return this.#todoinput;
    }
    set todoinput(newinput) {
      this.#todoinput = newinput;
      const todoInputEle = document.querySelector(
        "." + view.domString.todoinput
      );
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
  };
})(todoAPI, View);

const AppController = ((view, model) => {
  const state = new model.State();

  const addListenerOnInput = () => {
    const todoInputEle = document.querySelector("." + view.domString.todoinput);

    todoInputEle.addEventListener("keyup", event => {
      if (event.key === "Enter") {
        state.todoinput = event.target.value;
        // console.log(state.todoinput);

        const newTodo = new model.Todo(1, state.todoinput, false);

        model.addTodo(newTodo).then(data => {
          state.todolist = [data, ...state.todolist];
          // console.log(data);
        });
        state.todoinput = "";
      }
    });
  };

  const addListenerOnRemove = () => {
    const todolistContent = document.querySelector(
      "#" + view.domString.todolist
    );
    todolistContent.addEventListener("click", event => {
      if (event.target.className === "btn-remove") {
        state.todolist = state.todolist.filter(todo => {
          return +event.target.id !== +todo.id;
        });
      }
    });
  };

  const initTodos = () => {
    model.fetchTodos().then(data => {
      state.todolist = data;
      addListenerOnRemove();
      addListenerOnInput();

      // const element = document.getElementById(view.domString.todolist);
      // const tmp = view.inittodoListTmp(data);
      // view.render(element, tmp);

      // const todolistContent = document.querySelector(
      //   "#" + view.domString.todolist
      // );
      // // console.log(todolistContent)
      // todolistContent.addEventListener("click", event => {
      //   if (event.target.className === "btn-remove") {
      //     // console.log(event.target);
      //     state.todolist = state.todolist.filter(todo => {
      //       return +event.target.id !== +todo.id;
      //     });
      //   }
      // });

      // const textbox = document.getElementById("todo-input");
      // textbox.addEventListener("keypress", function onEvent(event) {
      //   if (event.key === "Enter") {
      //     // console.log(event.target.value)
      //     let newTodo = {
      //       completed: false,
      //       id: state.todolist.length + 1,
      //       title: event.target.value,
      //       userId: 10
      //     };
      //     state.todolist = [newTodo, ...state.todolist];
      //   }
      // });

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
  };
  const init = () => {
    console.log("init");
    initTodos();
  };
  return {
    init
  };
})(View, Model);

AppController.init();

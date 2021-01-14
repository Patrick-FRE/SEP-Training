// fetch在node不是內建的, 所以另外宣告
const fetch = require("node-fetch");

let todoData = {}
fetch('https://jsonplaceholder.typicode.com/posts')
   .then(response => response.json())
   .then(json => {
      // console.log(json);
      todoData = json;
    }).then(() => console.log(todoData))

document.getElementById('fetchBtn').addEventListener("click", () =>{

})
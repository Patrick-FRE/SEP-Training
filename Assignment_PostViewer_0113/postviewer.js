// // fetch在node不是內建的, 所以另外宣告
// const fetch = require("node-fetch");

let todoData = {}
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => todoData = json)
  .then(() => renderTable());
  
function renderTable(){
  for(const {userId, id, title, body} of todoData){
    let tr = document.createElement("tr");
    let idNode  = document.createTextNode(id);
    let td = document.createElement("td");
    let idTitle = document.createTextNode(title);
    let idBody  = document.createTextNode(body);
    
    td.appendChild(idNode);
    tr.appendChild(td);

    let td2 = document.createElement("td");
    td2.appendChild(idTitle);
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.appendChild(idBody);
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    let btn = document.createElement("button");
    let del = document.createTextNode('delete');
    btn.addEventListener("click", deleteData);
    btn.appendChild(del);
    td4.appendChild(btn);
    tr.appendChild(td4);

    document.getElementById('myUrl').appendChild(tr);
  }  
}




function deleteData(){
  let ele = this.parentNode.parentNode;
  ele.style.display = "none";
}


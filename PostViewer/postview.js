// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(json => console.log(json))

function getFromAPI(url, callback) {
  var obj;
  fetch(url)
    .then(res => res.json())
    .then(data => (obj = data))
    .then(() => callback(obj));
}

getFromAPI("https://jsonplaceholder.typicode.com/posts", getData);

function getData(arr) {
  var results = "";
  arr.forEach(x => {
    results += "<tr>";
    results += "<td>"+x.title+"</td>";
    results += "<td>"+x.body+"</td>";
    results += `<td><button onClick="deletePost()">Delete!</button></td>`;
    results += "</tr>";
  });
  document.getElementById("allPosts").innerHTML += results;
}


function deletePost(e){
    e = e || window.event;
    let result = e.target.parentNode.parentNode.style
    result.display = "none"
}
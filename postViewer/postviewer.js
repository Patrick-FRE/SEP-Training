

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
       //console.log(json.slice(1,11));
       let data = json.slice(0, 20);
       let table = document.getElementById('tb');
       data.forEach(item => {
           console.log(item.id)
           let row = document.createElement('tr');
           row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.title.slice(0,20)}</td>
            <td>${item.body.slice(0,15)}</td>
           `
            table.appendChild(row);
            //console.log(row);
       });
    })




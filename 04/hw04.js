fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
    return response.json()
})
    .then(data => {  
        const theTable = document.getElementById("printData");
        console.log(data);
        let res = data.map(post => `
        <tr class="head" id="${post.id}">
        <td class="id" >${post.id}</th>
        <td class="title" >${post.title}</th>
        <td class="content">${post.body}</th>
        <td class="action"><input type="button" class ="buttonDelete" onclick="deleteItemById(${post.id})" value="Delete"></td>
        </tr>`).join("");
        // console.log(res)
        theTable.innerHTML = res;
        print(res, theTable);
    })
    .catch(error => {
        console.log(error);
    })
    
function deleteItemById(id){
    console.log("test delete");
    var idObject = document.getElementById(id);
    if (idObject != null){
        idObject.parentNode.removeChild(idObject);
    }

}

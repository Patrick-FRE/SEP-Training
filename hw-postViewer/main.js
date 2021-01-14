let url = 'https://jsonplaceholder.typicode.com/posts';
fetch(url).then((res) => res.json()).then((data) => getData(data));

function getData(arr) {
    let results = '';
	arr.forEach((i) => {
        results += `
            <tr>
                <td> ${i.id}</td>
                <td> ${i.title}</td>
                <td> ${i.body}</td>
                <td>
                    <button class="btn btn-danger" onClick="deletePost()">Delete</button>
                </td>
            </tr>
        `;
	});
	document.getElementById('table').innerHTML += results;
}

function deletePost() {
	let result = window.event.target.parentNode.parentNode.style;
	result.display = 'none';
}


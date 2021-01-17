// global.fetch = require("node-fetch");

// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

mypost = []

options = {
    method: 'GET',
    // body: JSON.stringify({
    //     title: 'foo',
    //     body: 'bar',
    //     userId: 1,
    // }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
}
function postData(url, data) {
    return new Promise(res => {
        const xhr = new XMLHttpRequest(),
            method = data.method
        // url = "https://developer.mozilla.org/";

        xhr.open(method, url, true);
        // setRequestHeader
        if (options.headers) {
            for (let i in options.headers) {
                xhr.setRequestHeader(i, options.headers[i])
            }

        }


        xhr.onreadystatechange = function () {
            // In local files, status is 0 upon success in Mozilla Firefox
            if (xhr.readyState == 4) {
                console.log('here');
                var status = xhr.status;
                if (status === 0 || (status >= 200 && status < 400)) {
                    // The request has been completed successfully
                    // console.log(xhr.responseText);
                    res(xhr.responseText)
                } else {
                    // Oh no! There has been an error with the request!
                }
            }
        };
        xhr.send(options.body);
    })
}






let template = (post) => {
    return `<tr><td>${post.body}</td>
<td>${post.id}</td>
<td>${post.title}</td>
<td>${post.userId}</td></tr>
`}

function renderr(template, mypost) {
    let ele = document.getElementById('root')
    let tabl = document.createElement('table')
    mypost.map(post => {
        // let post = postz
        let tr = template(post);
        ele.innerHTML += tr
        // tabl.appendChild(tr) 
        // console.log(tr);
        // console.log(tr);
        // ele.appendChild()
    })
    console.log(ele);
}


postData('https://jsonplaceholder.typicode.com/posts', options)
    .then(data => {
        mypost = JSON.parse(data)
        console.log(mypost);
        renderr(template, mypost)
    }) // JSON from `response.json()` call
    .catch(error => console.error(error))


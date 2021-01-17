let state = []
let searchKey = 'ken'
let num = 20
let url = (searchKey = 'ken', num = 20) => `https://itunes.apple.com/search?term=${searchKey}&media=music&entity=album&attribute=artistTerm&limit=${num}`

// console.log(url(searchKey));
// artworkUrl100
// collectionName

let searchBar = document.getElementsByClassName('search')[0]
searchBar.addEventListener('input', (e) => {
    searchKey = e.target.value
    // console.log(e.target.value);
})

let button = document.getElementById('but')
button.addEventListener('click', e => {
    let newurl = url(searchKey)
    console.log(newurl);
    render(template, fetch, newurl)

})



function render(template, fetch, url) {
    // console.log('urlnow: ', url);
    let box = document.getElementById('box')
    fetch(url).then(response => response.json())
        .then(res => {
            state = res.results
            console.log(state);
            box.innerHTML = ""

        }).then(res => {
            let temp = ""
            state.map(album => {
                let item = template(album);
                temp += item
            })

            temp += loadmoreButton
            box.innerHTML = temp
            console.log(state);
        })
        // .then(res => console.log(res))
        .catch(rej => console.log('err'));
}

let loadmoreButton = `<div id="load">
<button id='loadbut' onclick="loadmorefn()">loadmore</button>
</div>
`
let newNum = num

function loadmorefn() {
    newNum = newNum +10
    render(template, fetch, url(searchKey, newNum))


}


let template = (item) => {
    return `
    <div class="item">
    <img src="${item.artworkUrl100}" />
    <h3>${item.collectionName}</h3>
    </div>
    `
};

setTimeout(() => render(template, fetch, url()), 0)

fetch(url()   // mode: 'cors',
    // credentials: 'include',
    // method: 'GET',
    // headers: headers
).then(response => response.json())
    .then(res => state = res.results)
    // .then(res => console.log(res))
    .catch(rej => console.log('err'))



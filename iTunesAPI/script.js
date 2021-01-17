let state = []
let searchKey = 'ken'
let url = (searchKey = 'ken') => `https://itunes.apple.com/search?term=${searchKey}&media=music&entity=album&attribute=artistTerm&limit=50`

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
            box.innerHTML = temp
            console.log(state);
        })
        // .then(res => console.log(res))
        .catch(rej => console.log('err'));








}

let template = (item) => {
    return `
    <div class="item">
    <img src="${item.artworkUrl100}" />
    <h3>${item.collectionName}</h3>
    </div>
    `
};

setTimeout(() => render(template, fetch, url()), 5000)

fetch(url()   // mode: 'cors',
    // credentials: 'include',
    // method: 'GET',
    // headers: headers
).then(response => response.json())
    .then(res => state = res.results)
    // .then(res => console.log(res))
    .catch(rej => console.log('err'))



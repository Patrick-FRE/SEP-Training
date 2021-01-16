let button = document.querySelector("#submit");
let input = document.querySelector("#search");
let output = document.querySelector("#output");

button.addEventListener('click', (e) => {
     getDataFromItunes()
})

function getDataFromItunes(){
    let input = document.querySelector("#search");
    let url = 'https://itunes.apple.com/search?term=' + input.value

    fetch(url)
    .then(data => data.json())  // data是回傳的資料, 轉成json格式
    .then(json => {
        console.log(json)
        let finalHTML = ''

        json.results.forEach(song => {
            finalHTML += 
            `
                <div class="col s4 m4 l4">
                    <div class="card">
                        <div class="card-image">
                            <img class="activator" src="${song.artworkUrl100}">
                        </div>
                        <div class="card-content">
                            <span class="card-title">${song.trackCensoredName}</span>
                            <p>${song.artistName}</p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title">Card</span>
                            <p>Here is some more information about this product</p>
                        </div>
                    </div>
                </div>                
            `
        })
        output.innerHTML = finalHTML
    })
    .catch(error => console.log(error))
}

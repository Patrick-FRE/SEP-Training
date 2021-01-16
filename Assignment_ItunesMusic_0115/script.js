let button = document.querySelector("#submit");
let input = document.querySelector("#search");
let output = document.querySelector("#output");

button.addEventListener('click', (e) => {
     getDataFromItunes()
})


input.addEventListener('input', (e) => {
    getDataFromItunes()
})
// for test
// (getDataFromItunes())();

//shakira
function getDataFromItunes(){
    let input = document.querySelector("#search");
    let url = 'https://itunes.apple.com/search?term=' + input.value

    // for test
    // url = "https://itunes.apple.com/search?term=shakira"
    
    
    fetch(url)
    .then(data => data.json())  // data是回傳的資料, 轉成json格式
    .then(json => {
        console.log(json)
        let finalHTML = ''
        json.results.forEach(song => {
            finalHTML += 
            `
            <div class="column">
                <img src="${song.artworkUrl100}" alt="Avatar">
                <div class="container">
                    <h4>${song.trackCensoredName}</h4> 
                    <p>${song.artistName}</p> 
                </div>
            </div>
            `
        })
        output.innerHTML = finalHTML
    })
    .catch(error => console.log(error))
}

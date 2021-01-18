(function(){
    // fetch('https://itunes.apple.com/search?term=taylor&media=music&entity=album&attribute=artistTerm&limit=50')
    // .then(res => res.json())
    // .then(data => {
    //     const results = data.results;
    //     results.forEach(element => {
    //         console.log(element.collectionName);
    //     });
    // })
    // const res = fetch('https://itunes.apple.com/search?term=taylor&media=music&entity=album&attribute=artistTerm&limit=50').then(res => res.json());
    // console.log(res);
    // data.forEach(item => {
    //     console.log(item.collectionName);
    // });
})();

var searchBth = document.getElementById("searchBtn");
var input = document.querySelector("input[name=artistName]");
var result = document.getElementById("result");
var show_name = document.getElementById("show_name");
var artistName = "";

// input.addEventListener("keyup",()=>{
//     console.log(input.value);
// })


searchBth.addEventListener("click",async () => {
    artistName = input.value;
    artistName = artistName.trim();
    artistName = artistName.split(" ").join("+");

    const res = await fetch(`https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=23`);
    const data = await res.json();
    console.log(data.results);
    resHTML = '';
    data.results.forEach(item => {
        resHTML += `
            <div class="card">
                <a href=${item.artistViewUrl} target="_blank">
                    <div class="card__cover">
                    <img src=${item.artworkUrl100} alt="album_cover">
                    </div>
                    <div class="card__collectionName">${item.collectionName}</div>
                    <div class="card__relaseDate">${item.releaseDate}</div>
                    <div class="card__price">$${item.collectionPrice}</div>
                </a>
            </div>
        `;
    });
    result.innerHTML = resHTML;
    show_name.innerHTML = artistName;
})
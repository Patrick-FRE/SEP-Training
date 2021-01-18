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
var clearBtn = document.getElementById("clearBtn");
var input = document.querySelector("input[name=artistName]");
var result = document.getElementById("result");
var show_name = document.getElementById("show_name");
var artistName = "";

clearBtn.addEventListener("click",()=>{
    input.value="";
    clearBtn.style.display="none";
})

input.addEventListener("keyup",()=>{
    if(input.value.length > 0){
        clearBtn.style.display="block";
    }else{
        clearBtn.style.display="none";
    }
    console.log(input.value.length);
})



searchBth.addEventListener("click",async () => {
    artistName = input.value;
    artistName = artistName.trim();
    artistName = artistName.split(" ").join("+");
    resHTML = '';

    const res = await fetch(`https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=23`);
    const data = await res.json();
    if(data.resultCount > 0){
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
        show_name.innerHTML = artistName;
    }else {
        resHTML = `
            <div class="result--error">
                <h1>No results founded...Retype the artist's name</h1>
            </div>
        `;
    }
    result.innerHTML = resHTML;
    input.value = "";
})


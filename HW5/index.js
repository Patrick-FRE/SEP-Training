async function searchAlbums(name){
    const baseURL = "https://itunes.apple.com/search";
    const url = new URL(baseURL);
    const params = {
        term:name,
        media:'music',
        entity:'album',
        attribute:'artistTerm',
        limit:'50'
    };
    url.search = new URLSearchParams(params).toString();
    const res = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res.json();
}

async function findAlbums(name){
    if(!name || name.length<1){
        showPopover();
        return;
    }
    const albums = await searchAlbums(name);
    renderAlbums(albums.results,name);
}

function renderAlbums(results,name){
    const element = document.getElementsByClassName("grid")[0];
    const titleEL = document.getElementsByClassName("result_title")[0];
    titleEL.innerHTML = `${results.length} results by "${name}"`;
    for(const result of results){
        const newNode = document.createElement('div');
        newNode.className="card";
        const albumDom = `
            <img src="${result.artworkUrl100}">
            <p>${result.collectionName}</p>
        `;
        newNode.innerHTML = albumDom;
        element.appendChild(newNode);
    }
}

function showPopover(){
    const popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    setTimeout(()=>{
        popup.classList.toggle("show");
    },2000);
}

(function init(){
    const input = document.getElementById("search");
    input.addEventListener("keyup", function(event) {
        if (event.key === 'Enter') {
            findAlbums(input.value);
        }
    });
})();

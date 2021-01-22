function getArtists(url, callback){
    fetch(url)
    .then(res => res.json())
    .then(res => callback(res));
}

function display(data){
    console.log('data: ', data);

    for(let album of data.results){
        // create card element to display the content
        let card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('class', 'col-2');
        card.style.border = "1px solid gray";

        // create element for genre name
        const genre_name = document.createElement('h6');
        genre_name.setAttribute('class', 'card-text');
        genre_name.style.textAlign = 'center';
        genre_name.innerHTML = album.primaryGenreName;

        // create element for image
        const image = document.createElement('img');
        image.setAttribute('class', 'card-img-top');
        image.setAttribute('src', album.artworkUrl100);
        image.style.width = "50px";

        // create element for Collection Name
        const collection_name = document.createElement('h6');
        collection_name.setAttribute('class', 'card-title');
        collection_name.style.textAlign = 'center';
        collection_name.innerHTML = "<br/>" + album.collectionName;

        // Appending all the data to the card
        card.appendChild(genre_name);
        card.appendChild(image);
        card.appendChild(collection_name);
        card.style.margin = "5px";

        // Append each card to the container element
        container.appendChild(card);

    }
}

function go(e){
    if(e.key === 'Enter' || e.type === 'click'){
        const ARTIST_NAME = document.getElementById('searchbox').value;
        let url = `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50`;
        getArtists(url, display);
        container.innerHTML = '';
    }
}

var container = document.getElementById('container');
const search = document.getElementById('searchbox');
const button = document.getElementById('searchbtn');
button.addEventListener('click', go);
search.addEventListener('keypress', go);
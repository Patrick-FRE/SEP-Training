

const container = document.getElementById('grid-cards');
var cardDiv = document.createElement('div');
cardDiv.setAttribute('class','card');

const inputEle = document.querySelector('.input_search');
inputEle.addEventListener('keypress', e=>{
    if (e.key === 'Enter') {
        let ARTIST_NAME = document.getElementById('search').value;
        console.log(ARTIST_NAME)
        fetch(`https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50`)
        .then(res=>res.json())
        .then(
            data => {
                console.log(data)
                container.innerHTML =""
                for (const collection of data.results) {
                    displayRes(collection)
                }
              })
              e.preventDefault();
              ARTIST_NAME=''
        }
       
    }
);
const displayRes =(collection)=>{
    //card
    const div = document.createElement('div');
    div.setAttribute('class','card')
    div.setAttribute('class','col-md-4')
    //img
     const imgEle = document.createElement('img');
     imgEle.setAttribute('src', collection.artworkUrl100);
     imgEle.setAttribute('class', 'card-img-top');
     //h5
     const hEle = document.createElement('h5');
     hEle.setAttribute('class', 'card-title');
     hEle.innerHTML = collection.collectionName;
     //p
     const pEle = document.createElement('p');
     pEle.setAttribute('class', 'card-text');
     pEle.innerHTML = collection.primaryGenreName;
     //append those
     div.appendChild(imgEle);
     div.appendChild(hEle);
     div.appendChild(pEle);
     container.appendChild(div)
}





// function appendData(data) {
//     var mainContainer = document.getElementById("myData");
//     for (var i = 0; i < data.length; i++) {
//         var div = document.createElement("div");
//         div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
//         mainContainer.appendChild(div);
//     }
// }

const container = document.getElementById('grid-cards');
var cardDiv = document.createElement('div');
cardDiv.setAttribute('class','card');

const inputEle = document.querySelector('.input_search');
inputEle.addEventListener('keypress', e=>{
    e.preventDefault();
    if (e.key === 'Enter') {
        let ARTIST_NAME = document.getElementById('search').value;
        console.log(ARTIST_NAME)
        fetch(`https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50`)
        .then(res=>res.json())
        .then(
            data => {
                for (const collection of data.results) {
                    displayRes(collection)
                }
              })
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

 // for (const collection of data.results) {
                //    let card= `<div class="card">
                //     <img class="card-img-top" src="${collection.artworkUrl100}" >
                //     <h5 class="card-title">{collection.collectionName}</h5>
                //     <p class="card-text">{collection.primaryGenreName}</p>
                //      </div>`;
                //      card +=card;
                //     console.log(card)
                //     container.innerHTML=card;
                // }

// fetch(myRequest)
//   .then(response => response.json())
//   .then(data => {
//     for (const product of data.products) {
//       let listItem = document.createElement('li');
//       listItem.appendChild(
//         document.createElement('strong')
//       ).textContent = product.Name;
//       listItem.append(
//         ` can be found in ${
//           product.Location
//         }. Cost: `
//       );
//       listItem.appendChild(
//         document.createElement('strong')
//       ).textContent = `£${product.Price}`;
//       myList.appendChild(listItem);
//     }
//   })



console.log("This is in script!");

fetch('https://itunes.apple.com/search?')
  .then(response => response.json())
  .then(json => console.log(json))




//MVC pattern
const albumAPI = (() => {
    // some variables and functions here
    const baseUrl = 'https://itunes.apple.com/search?term='

    const artistName = 'lady'
    const keywordUrl = '&media=music&entity=album&attribute=artistTerm&limit=50'

    //console.log([baseUrl, artistName, keywordUrl].join(''));

    const getAlbums = () => fetch([baseUrl, artistName, keywordUrl].join(''))
            .then(respond => respond.json())
            //.then(json => console.log(json))

    //return the fnctions
    return{
        getAlbums
    }
})();


const View = (() => {
    const domString = {
        albumCard: 'card',
        info: 'info',
        cardContainer: 'result',
        inputSearch: 'search'
    }

    const render = (element, htmlTemplate) => {
        // console.log('in render')
        element.innerHTML = htmlTemplate;
        //element.innerHTML = '<h1>asdaaaaaaaa</h1>'
    }

    const displayresult = (albumArr) => {
        let template = '';
        albumArr.forEach(album => {
            //console.log(album);
            template += 
            `<div class="card" style="width: 18rem;">
            <img src="${album.artworkUrl100}" class="card-img-top" alt="..."> 
            <div class="card-body">
              <p class="card-title">${album.collectionName}</p>
              <a href= "${album.collectionViewUrl}" >Go to the album</a>
            </div>
          </div>`
        });
        return template;
    }

    return{
        domString,
        render,
        displayresult
    }
})();

const Model = ((api, view) => {
    class AlbumCard {
        constructor(collectionName, collectionLink){
            this.clollectionName = collectionName;
            this.collectionLink = collectionLink;
        }
    }

    class State {
        #albumList = [];
        #userSearch = '';

        get userSearch(){
            return this.#userSearch;
        }

        set userSearch(newInput){
            this.#userSearch = newInput;
            //get user's search keyword from input element
            
        }

        get albumList(){
            return this.albumList;
        }

        set albumList(newList){
            //console.log('in state set function')
            this.#albumList = newList;
            const container = document.querySelector('.' + view.domString.cardContainer);
            //console.log(container);
            //console.log('state.Album', this.#albumList);
            const info = document.querySelector('.'+view.domString.info);
            view.render(info, '');
            const tmpAlbumList = view.displayresult(this.#albumList);
            view.render(container, tmpAlbumList);
            

        }
    }

    const fetchedAlbums = api.getAlbums;

    return{
        fetchedAlbums,
        State,
        AlbumCard
    }

})(albumAPI, View);

const AppController = ((view, model) => {
    const state = new model.State();

    const addEventListenerOnSearch = () => {
        const searchElement = document.querySelector('.'+ view.domString.inputSearch);
        searchElement.addEventListener('keyup', (event) => {
            if(event.key === 'Enter'){
                console.log('seach input keyup---');
                state.userSearch = event.target.value;
                console.log(state.userSearch);
            }
            
        })
    }

    const initAlbums = () => {
        model.fetchedAlbums().then(data => {
            //console.log(data.results);
            state.albumList = data.results;
            addEventListenerOnSearch();
        });
    }


    const init = () => {
        console.log('init');
        initAlbums();
    }

    return{
        init
    }


})(View, Model);

AppController.init();
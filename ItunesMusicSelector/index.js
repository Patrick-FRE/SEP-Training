console.log("This is in script!");


//MVC pattern
const albumAPI = (() => {
    // some variables and functions here
    const baseUrl = 'https://itunes.apple.com/search?'
    const keywordUrl = '&media=music&entity=album&attribute=artistTerm&limit=50'

    //console.log([baseUrl, artistName, keywordUrl].join(''));

    const getAlbums = (userInput) => {
        let artistName = 'term=';
        artistName += userInput.split(' ').join('+')
        //console.log('In getAlbums: ', [baseUrl, artistName, keywordUrl].join(''));
        const p = fetch([baseUrl, artistName, keywordUrl].join(''))
        return p.then(respond => respond.json())
        
    }
    

    //return the functions
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
    // class AlbumCard {
    //     constructor(collectionName, collectionLink){
    //         this.clollectionName = collectionName;
    //         this.collectionLink = collectionLink;
    //     }
    // }

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
            return this.#albumList;
        }

        set albumList(newList){
            //console.log('in state set function')
            this.#albumList = newList;
            const container = document.querySelector('.' + view.domString.cardContainer);
            //console.log(container);
            //console.log('state.Album', this.#albumList);
            const tmpAlbumList = view.displayresult(this.#albumList);
            view.render(container, tmpAlbumList);
            

        }
    }
    
    const fetchedAlbums = api.getAlbums;

    return{
        fetchedAlbums,
        State,
        //AlbumCard
    }

})(albumAPI, View);

const AppController = ((view, model) => {
    const state = new model.State();

    const addEventListenerOnSearch = () => {
        const searchElement = document.querySelector('.'+ view.domString.inputSearch);
        searchElement.addEventListener('keyup', (event) => {
            if(event.key === 'Enter'){
                console.log('seach input keyup---');
                const info = document.querySelector('.' + view.domString.info);
                const container = document.querySelector('.' + view.domString.cardContainer);
                if(event.target.value){
                    view.render(info, '');
                    state.userSearch = event.target.value;
                    model.fetchedAlbums(state.userSearch).then(data => {
                        if(data.results.length === 0){
                            view.render(info, `<p>Sorry, there is no result for "${event.target.value}"</p>`)
                        }
                        state.albumList = data.results;
                    });
                }else{
                    view.render(info, '<p class="hint">Search Albums by ArtisName</p>');
                    view.render(container, '');
                }
            }
            
        })
        
    }

    const initAlbums = () => {
        // console.log("In initAlbums --")
        addEventListenerOnSearch();
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
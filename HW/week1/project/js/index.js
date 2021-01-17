var post_cards_container = document.querySelector('#post_cards_container');
var subscribe = document.querySelector('.subscribe');
var search = document.querySelector('.search');

subscribe.addEventListener("click",()=> {
    alert('Coming soon!');
})

search.addEventListener("click",()=> {
    alert('Coming soon!');
})

var cardHTML =  `
<div class="card">
    <div class="card__subtitle">
        World
    </div>
    <div class="card__title">
        Example Blog Post
    </div>
    <div class="card__date">
        Nov 12
    </div>
    <div class="card__example">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupiLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.datat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <div class="card__continue">
        <a>Continue reading...</a>
    </div>
</div>`;

const createCard = (num) => {
    let res='';
    for(let i=0; i<num; i++){
        res+=cardHTML;
    }
    return res;
}

post_cards_container.innerHTML = createCard(6);

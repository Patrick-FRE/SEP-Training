var post_cards_container = document.querySelector('#post_cards_container');
var subscribe = document.querySelector('.subscribe');
var search = document.querySelector('.search');
var card_example_list = document.getElementsByClassName('card__example'); //ASYNC. can not use querySelectorAll. 
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

subscribe.addEventListener("click",()=> {
    alert('Coming soon!');
})

search.addEventListener("click",()=> {
    alert('Coming soon!');
})

//Inject blog cards into <main>
// Create crad HTML
var cardHTML =  `
<div class="card">
    <div class="card__subtitle">
        World
    </div>
    <div class="card__title">
        Example Blog Title
    </div>
    <div class="card__date">
        ${date}
    </div>
    <div class="card__example">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupiLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.datat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <div class="card__continue">
        <a>Continue reading...</a>
    </div>
</div>`;

//Define fuction to generate num cards
const createCard = (num) => {
    let res='';
    for(let i=0; i<num; i++){
        res+=cardHTML;
    }
    return res;
}

//Insert generated card into container
post_cards_container.innerHTML = createCard(6);

[...card_example_list].forEach((post) => {
    let text = post.innerHTML;
    text = text.substr(0,100);
    text += '...';
    post.innerHTML = text;
})
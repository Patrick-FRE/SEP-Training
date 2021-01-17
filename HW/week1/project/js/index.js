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
    <div class="card__date>Nov 12</div>
    <div class="card__example">This card represents an example blog post</div>
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

//let cardCollection = document.getElementsByClassName("card-collection");

//console.log(cardCollection);
console.log("112")

function multipleNode(node, count, deep){
    console.log('in function');
    for (let i = 0; i < count -1; i++) {
        console.log(i);
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
        console.log(node);
    }
}


let cardSample = document.getElementsByClassName('card-sample').querySelector("");
console.log(cardSample);
//multipleNode(cardSample, 3, true);
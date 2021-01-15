let url = "https://jsonplaceholder.typicode.com/photos";

function fetchFromApi(url, callback){
    fetch(url)
        .then(res => res.json())
        .then(data => callback(data))
}

function fetchData(data){
    let results = "";
    let len = data.length;
    let no_of_rows = 8;
    for(let i=0; i<len-no_of_rows; i+= no_of_rows){
        results += "<tr>"
        for(let j=i; j<i+no_of_rows; j++)
            results += "<td> <img style=\"width: 150px;\" src =\"" + data[j].url + "\"/></td>";
        results += "</tr>"
    }
    document.getElementById("pictures").innerHTML += results;
}

fetchFromApi(url, fetchData);
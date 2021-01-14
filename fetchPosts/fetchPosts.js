//fetch to the table


  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    res.json()
    .then(data => {
        if (data.length !== 0) {
          var contactData = "";
          data.forEach((post) => {
            contactData += "<tr>";
            contactData += "<td>" + post.id + "</td>";
            contactData += "<td>" + post.title + "</td>";
            contactData += "<td>" + post.body + "</td>";
          });
          document.getElementById('posts').innerHTML = contactData;
        }
      }
    )
  }
)
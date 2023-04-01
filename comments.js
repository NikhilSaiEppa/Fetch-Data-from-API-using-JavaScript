
function displayComments(userId) {
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}&_embed=comments`;

  // fetch the comments data from the API
  fetch(url)
    .then(response => response.json())
    .then(posts => {
      // create a new HTML page to display the comments
      const newPage = window.open("", "_blank");
      newPage.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>User Comments</title>
            <link rel="stylesheet" type="text/css" href="app.css">
            
          </head>
          <body>
            <h1>Comments</h1>
            <ul id="commentsList">
            </ul>
            
          </body>
        </html>
      `);

      // add comments to the new page
      const comments = posts.flatMap(post => post.comments);
      const commentsList = newPage.document.querySelector("#commentsList");

      comments.forEach(comment => {
        // create a new list item for each comment
        const listItem = newPage.document.createElement("li");
        // add a link to the comment name in the list item
        const link = newPage.document.createElement("a");
        link.href = `comment.html?id=${comment.postId}`;
        link.textContent = comment.name;
        listItem.appendChild(link);

        commentsList.appendChild(listItem);
      });
    })
    .catch(error => console.log(error));
}



  

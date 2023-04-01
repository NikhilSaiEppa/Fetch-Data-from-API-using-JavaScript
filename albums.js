function displayAlbums(userId) {
    const url = `https://jsonplaceholder.typicode.com/albums?userId=${userId}&_embed=comments`;  
    // fetch the albums data from the API
    fetch(url)
      .then(response => response.json())
      .then(albums => {
        // create a new HTML page to display the albums
        const newPage = window.open("", "_blank");
        newPage.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>User albums</title>
              <link rel="stylesheet" type="text/css" href="app.css">
            </head>
            <body>
              <h1>Albums </h1>
              <ul id="albums_List">
              </ul>
            </body>
          </html>
        `);
        // add albums to the new page
        const titles = albums.flatMap(album => album.title);
        const albums_List = newPage.document.querySelector("#albums_List");
        let id=1
        titles.forEach(title => {
          // create a new list item for each album
          const listItem = newPage.document.createElement("li");
          // add a link to the album name in the list item
          const link = newPage.document.createElement("a");
          link.href = `albumDetails.html?id=${id}`;
          link.textContent = title;
          listItem.appendChild(link);
          albums_List.appendChild(listItem);
          id+=1
        });
      })
      .catch(error => console.log(error));
  }
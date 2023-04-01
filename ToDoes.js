  function CompletedTodoes(userId,status) {
    
    var heading;
    if(status=='total'){
        heading='Total'
    }
    else if(status){
        heading='Completed'
    }
    else {
        heading='Pending'
    }
    const url = `https://jsonplaceholder.typicode.com/todos?userId=${userId}&_embed=comments`;
    console.log("status",status)
    // fetch the Todoes data from the API
    fetch(url)
      .then(response => response.json())
      .then(total_todos => {
        // create a new HTML page to display the Todoes        
        const newPage = window.open("", "_blank");
        newPage.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>${heading}ToDoes</title>
              <link rel="stylesheet" type="text/css" href="app.css">              
            </head>
            <body>
              <h1>${heading} ToDoes</h1>
              <ul id="toDoes_List">
              </ul>
            </body>
          </html>
        `);
        const toDoes_List = newPage.document.querySelector("#toDoes_List");
        total_todos.forEach(todo => {
          // create a new list item for each todo
          const listItem = newPage.document.createElement("li");     
          const link = newPage.document.createElement("a");
          if(todo.completed==status){
            link.textContent = todo.title;  
          }
          else if(status=='total'){
            link.textContent = todo.title;
          }
          listItem.appendChild(link);
          toDoes_List.appendChild(listItem);
        });
      })
      .catch(error => console.log(error));
  }


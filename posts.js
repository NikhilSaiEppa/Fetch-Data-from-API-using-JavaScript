const UserInfo=(userId)=>{
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  .then(response => response.json())
  .then(response => response)
  .catch(err => SVGComponentTransferFunctionElement.log(err));
}
const viewPosts=(userId)=>{
    UserInfo(userId).then(user => {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
          const titles = posts.map((post, index) => `<li><a href="#" id="post-${index+1}" data-post-id="${post.id}">${index+1}.${post.title}</a></li>`);
          const html = `
            <html>
              <head>
                <title>Posts by ${user.name}</title>
                <link rel="stylesheet" type="text/css" href="app.css">
              </head>
              <body>
                <h1>Posts by ${user.name}</h1>
                <ul>
                  ${titles.join("")}
                </ul>
                <script>
                  const postLinks = document.querySelectorAll('[data-post-id]');
                  postLinks.forEach(link => {
                    link.addEventListener("click", event => {
                      event.preventDefault();
                      const postId = link.getAttribute("data-post-id");
                      fetch(\`https://jsonplaceholder.typicode.com/posts/\${postId}\`)
                        .then(response => response.json())
                        .then(post => {
                          const postHtml = \`
                            <html>
                              <head>
                                <title>Post Details</title>
                                <link rel="stylesheet" type="text/css" href="app.css">
                              </head>
                              <body>
                                <p>Title:  \${post.title}</p>
                                <p>Body: \${post.body}</p>
                                <ul id="comments"></ul>
                              </body>
                            </html>
                          \`;
                          const postPage = window.open("", "" );
                          postPage.document.write(postHtml);
                        })
                        .catch(error => console.log(error));
                    });
                  });
                </script>
              </body>
            </html>
          `;
          const newPage = window.open("");
          newPage.document.write(html);
        })
        .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
}










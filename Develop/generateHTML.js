

function generateHTML(data) {
  return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <title>Document</title>
      <body>
      <div>
      <h1 style="color:${data.data.color};">${data.data.name}</h1>
      <hr>
      <div>
          <img src='${data.data.avatar_url}' alt="Photo of ${data.data.name}"/>
          <p>Bio: ${data.data.bio}</p>
          <p>Company: ${data.data.company}</p>
          <p>GitHub URL: <a href='${data.data.html_url}'>${data.data.name}'s GitHub</a></p>
          <p>Public Repos: ${data.data.public_repos}</p>
          <p>Followers: ${data.data.followers}</p>
          <p>Following: ${data.data.following}</p>
          <p>Location: ${data.data.location}</p>
      </div>
  </div>
      </body>
      </html>`;
  }
        

        module.exports = generateHTML;


       
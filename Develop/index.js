
const axios = require("axios");
const inquirer = require("inquirer");
const genHTML = require("./generateHTML");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(){
   return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
          },
          {
            type: "list",
            message: "What is your favorite color?",
            name: "color",
            choices: ["green", "blue", "pink", "red"]
          }
        ]);
        }

        function generateHTML(data) {
            return `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
          </head>
          <body>
          <div class="container">
          <h1>${data.name}</h1>
          <hr>
          <div>
              <img src='${data.avatar_url}' alt="Photo of ${data.name}'>
              <p>Bio: ${data.bio}</p>
              <p>Company: ${data.company}</p>
              <p>Repo URL: <a href='${data.html_url}'>${data.name}'s Repo</a></p>
              <p>Public Repos: ${data.public_repos}</p>
              <p>Followers: ${data.followers}</p>
              <p>Following: ${data.following}</p>
              <p>Location: ${data.location}</p>
          </div>
      </div>
          </body>
          </html>`;
          }

          


        function init() {
            
 promptUser()
    .then(function ({username}) {
        const queryUrl = `https://api.github.com/users/${username}`;
        axios.get(queryUrl).then(function (data) {
                const html = generateHTML(data);

                console.log(data)
            
                return writeFileAsync("index.html", html);
              })
              .then(function() {
                console.log("Successfully wrote to index.html");
              })
              .catch(function(err) {
                console.log(err);
              });
             // console.log(res.data);
            //  console.log(data);
            
            })
        };
    

    init()

    


        
        
        

        
       

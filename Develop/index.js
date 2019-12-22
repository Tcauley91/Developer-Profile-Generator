
const axios = require("axios");
const inquirer = require("inquirer");
const genHTML = require("./generateHTML");
const pdf = require('html-pdf');

// var markdown = require( "markdown" ).markdown;



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
        
        function init() {
            
 promptUser()
    .then(function ({username, color}) {
        const queryUrl = `https://api.github.com/users/${username}`;
        axios.get(queryUrl).then(function (data) {
          data.data.color= color;
                const html = genHTML(data);
            
                pdf.create(html).toFile('./profile.pdf', function(err, res) {
                  if (err) return console.log(err);
                  console.log(res); // { filename: 'profile.pdf' }
                });
            
            })
        });
    
      }
    init()
      

    


        
        
        

        
       

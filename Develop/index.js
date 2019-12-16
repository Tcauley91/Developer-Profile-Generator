const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");


inquirer
    .prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
          },
          {
            type: "list",
            message: "What is your favorite color?",
            name: "color",
            choices: ["Blue", "Red", "Yellow", "Orange", "Green", "Purple", "Brown"]
          }])

    .then(function ({ username }) {
        const queryUrl = `https://api.github.com/users/${username}`;
        axios.get(queryUrl).then(function (res) {
            // console.log(res.data);
            console.log(res.data.avatar_url);
            console.log(res.data.name);
            console.log(res.data.location);
            console.log(res.data.html_url);
            console.log(res.data.bio);
            console.log(res.data.public_repos);
            console.log(res.data.followers);
            console.log(res.data.following);
        })
    })
            

// function writeToFile(fileName, data) {
 
// }

// function init() {

// init();

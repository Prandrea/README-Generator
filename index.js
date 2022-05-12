// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type:"input",
        name: "Github",
        message: "What is your github username?"
    },
    {
        type:"list",
        name: "License",
        message: "What is your license?",
        choices: ["MIT", "APACHE", "Mozilla", "none"]
    },

// add rest of questions in acceptance criteria here



])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
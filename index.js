// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./output/README.md', data, err => {
        if (err) throw err;
        console.log('README complete!');
        });
}



// TODO: Create a function to initialize app
function init() {
       // TODO: Create an array of questions for user input
return inquirer.prompt([
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
}


// Function call to initialize app
init()
.then((data) => {
    return writeToFile(generateMarkdown(data));
})
.catch((err) => {
    console.log(err);
})
;


console.log (data)
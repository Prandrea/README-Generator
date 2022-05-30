// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./output/README.md', parseInt(data).toString(), (err) => {
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
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type:"input",
        name:"description",
        message:"Please provide a short description explaining the what, why, and how of your project."
    },
    {
        type:"input",
        name:"installation",
        message:"What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
    },
    {
        type:"input",
        name:"usage",
        message:"Provide instructions and examples for use. Include screenshots as needed."
    },
    {
        type:"list",
        name: "license",
        message: "Please choose a license. This lets other developers know what they can and cannot do with your project.",
        choices: ["MIT", "APACHE", "Mozilla", "Eclipse", "none"]
    },
    {
        type:"input",
        name:"contributing",
        message:"What are the contribution guidelines for this project?"
    },
    {
        type:"input",
        name:"tests",
        message:"Please provide any relevant tests for your application and provide examples on how to run them here."
    },
    {
        type:"input",
        name: "github",
        message: "What is your Github username?"
    },
    {
        type:"input",
        name: "email",
        message: "What is your email address?"
    }
])
}

const generateMarkdown = require('./utils/generateMarkdown');

// Function call to initialize app
init()
.then((data) => {
    console.log(data)
    console.log(generateMarkdown(data))
    return writeToFile(generateMarkdown(data));
})
.catch((err) => {
    console.log(err);
});



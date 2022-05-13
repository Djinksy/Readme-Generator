// declaring the variables
const inquirer = require('inquirer');
const fs = require('fs');

//user prompts question to fill out the readme
const promptUser = () => {
    return inquirer.prompt([{
            //input github username
            type: "input",
            name: "username",
            message: "Enter Your Github Username"
        },
        // input email
        {
            type: "input",
            name: "email",
            message: "Please enter your email:"
        },
        //describing the installation process if any
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process"
        },
        {
            type: "input",
            name: "usage",
            message: "What does the user need to know about the repository?"
        },

        //title of project
        {
            type: "input",
            name: "title",
            message: "What is the project title?",
        },
        //brief description of project
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project:"

        },
        // choice of license
        {
            type: "list",
            name: "license",
            message: "What kind of license should your project have?",
            choices: ["MIT", "GNU"],

        },
        //contributors of the project
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this project?"
        },

        // answer if any tests were included
        {
            type: "input",
            name: "tests",
            message: "Any tests included?"
        },
    ]);
};

const generateReadMe = ({ username, email, installation, title, description, license, contributing, tests }) =>
    `# ${title}

 ## Description
    
 ${description}
    
# Table of Contents
    
-[Installation](#installation)
    
-[Usage](#usage)
    
-[License](#license)
    
-[Contributing](#contributing)
    
-[Test](#test)
    
-[Questions](#questions)
    
    
# Installation
    
 ${installation} 
    
# Usage

${usage} 
    
# License
    
${license}
    
# Contributing
    
${contributing}
    
# Test
    
${tests}
    
# Questions 
    
${username},${email} `;

const init = () => {
    promptUser()

    .then((answers) => fs.writeFileSync('README.md', generateReadMe(answers)))
        .then(() => console.log('Transfered to README.md'))
        .catch((err) => console.error(err));
}

init();
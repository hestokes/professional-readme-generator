const inquirer = require("inquirer");
const fs = require("fs");

//inquirer to generate readme questions

inquirer.prompt(
    [
        {
            type: 'input',
            message: 'What is the title of your project? (Required)',
            name: "title",
            validate: (value)=>{
                if (value) {
                return true;
                } else {
                console.log('Please enter the title of your project!');
                return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Please write a description of your project. (Required)',
            name: "description",
            validate: (value)=>{
                if (value) {
                return true;
                } else {
                console.log('Please describe your project here!');
                return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What command should be run to install dependencies?. (Required)',
            name: "installation",
            default: "npm i"
        },
        {
            type: 'input',
            message: 'How should your project be used? (Required)',
            name: "usage",
            validate: (value)=>{
                if (value) {
                return true;
                } else {
                console.log('Please enter a description of your projects usage here!');
                return false;
                }
            }
        },
        {
            type: 'input',
            message: 'How should a user contribute to your project?. (Required)',
            name: "contribute",
            validate: (value)=>{
                if (value) {
                return true;
                } else {
                console.log('Please enter how a user can contribute here!');
                return false;
                }
            }
        },
        {
            type: 'input',
            message: 'How should a user run tests on this project?. (Required)',
            name: "tests",
            validate: (value)=>{
                if (value) {
                return true;
                } else {
                console.log('Please inform user of how to run tests here!');
                return false;
                }
            }
        },
        {
            type: 'checkbox',
            message: 'What license would you like to add to your project?. (Required)',
            name: "license",
            choices: [
                "MIT",
                "Apache License",
                "GPL license",
                "GNU General Public License (GPL) 2.0"
            ]
        },
        {
            type: 'input',
            message: 'What is your GitHub username?. (Required)',
            name: "username",
            validate: (value)=>{
                if (value) {
                return true;
                } else {
                console.log('Please enter your GitHub username here!');
                return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is your email address if a user has questions?. (Required)',
            name: "tests",
            validate: (value)=>{
                if (value) {
                return true;
                } else {
                console.log('Please enter your email here!');
                return false;
                }
            }
        }

    ]
)